import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(process.env.DB_URL, {
  define: {
    timestamps: true,
    underscored: false,
    underscoredAll: false,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    freezeTableName: true
  }
})

export default sequelize