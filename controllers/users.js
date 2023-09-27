

const {json} = require('express');
const db = require('../database/connection');

module.exports = {

    async listarUsers (req, res) {
        try {
            const limit = parseInt(req.query.limit)  // limit param in req
            const hasLimit = !isNaN(limit) && limit > 0 // if has the limit param

            const baseQ = 'SELECT	`userid`, `username`, `name`, `email`, `photourl`, `points`, `timecreated`, `firebase`, `description` FROM `bd_tcc_etim_121_g2`.`users`'
            const limitQ = `${baseQ} ORDER BY \`points\` DESC LIMIT ?;`
            
            const q = hasLimit ? limitQ : baseQ // if has limit param the query is with limit, if not the query is not with limit
            const data = await db.query(q, hasLimit ? [limit] : []);
            return res.status(200).json(data[0]);
            
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarUsers (req, res) {
        try {
            const q = 'insert into `users` (`username`, `name`, `email`, `photourl`, `points`, `timecreated`, `firebase`, `description`) values (?)'
            
            const values = [
                req.body.username,
                req.body.name,
                req.body.email,
                req.body.photourl,
                req.body.points,
                req.body.timecreated,
                req.body.firebase,
                req.body.description,
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
            const q = 'update `users` set `username`= ?, `name`=?, `email`=?, `photourl`=?, `points`=?, `timecreated`=?, `firebase`=?, `description`=? where `userid`=?'
            
            const values = [
                req.body.username,
                req.body.name,
                req.body.email,
                req.body.photourl,
                req.body.points,
                req.body.timecreated,
                req.body.firebase,
                req.body.description,
            ]

            const data = await db.query(q, [...values, id]);
            
            return res.status(200).json('affected rows: '+ data[0].affectedRows);
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarUsers (req, res) {
        try {
            const id = req.params.userid;
            const q = 'delete from `users` where `userid`=?'            

            const data = await db.query(q, id);
            return res.status(200).json('affected rows: '+ data[0].affectedRows);

        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    }
}

