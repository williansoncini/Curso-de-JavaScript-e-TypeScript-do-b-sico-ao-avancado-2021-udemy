function decorador (
	classPrototype: any,
	nome: string | symbol,
) : any {
	let valorPropriedade: any;
	return {
        writabe: true,
		get: () => valorPropriedade,
		set: (valor: any) => valorPropriedade = valor,
	}
}

export class Pessoa {
    @decorador
    nome: string;

	constructor(nome: string){
        this.nome = nome;
    }
}

const pessoa = new Pessoa('Albert');
pessoa.nome = 'Einstein';
console.log(pessoa.nome) // Einstein