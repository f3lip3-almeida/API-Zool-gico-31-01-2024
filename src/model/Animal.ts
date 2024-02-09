export class Animal {
    private nome: string; // Nome do animal
    private idade: number; // Idade do animal
    private genero: string; // Gênero do animal (ex: Masculino, Feminino)

    /**
     * Construtor da classe Animal.
     * @param _nome O nome do animal.
     * @param _idade A idade do animal.
     * @param _genero O gênero do animal.
     */
    constructor(_nome: string, _idade: number, _genero: string) {
        this.nome = _nome;
        this.idade = _idade;
        this.genero = _genero;
    }

    /**
     * Retorna o nome do animal.
     * @returns O nome do animal.
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define o nome do animal.
     * @param nome O novo nome para o animal.
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }

    /**
     * Retorna a idade do animal.
     * @returns A idade do animal.
     */
    public getIdade(): number {
        return this.idade;
    }

    /**
     * Define a idade do animal.
     * @param idade A nova idade para o animal.
     */
    public setIdade(idade: number): void {
        this.idade = idade;
    }

    /**
     * Retorna o gênero do animal.
     * @returns O gênero do animal.
     */
    public getGenero(): string {
        return this.genero;
    }

    /**
     * Define o gênero do animal.
     * @param genero O novo gênero para o animal.
     */
    public setGenero(genero: string): void {
        this.genero = genero;
    }
}