

const {json} = require('express');
const db = require('../database/connection');

module.exports = {

    async listarUser_interests (request, response) {
        try {
            return response.status(200).json({confirma: 'listar user interests'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarUser_interests (request, response) {
        try {
            return response.status(200).json({confirma: 'cadastrar user interests'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarUser_interests (request, response) {
        try {
            return response.status(200).json({confirma: 'editar user interests'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarUser_interests (request, response) {
        try {
            return response.status(200).json({confirma: 'apagar user interests'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }
}
