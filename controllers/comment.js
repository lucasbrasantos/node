

const {json} = require('express');
const db = require('../database/connection');

module.exports = {

    async listarComment (req, res) {
        try {
            const q = 'SELECT  `commentid`, `userid`, `postid`, `timecommented`, `comment`, `moderator_status` FROM `bd_tcc_etim_121_g2`.`comment`;';
            const data = await db.query(q);
            return res.status(200).json(data[0]);
            
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarComment (req, res) {
        try {
            
            const q = 'insert into `comment` (`userid`, `postid`, `timecommented`, `comment`, `moderator_status`) values (?)'
            
            const values = [
                req.body.userid,
                req.body.postid,
                req.body.timecommented,
                req.body.comment,
                req.body.moderator_status,
            ]

            const data = await db.query(q, [values])
            return res.status(200).json(`inserido com sucesso id:${data[0].insertId}`);

        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarComment (req, res) {
        try {
            
            const id = req.params.commentid;

            const q = 'update `comment` set `userid`=?, `postid`=?, `timecommented`=?, `comment`=?, `moderator_status`=? where commentid=?'
            
            const values = [
                req.body.userid,
                req.body.postid,
                req.body.timecommented,
                req.body.comment,
                req.body.moderator_status,
            ]

            const data = await db.query(q, [...values, id]);            
            return res.status(200).json('affected rows: '+ data[0].affectedRows);

        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarComment (req, res) {
        try {
            return res.status(200).json({confirma: 'apagar comment'});
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    }
}

