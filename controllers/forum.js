

const {json} = require('express');
const db = require('../database/connection');

module.exports = {

    async listarForum (request, response) {
        try {
            return response.status(200).json({confirma: 'listar forum'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarForum (request, response) {
        try {
            return response.status(200).json({confirma: 'cadastrar forum'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarForum (request, response) {
        try {
            return response.status(200).json({confirma: 'editar forum'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarForum (request, response) {
        try {
            return response.status(200).json({confirma: 'apagar forum'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }
}

