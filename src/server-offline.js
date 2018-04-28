import Path from 'path'
import PdfmakePrinter from 'pdfmake'

import transform from './transform'

let _printers
const getPrinter = locale => {
  let p = _printers[locale]
  if (!p) {
    p = _printers[locale] = new PdfmakePrinter({
      Roboto: {
        normal: Path.join(__dirname, 'fonts/chinese.msyh.ttf'),
        bold: Path.join(__dirname, 'fonts/chinese.msyh.ttf'),
        italics: Path.join(__dirname, 'fonts/chinese.msyh.ttf'),
        bolditalics: Path.join(__dirname, 'fonts/chinese.msyh.ttf'),
      },
    })
  }
  return p
}

export const loadTemplate = templateId => {
  // load template CACHE or from network
}

export const renderTemplate = (template, data) => {
  const pdfDef = transform(template, data)
  return getPrinter('zh').createPdfKitDocument(pdfDef)
}

export default ({ templateId, data }) => loadTemplate(templateId).then(template => renderTemplate(template, data))
