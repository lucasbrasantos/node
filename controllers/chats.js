

const {json} = require('express');
const db = require('../database/connection');

module.exports = {

    async listarChats(req, res) {
        try {
            const q = 'SELECT	`chatid`, `message`, `time_stamp`, `userid_senderid`, `userid_receiverid` FROM `bd_tcc_etim_121_g2`.`chats`;';
            const data = await db.query(q);
            return res.status(200).json(data[0]);
            
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarChats(req, res) {
        try {
            const q = 'insert into `chats` (`message`, `time_stamp`, `userid_senderid`, `userid_receiverid`) values (?)'
            
            const values = [
                req.body.message,
                req.body.time_stamp,
                req.body.userid_senderid,
                req.body.userid_receiverid,
            ]

            const data = await db.query(q, [values])
            return res.status(200).json(`inserido com sucesso id:${data[0].insertId}`);

        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarChats(req, res) {
        try {
            
            const id = req.params.chatid;
            const q = 'update `chats` set `message`=?, `time_stamp`=?, `userid_senderid`=?, `userid_receiverid`=? where chatid=?'
            
            const values = [
                req.body.message,
                req.body.time_stamp,
                req.body.userid_senderid,
                req.body.userid_receiverid,
            ]

            const data = await db.query(q, [...values, id]);
            return res.status(200).json('affected rows: '+ data[0].affectedRows);

        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarChats(req, res) {
        try {
            const id = req.params.chatid;
            const q = 'delete from `chats` where `chatid`=?'            

            const data = await db.query(q, id);
            return res.status(200).json('affected rows: '+ data[0].affectedRows);
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    }
}

