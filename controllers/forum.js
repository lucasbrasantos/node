

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
            return res.status(200).json({confirma: 'cadastrar forum'});
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarForum (req, res) {
        try {
            return res.status(200).json({confirma: 'editar forum'});
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

