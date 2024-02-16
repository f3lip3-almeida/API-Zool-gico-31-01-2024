/** 
 * Representa uma classe para aves, que são animais com penas e geralmente capazes de voar.
 */ 
import { Animal } from "./Animal";

export class Ave extends Animal {
    private envergadura: number; // Envergadura da ave

    /**
     * Construtor da classe Ave.
     * @param _nome O nome da ave.
     * @param _especie A espécie da ave.
     * @param _idade A idade da ave.
     * @param _genero O gênero da ave.
     * @param _envergadura A envergadura da ave.
     */
    constructor(_nome: string,
        _especie:string,
        _idade: number,
        _genero: string,
        _envergadura: number){
            super(_nome, _idade, _genero);
            this.envergadura = _envergadura;
        }

    /**
     * Retorna a envergadura da ave.
     * @returns A envergadura da ave.
     */
    public getEnvergadura(): number {
        return this.envergadura;
    }

    /**
     * Define a envergadura da ave.
     * @param envergadura A nova envergadura para a ave.
     */
    public setEnvergaruda(envergadura:number):void{
        this.envergadura = envergadura;
    }
}