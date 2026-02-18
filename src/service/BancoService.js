import Conta from "../domain/Conta.js"
import contaRepository from "../repositories/ContaRepository.js"

class BancoService{
    constructor() {
        this.contas = []
    }

    async criarConta(dados) {
        const conta = new Conta(dados)
        contaRepository.criar(conta)
        return conta
    }

    async buscarConta(id) {
        const contaDB = await contaRepository.buscarPorId(id)
        if (!contaDB) throw new Error("Conta não encontrada")
        
        return new Conta(contaDB.toJSON())
    }

    async depositar(id, valor) {
        const conta = await this.buscarConta(id)
        conta.depositar(valor)

        await contaRepository.atualizar(id, { saldo: conta.saldo } )
        return conta
    }

    async sacar(id, valor) {  
        const conta = await this.buscarConta(id)
        conta.sacar(valor)

        await contaRepository.atualizar(id, { saldo: conta.saldo } )
        return conta
    }

    async transferir(origemId, destinoId, valor) {
        if (origemId === destinoId) {
            throw new Error("Transferência Invalida")
        }

        if (valor > 10000) {
            throw new Error("Transerência precisa de aprovação")
        }

        const origem = await this.buscarConta(origemId)
        const destino = await this.buscarConta(destinoId)

        origem.sacar(valor)
        destino.depositar(valor)

        await contaRepository.atualizar(origemId, { saldo: origem.saldo } )
        await contaRepository.atualizar(destinoId, { saldo: destino.saldo } )
        
        return { origem, destino }
     } 
}

export default new BancoService()