const progressElement = document.getElementsByTagName('progress')[0]
const logger = log => {
  if (log.status === 'recognizing text') {
    progressElement.value = log.progress
  } else {
    console.debug(log)
  }
}

// https://github.com/naptha/tesseract.js/blob/master/docs/api.md
const createTesseractWorker = async langs => {
  const tesseractWorker = Tesseract.createWorker({ logger })
  await tesseractWorker.load()
  await tesseractWorker.loadLanguage(langs)
  await tesseractWorker.initialize(langs)
  await tesseractWorker.setParameters({
    tessedit_pageseg_mode: Tesseract.PSM.SPARSE_TEXT,
    tessjs_create_hocr: '0',
    tessjs_create_tsv: '0',
  })
  return tesseractWorker
}

const playVideo = async videoElement => {
  const videoStream = await navigator.mediaDevices.getUserMedia({
    video: {
      width: videoElement.width,
      height: videoElement.height,
    },
  })
  videoElement.srcObject = videoStream
  await new Promise(resolve => videoElement.onloadedmetadata = resolve)
  videoElement.play()
}

(async () => {
  const videoElement = document.getElementsByTagName('video')[0]
  const [tesseractWorker] = await Promise.all([
    createTesseractWorker('jpn+eng'),
    playVideo(videoElement),
  ])

  let videoChanged = true
  videoElement.addEventListener('play', () => videoChanged = true)

  const canvasElement = document.getElementsByTagName('canvas')[0]
  const context2d = canvasElement.getContext('2d')
  const resultElement = document.getElementsByTagName('textarea')[0]
  while (true) {
    if (videoElement.paused) {
      if (videoChanged) {
        videoChanged = false
      } else {
        await new Promise(resolve => setTimeout(resolve, 1000))
        continue
      }
    }
    try {
      context2d.drawImage(videoElement, 0, 0)
      const recognized = await tesseractWorker.recognize(canvasElement)
      console.debug(recognized.data)
      resultElement.value = recognized.data.text
    } catch (error) {
      console.error(error)
      alert(error.message || JSON.stringify(error))
      break
    }
  }
})()
