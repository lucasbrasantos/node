

const {json} = require('express');
const db = require('../database/connection');

module.exports = {

    async listarChats(req, res) {
        try {
            const q = 'SELECT	`message`, `time_stamp`, `userid_senderid`, `userid_receiverid` FROM `bd_tcc_etim_121_g2`.`chats`;';
            const data = await db.query(q);
            return res.status(200).json(data[0]);
            
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarChats(req, res) {
        try {
            return res.status(200).json({confirma: 'cadastrar chats'});
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarChats(req, res) {
        try {
            return res.status(200).json({confirma: 'editar chats'});
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarChats(req, res) {
        try {
            return res.status(200).json({confirma: 'apagar chats'});
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    }
}

