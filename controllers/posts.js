

const {json} = require('express');
const db = require('../database/connection');

module.exports = {

    async listarPosts (request, response) {
        try {
            return response.status(200).json({confirma: 'listar posts'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarPosts (request, response) {
        try {
            return response.status(200).json({confirma: 'cadastrar posts'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarPosts (request, response) {
        try {
            return response.status(200).json({confirma: 'editar posts'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarPosts (request, response) {
        try {
            return response.status(200).json({confirma: 'apagar posts'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }
}

