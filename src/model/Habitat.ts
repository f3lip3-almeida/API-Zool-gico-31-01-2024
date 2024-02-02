export class Habitat {
    private nome: string;
    private tipo: string;
    private clima: string;

    constructor(nome: string, tipo: string, clima: string) {
        this.nome = nome;
        this.tipo = tipo;
        this.clima = clima;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getTipo(): string {
        return this.tipo;
    }

    public setTipo(tipo: string): void {
        this.tipo = tipo;
    }

    public getClima(): string {
        return this.clima;
    }

    public setClima(clima: string): void {
        this.clima = clima;
    }
}

const habitat1 = new Habitat('Floresta Amazônica', 'Floresta', 'Equatorial');
console.log(habitat1);