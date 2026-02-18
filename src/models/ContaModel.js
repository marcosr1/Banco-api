import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";

class ContaModel extends Model {}

ContaModel.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        clientId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        saldo: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        limite: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        ativa: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: "Conta",
        tableName: "conta",
        timestamps: true
    }
)

export default ContaModel