const express = require('express')
const router = express.Router()
const PDFDocument = require('pdfkit')
const HummusRecipe = require('hummus-recipe');
const pdfFiller = require('pdffiller-stream');




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

router.post('/1', (req, res) => {
    const pdfDoc = new HummusRecipe('./pdf/2.pdf', 'output.pdf');
    pdfDoc
        // edit 1st page

        .editPage(1)
        .text('Add some texts to an existing pdf file', 150, 300)
        .rectangle(20, 20, 40, 100)
        .comment('Add 1st comment annotaion', 200, 300)
        .image('./image/cat.jpg', { width: 50, keepAspectRatio: true })
        .endPage()
        // end and save
        .endPDF();
})

router.post('/2', (req, res) => {

    var sourcePDF = "./pdf/Testpage.pdf";
    var data = {
        "ID": "0001",
        "NAME": "Doe",
    };

    pdfFiller.fillForm(sourcePDF, data)
        .toFile('./pdf/Conpletepage.pdf')
        .then((outputStream) => {
            // use the outputStream here;
            // will be instance of stream.Readable
        }).catch((err) => {
            console.log("ERROR 88888", err);
        });
})

router.post('/3', (req, res) => {

    var hummus = require('hummus'),
	fillForm = require('./pdf-form-fill').fillForm;

    var writer = hummus.createWriterToModify('./pdf/OoPdfFormExample.pdf', {
			modifiedFilePath:'./pdf/OoPdfFormExampleFilled.pdf'
		});
            
    var data = {
        "Given Name Text Box": "Eric2889",
        "Family Name Text Box": "Jones",
        "House nr Text Box": "someplace",
        "Address 1 Text Box": "somewhere 1",
        "Address 2 Text Box": "somewhere 2",
        "Postcode Text Box": "123456",
        "Country Combo Box": "Spain",
        "Height Formatted Field": "198",
        "Driving License Check Box": true,
        "Favourite Colour List Box": "Brown",
        "Language 1 Check Box": true,
        "Language 2 Check Box": true,
        "Language 3 Check Box": false,
        "Language 4 Check Box": false,
        "Language 5 Check Box": true,
        "Gender List Box": "Man"
    };

    fillForm(writer,data);
    writer.end();

    

})

module.exports = router