

const {json} = require('express');
const db = require('../database/connection');

module.exports = {

    async listarChats(request, response) {
        try {
            const sql = 'SELECT	`message`, `time_stamp`, `userid_senderid`, `userid_receiverid` FROM `bd_tcc_etim_121_g2`.`chats`;';
            const chats = await db.query(sql);
            return response.status(200).json(chats[0]);
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

