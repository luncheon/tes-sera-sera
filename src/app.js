const params = {
  oem: Tesseract.OEM.DEFAULT,
  psm: Tesseract.PSM.SPARSE_TEXT,
  langs: 'jpn+eng',
  whitelist: '',
}
for (const [key, value] of new URLSearchParams(location.search).entries()) {
  params[key] = value
}
for (const key of ['oem', 'psm', 'langs', 'whitelist']) {
  document.querySelector(`[name=${key}]`).value = params[key]
}

const progressElement = document.getElementsByTagName('progress')[0]
const logger = log => {
  if (log.status === 'recognizing text') {
    progressElement.value = log.progress
  } else {
    console.debug(log)
  }
}

// https://github.com/naptha/tesseract.js/blob/master/docs/api.md
const createTesseractWorker = async () => {
  const tesseractWorker = Tesseract.createWorker({ logger })
  await tesseractWorker.load()
  await tesseractWorker.loadLanguage(params.langs)
  await tesseractWorker.initialize(params.langs)
  await tesseractWorker.setParameters({
    tessedit_ocr_engine_mode: params.oem,
    tessedit_pageseg_mode: params.psm,
    tessedit_char_whitelist: params.whitelist,
    tessjs_create_hocr: '0',
    tessjs_create_tsv: '0',
  })
  return tesseractWorker
}

const playVideo = async videoElement => {
  const videoStream = await navigator.mediaDevices.getUserMedia({
    video: {
      facingMode: 'environment',
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
    createTesseractWorker(),
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
