

const {json} = require('express');
const db = require('../database/connection');

module.exports = {

    async listarForum (req, res) {
        try {
            const q = "SELECT  `forumid`, `userid`, `title`, `description`, `tag`, `likes`, `created_at`, `moderator_status` FROM `bd_tcc_etim_121_g2`.`forum`;";
            const data = await db.query(q);
            return res.status(200).json(data[0]);
            
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarForum (req, res) {
        try {
            const q = 'insert into `forum` (`forumid`, `userid`, `title`, `description`, `tag`, `likes`, `created_at`, `moderator_status`) values (?)'
            
            const values = [
                req.body.forumid,
                req.body.userid,
                req.body.title,
                req.body.description,
                req.body.tag,
                req.body.likes,
                req.body.created_at,
                req.body.moderator_status,
            ]

            const data = await db.query(q, [values])
            return res.status(200).json(`inserido com sucesso id:${data[0].insertId}`);
            
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarForum (req, res) {
        try {
            const id = req.params.forumid;
            const q = 'update `forum` set `title`=?, `description`=?, `tag`=?, `likes`=?, `created_at`=?, `moderator_status`=? where `forumid`=?'
            
            const values = [
                req.body.title,
                req.body.description,
                req.body.tag,
                req.body.likes,
                req.body.created_at,
                req.body.moderator_status,
            ]

            const data = await db.query(q, [...values, id]);
            return res.status(200).json('affected rows: '+ data[0].affectedRows);
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarForum (req, res) {
        try {
            return res.status(200).json({confirma: 'apagar forum'});
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    }
}

