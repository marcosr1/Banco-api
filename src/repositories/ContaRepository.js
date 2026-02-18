import ContaModel from "../models/ContaModel.js"
import contaModel from "../models/ContaModel.js"

class ContaRepository {
    async criar(conta) {
        return ContaModel.create(conta)
    }

    async buscarPorId(id) {
        return contaModel.findByPk(id)
    }

    async atualizar(id, dados) {
        return contaModel.update(dados, {
            where: {id}
        })
    }
}

export default new ContaRepository()