

const {json} = require('express');
const db = require('../database/connection');

module.exports = {

    async listarChats(request, response) {
        try {
            return response.status(200).json({confirma: 'Listar chats'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarChats(request, response) {
        try {
            return response.status(200).json({confirma: 'cadastrar chats'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarChats(request, response) {
        try {
            return response.status(200).json({confirma: 'editar chats'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarChats(request, response) {
        try {
            return response.status(200).json({confirma: 'apagar chats'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }
}

