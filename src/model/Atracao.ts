import { Habitat } from "./Habitat";

export class Atracao {
    private nome: string; // Nome da atração
    private lista_de_habitats: Array<Habitat>; // Lista de habitats da atração

    /**
     * Construtor da classe Atracao.
     * @param nome O nome da atração.
     * @param lista_de_habitats A lista de habitats da atração.
     */
    constructor(nome: string, lista_de_habitats: Array<Habitat>) {
        this.nome = nome;
        this.lista_de_habitats = lista_de_habitats;
    }

    /**
     * Retorna o nome da atração.
     * @returns O nome da atração.
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define o nome da atração.
     * @param nome O novo nome para a atração.
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }

    /**
     * Retorna a lista de habitats da atração.
     * @returns A lista de habitats da atração.
     */
    public getListaDeHabitats(): Array<Habitat> {
        return this.lista_de_habitats;
    }

    /**
     * Define a lista de habitats da atração.
     * @param lista_de_habitats A nova lista de habitats para a atração.
     */
    public setListaDeHabitats(lista_de_habitats: Array<Habitat>): void {
        this.lista_de_habitats = lista_de_habitats;
    }
}