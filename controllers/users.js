

const {json} = require('express');
const db = require('../database/connection');

module.exports = {

    async listarUsers (request, response) {
        try {
            return response.status(200).json({confirma: 'users'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarUsers (request, response) {
        try {
            return response.status(200).json({confirma: 'users'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarUsers (request, response) {
        try {
            return response.status(200).json({confirma: 'users'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarUsers (request, response) {
        try {
            return response.status(200).json({confirma: 'users'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }
}

