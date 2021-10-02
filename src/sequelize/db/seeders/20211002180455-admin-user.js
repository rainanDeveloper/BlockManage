'use strict';
const { Hashing } = require('../../../utils/bcryptHashPassword')

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return await queryInterface.bulkInsert('usuario', [{
			login: 'admin',
			senha: await Hashing.hashPassword('admin'),
			status: 1,
			created_at: new Date(),
			updated_at: new Date()
		  }])
	},

	down: async (queryInterface, Sequelize) => {
		return await queryInterface.query('DELETE FROM usuario WHERE usuario.login="admin"')
	}
};
