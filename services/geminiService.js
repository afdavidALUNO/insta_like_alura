const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


/**
 * Função para obter alt-text a partir do Gemini
 * @param {Buffer} imageBuffer - Buffer da imagem enviada
 * @returns {Promise<string>} - Alt-text gerado pelo serviço Gemini
 */
async function getAltTextFromGemini(imageBuffer) {
    try {
        const prompt = "Gere um alt text em português do brasil para a seguinte imagem";
        const image = {inlineData : {data: imageBuffer.toString('base64'), mimeType: "image/jpeg",},};
        const response = await model.generateContent([prompt, image]);

        // Verifica se a resposta contém o texto gerado
        return response.response.text() || 'Alt-text não disponível.';
    } catch (error) {
        console.error('Erro ao obter alt-text:', error.message, error);
        throw new Error('Erro ao obter o alt-text do Gemini.');
    }
}

module.exports = { getAltTextFromGemini };
