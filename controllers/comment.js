

const {json} = require('express');
const db = require('../database/connection');

module.exports = {

    async listarComment (request, response) {
        try {
            return response.status(200).json({confirma: 'listar comment'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarComment (request, response) {
        try {
            return response.status(200).json({confirma: 'cadastrar comment'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarComment (request, response) {
        try {
            return response.status(200).json({confirma: 'editar comment'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarComment (request, response) {
        try {
            return response.status(200).json({confirma: 'apagar comment'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }
}

