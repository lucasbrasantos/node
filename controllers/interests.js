

const {json} = require('express');
const db = require('../database/connection');

module.exports = {

    async listarInterests (req, res) {
        try {
            const q = 'SELECT  `interestsid`, `description` FROM `bd_tcc_etim_121_g2`.`interests`;';
            const data = await db.query(q);
            return res.status(200).json(data[0]);

        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarInterests (req, res) {
        try {
            return res.status(200).json({confirma: 'cadastrar interests'});
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarInterests (req, res) {
        try {
            return res.status(200).json({confirma: 'editar interests'});
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarInterests (req, res) {
        try {
            return res.status(200).json({confirma: 'apagar interests'});
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    }
}
