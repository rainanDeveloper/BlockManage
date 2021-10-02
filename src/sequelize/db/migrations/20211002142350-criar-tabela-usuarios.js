'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('usuario', {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false
			},
			login: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
			},
			senha: {
				type: Sequelize.STRING,
				allowNull: false
			},
			status: {
				type: Sequelize.INTEGER,
				defaultValue: 1,
				allowNull: false
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE
			}
		})
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('usuario')
	}
};
