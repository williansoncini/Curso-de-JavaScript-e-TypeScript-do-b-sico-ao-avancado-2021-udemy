function decorador (
	classPrototype: any,
	nomeMetodo: string | symbol,
	index: number,
) : any {
	console.log(classPrototype);
	console.log(nomeMetodo);
	console.log(index);
}

export class Pessoa {
	constructor(
        @decorador private nome: string,
	){}
	
	// Agora esse métdodo terá as configurações que estão setadas no decorador
	
	metodo(): string {
		return `${this.nome} arrasa!`
	}
}

const pessoa = new Pessoa('Albert');
pessoa.metodo(); // ALBERT ARRASA!