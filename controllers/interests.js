

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
            const q = 'insert into `interests` (`interestsid`, `description`) values (?)'
            
            const values = [
                req.body.interestsid,
                req.body.description,
            ]

            const data = await db.query(q, [values])
            return res.status(200).json(`inserido com sucesso id:${data[0].insertId}`);

        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarInterests (req, res) {
        try {
            const id = req.params.interestsid;
            const q = 'update `interests` set `description`=? where `interestsid`=?'
            
            const values = [
                req.body.description,
            ]

            const data = await db.query(q, [...values, id]);
            return res.status(200).json('affected rows: '+ data[0].affectedRows);
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
