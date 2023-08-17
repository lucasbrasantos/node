

const {json} = require('express');
const db = require('../database/connection');

module.exports = {

    async listarFriends (request, response) {
        try {
            return response.status(200).json({confirma: 'friends'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarFriends (request, response) {
        try {
            return response.status(200).json({confirma: 'friends'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarFriends (request, response) {
        try {
            return response.status(200).json({confirma: 'friends'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarFriends (request, response) {
        try {
            return response.status(200).json({confirma: 'friends'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }
}

