const express = require("express");
const multer  = require('multer')
const upload = multer({ dest: '../uploads' })
const router = express.Router();
const {
    formPage,
    sendForm,
    getPdf
} = require("../controllers/formController");

router.get("/", formPage);
router.post("/submit-form", upload.single('photo'), sendForm);
router.get("/pdf", getPdf);

module.exports = router;