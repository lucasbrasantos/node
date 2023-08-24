

const {json} = require('express');
const db = require('../database/connection');

module.exports = {

    async listarComment (req, res) {
        try {
            const q = 'SELECT  `userid`, `postid`, `timecommented`, `comment`, `moderator_status` FROM `bd_tcc_etim_121_g2`.`comment`;';
            const data = await db.query(q);
            return res.status(200).json(data[0]);
            
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarComment (req, res) {
        try {
            return res.status(200).json({confirma: 'cadastrar comment'});
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarComment (req, res) {
        try {
            return res.status(200).json({confirma: 'editar comment'});
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

