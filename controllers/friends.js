

const {json} = require('express');
const db = require('../database/connection');

module.exports = {

    async listarFriends (request, response) {
        try {
            return response.status(200).json({confirma: 'listar friends'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarFriends (request, response) {
        try {
            return response.status(200).json({confirma: 'cadastrar friends'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarFriends (request, response) {
        try {
            return response.status(200).json({confirma: 'editar friends'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarFriends (request, response) {
        try {
            return response.status(200).json({confirma: 'apagar friends'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }
}

