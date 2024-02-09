import express from 'express';
import cors from 'cors';
import { Ave } from './model/Ave';
import { Mamifero } from './model/Mamifero';
import { Reptil } from './model/Reptil';
import { Habitat } from './model/Habitat';
import { constants } from 'buffer';
import { Atracao } from './model/Atracao';
import { Zoologico } from './model/Zoologico';

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

server.post(' /habitat', (req, res) => {
    const { nome, animais } = req.body;
    const habitat = new Habitat(nome, animais);
    console.log(habitat);
    res.status(200).json('Habitat criado');
});

server.post('/atracao', (req, res) => {
    const { nome, habitat } = req.body;
    const atracao = new Atracao(nome, habitat);
    console.log(atracao);
    res.status(200).json('Atração criada');
});

server.post('/zoologico', (req, res) => {
    const { nome, atracao } = req.body;
    const zoo = new Zoologico(nome, atracao);
    console.log(zoo);
    res.status(200).json('Zoológico criado');
});

server.listen(port, () => {
    console.log(`Servidor está escutando no endereço http://localhost:${port}`);
})