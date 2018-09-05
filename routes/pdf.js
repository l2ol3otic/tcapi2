const express = require('express')
const router = express.Router()
const PDFDocument = require('pdfkit')
const HummusRecipe = require('hummus-recipe');
var pdfFiller   = require( 'node-pdffiller' );


router.post('/', (req, res) => {

    console.log(req.body)
    const doc = new PDFDocument()
    let filename = req.body.filename
    console.log(filename)
    // Stripping special characters
    filename = encodeURIComponent(filename) + '.pdf'
    // Setting response to 'attachment' (download).
    // If you use 'inline' here it will automatically open the PDF
    res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"')
    res.setHeader('Content-type', 'application/pdf')
    const content = req.body.content
    doc.y = 300
    doc.text(content, 50, 50)
    doc.pipe(res)
    doc.end()
})

router.post('/1', (req,res) => {
    const pdfDoc = new HummusRecipe('./pdf/2.pdf', 'output.pdf');
    pdfDoc
    // edit 1st page
    
    .editPage(1)
    .text('Add some texts to an existing pdf file', 150, 300)
    .rectangle(20, 20, 40, 100)
    .comment('Add 1st comment annotaion', 200, 300)
    .image('./image/cat.jpg', {width: 50, keepAspectRatio: true})
    .endPage()
    // end and save
    .endPDF();
})

router.post('/2', (req,res) => {
    
    var sourcePDF = "./pdf/Testpage.pdf";
    var destinationPDF =  "./pdf/TestcomplateEdit.pdf";
     
    var data = {
        "ID" : "0001",
        "NAME" : "Doe",
    };
     
    pdfFiller.fillForm( sourcePDF, destinationPDF, data, function(err) { 
        if (err) throw err;
        console.log("In callback (we're done)."); 
    });
})

module.exports = router