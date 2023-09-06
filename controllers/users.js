

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
            const q = 'insert into `users` (`username`, `name`, `email`, `photourl`, `points`, `timecreated`) values (?)'
            
            const values = [
                req.body.username,
                req.body.name,
                req.body.email,
                req.body.photourl,
                req.body.points,
                req.body.timecreated,
            ]

            const data = await db.query(q, [values])
            return res.status(200).json(`inserido com sucesso id:${data[0].insertId}`);

        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarUsers (req, res) {
        try {
            const id = req.params.userid;
            const q = 'update `users` set `username`= ?, `name`=?, `email`=?, `photourl`=?, `points`=?, `timecreated`=? where `userid`=?'
            
            const values = [
                req.body.username,
                req.body.name,
                req.body.email,
                req.body.photourl,
                req.body.points,
                req.body.timecreated,
            ]

            const data = await db.query(q, [...values, id]);
            return res.status(200).json('affected rows: '+ data[0].affectedRows);
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

