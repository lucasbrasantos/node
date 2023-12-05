

const {json} = require('express');
const db = require('../database/connection');

module.exports = {

    async listarPostLikes (req, res) {
        try {
            const postId = req.params.postid
            const q = "SELECT `likes` FROM `bd_tcc_etim_121_g2`.`posts` where `postid`=?;";
            
            const data = await db.query(q, [postId]);
            return res.status(200).json(data[0]);
            
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async listarPosts (req, res) {
        try {
            const q = 'SELECT	`postid`, `title`, `photourl`, `timeposted`, `likes`, `userid`, `tag`, `moderator_status` FROM `bd_tcc_etim_121_g2`.`posts`;';
            const data = await db.query(q);
            return res.status(200).json(data[0]);
            
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarPosts (req, res) {
        try {
            const q = 'insert into `posts` (`postid`, `title`, `photourl`, `timeposted`, `likes`, `userid`, `tag`, `moderator_status`) values (?)'
            
            const values = [
                req.body.postid,
                req.body.title,
                req.body.photourl,
                req.body.timeposted,
                req.body.likes,
                req.body.userid,
                req.body.tag,
                req.body.moderator_status,
            ]


            const data = await db.query(q, [values])
            return res.status(200).json(`inserido com sucesso id:${data[0].insertId}`);
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarPosts (req, res) {
        try {
            const id = req.params.postid;
            const q = 'update `posts` set `title`= ?, `photourl`= ?, `timeposted`= ?, `likes`= ?, `userid`= ?, `tag`= ?, `moderator_status`= ? where postid = ?'
            
            const values = [
                req.body.title,
                req.body.photourl,
                req.body.timeposted,
                req.body.likes,
                req.body.userid,
                req.body.tag,
                req.body.moderator_status,
            ]

            const data = await db.query(q, [...values, id])
            return res.status(200).json('affected rows: '+ data[0].affectedRows);
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async likePost (req, res) {
        try {
            const id = req.params.postid;
            const newLikes = req.body.likes
            const q = 'update `posts` set `likes`= ? where postid = ?'


            const data = await db.query(q, [newLikes, id])

            return res.status(200).json('affected rows: '+ data[0].affectedRows);
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarPosts (req, res) {
        try {
            const id = req.query.postid;

            const q = 'delete from `posts` where `postid`=?'            

            const data = await db.query(q, id);
            return res.status(200).json('affected rows: '+ data[0].affectedRows);
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    }
}

