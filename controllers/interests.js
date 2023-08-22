

const {json} = require('express');
const db = require('../database/connection');

module.exports = {

    async listarInterests (request, response) {
        try {
            return response.status(200).json({confirma: 'listar interests'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarInterests (request, response) {
        try {
            return response.status(200).json({confirma: 'cadastrar interests'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarInterests (request, response) {
        try {
            return response.status(200).json({confirma: 'editar interests'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarInterests (request, response) {
        try {
            return response.status(200).json({confirma: 'apagar interests'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }
}
