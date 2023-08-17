

const {json} = require('express');
const db = require('../database/connection');

module.exports = {

    async listarComment (request, response) {
        try {
            return response.status(200).json({confirma: 'comment'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarComment (request, response) {
        try {
            return response.status(200).json({confirma: 'comment'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarComment (request, response) {
        try {
            return response.status(200).json({confirma: 'comment'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarComment (request, response) {
        try {
            return response.status(200).json({confirma: 'comment'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }
}

