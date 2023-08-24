

const {json} = require('express');
const db = require('../database/connection');

module.exports = {

    async listarFriends (req, res) {
        try {
            const q = 'SELECT	`userid`, `useridfriend` FROM `bd_tcc_etim_121_g2`.`friends`;';
            const data = await db.query(q);
            return res.status(200).json(data[0]);
            
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarFriends (req, res) {
        try {
            return res.status(200).json({confirma: 'cadastrar friends'});
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarFriends (req, res) {
        try {
            return res.status(200).json({confirma: 'editar friends'});
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarFriends (req, res) {
        try {
            return res.status(200).json({confirma: 'apagar friends'});
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    }
}

