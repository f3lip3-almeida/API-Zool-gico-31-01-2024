import { Animal } from "./Animal";

export class Habitat {
    private nome: string; // Nome do habitat
    private listaAnimais: Array<Animal>; // Lista de animais presentes no habitat

    /**
     * Construtor da classe Habitat.
     * @param _nome O nome do habitat.
     * @param _listaAnimais A lista de animais presentes no habitat.
     */
    constructor(_nome: string, _listaAnimais: Array<Animal>) {
        this.nome = _nome;
        this.listaAnimais = _listaAnimais;
    }

    /**
     * Retorna o nome do habitat.
     * @returns O nome do habitat.
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define o nome do habitat.
     * @param nome O novo nome para o habitat.
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }

    /**
     * Retorna a lista de animais do habitat.
     * @returns A lista de animais do habitat.
     */
    public getListaAnimais(): Array<Animal> {
        return this.listaAnimais;
    }

    /**
     * Define a lista de animais do habitat.
     * @param listaAnimais A nova lista de animais para o habitat.
     */
    public setListaAnimais(listaAnimais: Array<Animal>): void {
        this.listaAnimais = listaAnimais;
    }
}