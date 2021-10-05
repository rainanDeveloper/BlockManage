'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('colaboradores', {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false
			},
			nome: {
				type: Sequelize.STRING,
				allowNull: false
			},
			cargo: {
				type: Sequelize.STRING,
				allowNull: true
			},
			admissao: {
				type: Sequelize.DATEONLY,
				allowNull: false
			},
			status: {
				type: Sequelize.INTEGER,
				defaultValue: 1,
				allowNull: false
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false
			}
		})
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('colaboradores')
	}
};
