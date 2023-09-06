

const {json} = require('express');
const db = require('../database/connection');

module.exports = {

    async listarForum_interactions (req, res) {
        try {
            const q = "SELECT  `interactionid`, `userid`, `forumid`, `content`, `photourl`, `likes`, `created_at`, `moderator_status` FROM `bd_tcc_etim_121_g2`.`forum_interactions`;";
            const data = await db.query(q);
            return res.status(200).json(data[0]);
            
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarForum_interactions (req, res) {
        try {
            
            const q = 'insert into `forum_interactions` ( `userid`, `forumid`, `content`, `photourl`, `likes`, `created_at`, `moderator_status`) values (?)'
            
            const values = [
                req.body.userid,
                req.body.forumid,
                req.body.content,
                req.body.photourl,
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
    async editarForum_interactions (req, res) {
        try {
            
            const id = req.params.interactionid;
            const q = 'update `forum_interactions` set `userid`=?, `forumid`=?, `content`=?, `photourl`=?, `likes`=?, `created_at`=?, `moderator_status`=? where interactionid=?'
            
            const values = [
                req.body.userid,
                req.body.forumid,
                req.body.content,
                req.body.photourl,
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
    async apagarForum_interactions (req, res) {
        try {
            const id = req.params.interactionid;
            const q = 'delete from `forum_interactions` where `interactionid`=?'            

            const data = await db.query(q, id);
            return res.status(200).json('affected rows: '+ data[0].affectedRows);
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    }
}

