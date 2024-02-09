import { Atracao } from "./Atracao";

export class Zoologico {
    private nome: string; // Nome do zoológico
    private lista_de_atracoes: Array<Atracao>; // Lista de atrações do zoológico

    /**
     * Construtor da classe Zoologico.
     * @param nome O nome do zoológico.
     * @param lista_de_atracoes A lista de atrações do zoológico.
     */
    constructor(nome: string, lista_de_atracoes: Array<Atracao>) {
        this.nome = nome;
        this.lista_de_atracoes = lista_de_atracoes;
    }

    /**
     * Retorna o nome do zoológico.
     * @returns O nome do zoológico.
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define o nome do zoológico.
     * @param nome O novo nome para o zoológico.
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }

    /**
     * Retorna a lista de atrações do zoológico.
     * @returns A lista de atrações do zoológico.
     */
    public getListaDeAtracoes(): Array<Atracao> {
        return this.lista_de_atracoes;
    }

    /**
     * Define a lista de atrações do zoológico.
     * @param lista_de_atracoes A nova lista de atrações para o zoológico.
     */
    public setListaDeAtracoes(lista_de_atracoes: Array<Atracao>): void {
        this.lista_de_atracoes = lista_de_atracoes;
    }
}