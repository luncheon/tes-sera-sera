import type _Tesseract from 'tesseract.js'
declare const Tesseract: typeof _Tesseract

const sleep = (milliseconds: number) => new Promise(resolve => setTimeout(resolve, milliseconds))

const createTesseractWorker = async (langs: string, params: Partial<Tesseract.WorkerParams>, options: Partial<Tesseract.WorkerOptions>) => {
  const tesseractWorker = Tesseract.createWorker(options)
  await tesseractWorker.load()
  await tesseractWorker.loadLanguage(langs)
  await tesseractWorker.initialize(langs)
  await tesseractWorker.setParameters(params)
  return tesseractWorker
}

const startCamera = async (videoElement: HTMLVideoElement) => {
  videoElement.srcObject = await navigator.mediaDevices.getUserMedia({
    video: {
      facingMode: 'environment',
      width: videoElement.width,
      height: videoElement.height,
    },
  })
  await new Promise(resolve => videoElement.onloadedmetadata = resolve)
  videoElement.play()
}

const main = async () => {
  // https://github.com/naptha/tesseract.js/blob/master/docs/api.md
  const searchParams = new URLSearchParams(location.search)
  const params = {
    oem: searchParams.get('oem') ? parseInt(searchParams.get('oem')!, 10) : Tesseract.OEM.DEFAULT,
    psm: searchParams.get('psm') as Tesseract.PSM || Tesseract.PSM.SINGLE_BLOCK,
    languages: searchParams.get('languages') || 'jpn+eng',
    characters: searchParams.get('characters') || '',
  }
  for (const [key, value] of Object.entries(params)) {
    document.querySelector<HTMLInputElement | HTMLSelectElement>(`[name=${key}]`)!.value = value as string
  }

  const statusTextElement = document.getElementsByClassName('status-text')[0]
  const progressElement = document.getElementsByTagName('progress')[0]
  const videoElement = document.getElementsByTagName('video')[0]

  const [tesseractWorker] = await Promise.all([
    createTesseractWorker(
      params.languages,
      {
        tessedit_ocr_engine_mode: params.oem,
        tessedit_pageseg_mode: params.psm,
        tessedit_char_whitelist: params.characters,
        tessjs_create_hocr: '0',
        tessjs_create_tsv: '0',
      },
      {
        logger: log => {
          statusTextElement.textContent = log.status
          progressElement.value = log.progress
        },
      },
    ),
    startCamera(videoElement),
  ])

  let videoChanged = true
  videoElement.addEventListener('play', () => videoChanged = true)

  const canvasElement = document.getElementsByTagName('canvas')[0]
  const context2d = canvasElement.getContext('2d')!
  const resultElement = document.getElementsByTagName('textarea')[0]
  while (true) {
    if (videoElement.paused) {
      if (videoChanged) {
        videoChanged = false
      } else {
        await sleep(1000)
        continue
      }
    }
    context2d.drawImage(videoElement, 0, 0)
    const { data } = await tesseractWorker.recognize(canvasElement)
    console.debug(data)
    resultElement.value = data.text
    await sleep(1000)
  }
}

(async () => {
  try {
    await main()
  } catch (error) {
    console.error(error)
    alert(error.message || JSON.stringify(error))
  }
})()
