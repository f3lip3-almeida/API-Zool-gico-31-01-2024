import express from 'express';
import cors from 'cors';
import { Ave } from './model/Ave';
import { Mamifero } from './model/Mamifero';
import { Reptil } from './model/Reptil';

const server = express();
const port: number = 3000;

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    let ave: Ave = new Ave('Amazona aestiva', 'Papagaio', 30, 'Masculino', 10);
    let reptil: Reptil = new Reptil('Cicloides', 'Lagarto', 2, 'Femea');
    let mamifero: Mamifero = new Mamifero('Doberman', 'Cachorro', 102, 'Femea')
    res.json([ave, reptil, mamifero]);
})

server.post('/ave', (req, res) => {
    const { nome, especie, idade, genero, envergadura } = req.body;
    let ave: Ave = new Ave(nome, especie, idade, genero, envergadura);
    res.json(["A nova ave do zoológico é: ", ave]);
});

server.listen(port, () => {
    console.log(`Servidor está escutando no endereço http://localhost:${port}`);
})