

const {json} = require('express');
const db = require('../database/connection');

module.exports = {

    async listarUser_interests (req, res) {
        try {
            const q = 'SELECT  `interestsid`, `userid` FROM `bd_tcc_etim_121_g2`.`user_interests`;';
            const data = await db.query(q);
            return res.status(200).json(data[0]);
            
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarUser_interests (req, res) {
        try {
            return res.status(200).json({confirma: 'cadastrar user interests'});
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarUser_interests (req, res) {
        try {
            return res.status(200).json({confirma: 'editar user interests'});
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarUser_interests (req, res) {
        try {
            return res.status(200).json({confirma: 'apagar user interests'});
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    }
}
