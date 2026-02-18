import bancoService from "../service/BancoService.js";

export default {
    async criarConta(req, res) {
        try {
            const conta = await bancoService.criarConta(req.body)
            
            res.status(201).json( { 
                saldo: conta.saldo
            } )

        } catch (err) {
            res.status(400).json( { erro: err.message } )
        }
    },

    async depositar(req, res) {
        try {
            const { id } = req.params
            const { valor } = req.body

            const valorNumerico = Number(valor)

            if ( !id ) {
                return res.status(400).json( { erro: "ID da conta Inválido" } )
            }

            const conta = await bancoService.depositar(id, valorNumerico)
            
            return res.json({
                id: conta.id,
                saldo: conta.saldo
            })
        } catch (err) {
            res.status(400).json( { erro: err.message } )
        }
    },

    async sacar(req, res) {
        try {
            const { id } = req.params
            const { valor } = req.body

            const valorNumerico = Number(valor)            

            const conta = await bancoService.sacar(id, valorNumerico)
            
            return res.json({
                id: conta.id,
                saldo: conta.saldo
            })
        } catch (err) {
            res.status(400).json( { erro: err.message } )
        }
    },

     async transferir(req, res) {
        try {
            const { origemId, destinoId, valor } = req.body
            const resultado = await bancoService.transferir(origemId, destinoId, valor)
            
            return res.json({
                id: resultado.id,
                saldo: resultado.saldo
            })
        } catch (err) {
            res.status(400).json( { erro: err.message } )
        }
    }
}