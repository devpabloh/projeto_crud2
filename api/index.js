import express from "express"; // importando o módulo express para criar um servidor web
import userRoutes from "./routes/users.js"; // arquivo contendo as rotas para operações relacionadas ao usuário
import cors from "cors"; // Importando o cors para permitir que requisições sejam feitas de diferentes origens

const app = express(); 

app.use(express.json()) // Analisando o corpo da requisição do json
app.use(cors()); // Habilitando o CORS

app.use("/", userRoutes) // montando as rotas definidas no caminho até a raiz

app.listen(8800); // para escutar a porta 8800