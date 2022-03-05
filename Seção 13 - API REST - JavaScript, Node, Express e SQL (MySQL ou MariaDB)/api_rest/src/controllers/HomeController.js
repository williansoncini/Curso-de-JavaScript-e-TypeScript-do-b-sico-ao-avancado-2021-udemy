import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Albert',
      sobrenome: 'Einstein',
      email: 'A_Einstein@gmail.com',
      idade: 67,
      peso: 80,
      altura: 2,
    });
    res.status(200).json(novoAluno);
  }
}

export default new HomeController();
