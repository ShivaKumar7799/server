const express = require('express');
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const router = express.Router(); // Use express Router for API routing

router.post('/generate-pdf', async (req, res) => {
  try {
    const fontPath = path.resolve(__dirname, '../Playmaker D.ttf');
    const fontFile = fs.readFileSync(fontPath);
    const htmlContent = `<!DOCTYPE html>
                          <html lang="en">
                            <head>
                              <meta charset="UTF-8" />
                              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                              <title>Document</title>
                              <style>
                            
                              </style>
                            </head>
                            <body>
                              <h1>font-familyasdas كيف حالك</h1>
                            </body>
                          </html>`;

    // Launch Puppeteer
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    // Generate PDF
    const pdfPath = path.join('/tmp', 'output.pdf'); // Temporary folder for Vercel

    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
    });

    await browser.close();

    // Send the generated PDF as a response
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=output.pdf',
    });

    const pdfStream = fs.createReadStream(pdfPath);
    pdfStream.pipe(res);

    pdfStream.on('end', () => {
      fs.unlinkSync(pdfPath); // Delete the PDF file after sending it
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    res.status(500).send('Error generating PDF');
  }
});

module.exports = router;
