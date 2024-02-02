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
    const novaAve = new Ave('Arara Azul', 'Arara', 5, 'Fêmea', 90);
    
    res.json({
        mensagem: 'Esta é a nova ave do Zoológico:',
        novaAve: novaAve
    });
});

server.listen(port, () => {
    console.log(`Servidor está escutando no endereço http://localhost:${port}`);
})