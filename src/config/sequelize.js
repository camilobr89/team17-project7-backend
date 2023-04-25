import { Sequelize } from 'sequelize'

const Op = Sequelize.Op

const operatorsAliases = {
  $like: Op.like,
  $not: Op.not,
  $in: Op.in
}

const sequelize = new Sequelize(process.env.DB_URL, {
  define: {
    timestamps: true,
    underscored: false,
    underscoredAll: false,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    freezeTableName: true,
    operatorsAliases
  }
})

export default sequelize
