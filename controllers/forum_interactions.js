

const {json} = require('express');
const db = require('../database/connection');

module.exports = {

    async listarForum_interactions (request, response) {
        try {
            return response.status(200).json({confirma: 'listar forum interactions'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarForum_interactions (request, response) {
        try {
            return response.status(200).json({confirma: 'cadastrar forum interactions'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarForum_interactions (request, response) {
        try {
            return response.status(200).json({confirma: 'editar forum interactions'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarForum_interactions (request, response) {
        try {
            return response.status(200).json({confirma: 'apagar forum interactions'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }
}

