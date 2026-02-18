export default class Conta {
    constructor({ id, clientId, saldo = 0, limite = 0, ativa = true }) {
        this.id = id
        this.clientId = clientId
        this.saldo = saldo 
        this.limite = limite
        this.ativa = ativa 
    }

    validarAtiva() {
        if (!this.ativa) {
            throw new Error("Conta Bloqueada")
        }
    }

    depositar(valor) {
        this.validarAtiva()

        if ( valor <= 0 ) {
            throw new Error("Valor Inválido")
        }

        this.saldo += valor
    }

    sacar(valor) {
        this.validarAtiva()

        if ( valor <= 0 ) {
            throw new Error("Saldo Insuficiente")
        }

        this.saldo -= valor 
    }
} 
