import { Animal } from "./Animal";

export class Reptil extends Animal {
    private tipo_de_escamas: string; // Tipo de escamas do réptil

    /**
     * Construtor da classe Reptil.
     * @param _tipo_de_escamas O tipo de escamas do réptil.
     * @param _nome O nome do réptil.
     * @param _idade A idade do réptil.
     * @param _genero O gênero do réptil.
     */
    constructor(_tipo_de_escamas: string, _nome: string, _idade: number, _genero: string) {
        super(_nome, _idade, _genero);
        this.tipo_de_escamas = _tipo_de_escamas;
    }

    /**
     * Retorna o tipo de escamas do réptil.
     * @returns O tipo de escamas do réptil.
     */
    public getTipoDeEscamas(): string {
        return this.tipo_de_escamas;
    }

    /**
     * Define o tipo de escamas do réptil.
     * @param tipo_de_escamas O novo tipo de escamas para o réptil.
     */
    public setTipoDeEscamas(tipo_de_escamas: string): void {
        this.tipo_de_escamas = tipo_de_escamas;
    }
}
