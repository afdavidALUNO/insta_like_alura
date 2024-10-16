const express = require('express');
const multer = require('multer');
const { uploadImageController } = require('../controllers/photoController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' }); // Define onde salvar as imagens

router.post('/upload', upload.single('image'), uploadImageController);

module.exports = router;
