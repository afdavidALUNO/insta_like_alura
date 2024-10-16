const { getAltTextFromGemini } = require('../services/geminiService');
const fs = require('fs');

/**
 * Controller para lidar com o upload de imagem e obter alt-text.
 * @param {object} req - Requisição HTTP.
 * @param {object} res - Resposta HTTP.
 */
async function uploadImageController(req, res) {
    const imagePath = req.file.path;

    try {
        // Carregar a imagem como buffer
        const imageBuffer = fs.readFileSync(imagePath);
        
        // Chamar o serviço do Gemini para obter o alt-text
        const altText = await getAltTextFromGemini(imageBuffer);
        res.status(200).json({ altText });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao gerar alt-text', error: error.message });
    }
}

module.exports = { uploadImageController };
