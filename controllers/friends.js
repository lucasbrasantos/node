

const {json} = require('express');
const db = require('../database/connection');

module.exports = {

    async listarFriendsWhere (req, res) {
        try {
            const userId = req.query.id
            const queryType = req.query.queryType
            // console.log(queryType);
            // console.log(req.query);

            const q = 'SELECT `friends`.`userid`, `users`.`userid` as `useridfriend`, `users`.`name`, `users`.`username`, `users`.`photourl`, (SELECT COUNT(*) FROM `bd_tcc_etim_121_g2`.`friends` `f` WHERE `f`.`userid` = `users`.`userid`) AS num_friends FROM `bd_tcc_etim_121_g2`.`users` inner join `bd_tcc_etim_121_g2`.`friends` on `users`.`userid` = `friends`.`useridfriend` where `friends`.`userid` = ?';
            const q2 = 'SELECT `friends`.`userid`, `users`.`userid` as `useridfriend`, `users`.`name`, `users`.`username`, `users`.`photourl`, (SELECT COUNT(*) FROM `bd_tcc_etim_121_g2`.`friends` `f` WHERE `f`.`userid` = `users`.`userid`) AS num_friends FROM `bd_tcc_etim_121_g2`.`users` left join `bd_tcc_etim_121_g2`.`friends` on `users`.`userid` = `friends`.`useridfriend` AND `friends`.`userid` = ? where `friends`.`userid` IS null'
            
            const data = await db.query(queryType === 'isFriend' ? q : q2, [userId]);
            return res.status(200).json(data[0]);
            
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async listarFriends (req, res) {
        try {
            const q = 'SELECT	`userid`, `useridfriend` FROM `bd_tcc_etim_121_g2`.`friends`;';
            const data = await db.query(q);
            return res.status(200).json(data[0]);
            
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarFriends (req, res) {
        try {
            const q = 'insert into `friends` (`userid`, `useridfriend`) values (?)'
            
            const values = [
                req.body.userid,
                req.body.useridfriend,
            ]

            const data = await db.query(q, [values])
            return res.status(200).json(`inserido com sucesso id:${data[0].insertId}`);

        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarFriends (req, res) {
        try {
            return res.status(200).json({confirma: 'editar friends'});
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarFriends (req, res) {
        try {


            const q = 'delete from `friends` where `userid` = ? and `useridfriend` = ?'
            
            const values = [
                req.query.userid,
                req.query.useridfriend,
            ]

            const data = await db.query(q, [...values])

            return res.status(200).json({confirma: 'Amigo removido com sucesso'});
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    }
}

