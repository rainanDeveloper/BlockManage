'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('projeto_colaborador', {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false
			},
			projetoId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'projeto',
					key: 'id'
				}
			},
			colaboradorId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'colaborador',
					key: 'id'
				}
			},	
			inicio: {
				type: Sequelize.DATEONLY,
				allowNull: false
			},
			fim: {
				type: Sequelize.DATEONLY,
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
		await queryInterface.dropTable('projeto_colaborador')
	}
};
