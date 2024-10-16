# Insta Like Alura

Projeto em Node.js para gerar alt-text a partir de imagens utilizando a API Google Gemini.

## Arquitetura

O projeto segue o padrão MVC (Model-View-Controller), com as seguintes responsabilidades para cada parte:

### `app.js`
- **Função**: Arquivo principal do projeto que inicializa o servidor Express.
- **Responsabilidade**: Configura as rotas e inicia o servidor para processar as requisições HTTP.
- **Fluxo**:
  - Carrega o roteamento para upload de imagens.
  - Escuta na porta definida para servir a aplicação.

### `controllers/photoController.js`
- **Função**: Controla o fluxo de upload de imagem e a geração do alt-text.
- **Responsabilidade**: Processa a imagem recebida e envia ao serviço de geração de alt-text (Gemini).
- **Fluxo**:
  - Usa `multer` para manipular a imagem.
  - Chama o serviço `geminiService.js` para obter o alt-text.
  - Retorna o resultado ao cliente.

### `services/geminiService.js`
- **Função**: Conecta-se à API do Google Gemini para gerar alt-text.
- **Responsabilidade**: Recebe a imagem, converte para Base64, e faz a requisição à API.
- **Fluxo**:
  - Recebe o buffer da imagem.
  - Converte a imagem para Base64.
  - Usa o modelo "gemini-1.5-flash" para gerar o alt-text.
  - Retorna o alt-text ou uma mensagem de erro.

### `routes/photoRoutes.js`
- **Função**: Define a rota para upload de imagem.
- **Responsabilidade**: Conecta a requisição POST de upload ao controlador apropriado.
- **Fluxo**:
  - Usa o middleware `multer` para processar a imagem recebida.
  - Redireciona a requisição para `photoController.js`.
