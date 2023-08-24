

const {json} = require('express');
const db = require('../database/connection');

module.exports = {

    async listarUsers (req, res) {
        try {
            const q = 'SELECT	`userid`, `username`, `name`, `email`, `photourl`, `points`, `timecreated` FROM `bd_tcc_etim_121_g2`.`users`;';
            const data = await db.query(q);
            return res.status(200).json(data[0]);
            
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarUsers (req, res) {
        try {
            return res.status(200).json({confirma: 'cadastrar users'});
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarUsers (req, res) {
        try {
            return res.status(200).json({confirma: 'editar users'});
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarUsers (req, res) {
        try {
            return res.status(200).json({confirma: 'apagar users'});
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    }
}

