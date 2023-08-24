

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
            return res.status(200).json({confirma: 'cadastrar forum interactions'});
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarForum_interactions (req, res) {
        try {
            return res.status(200).json({confirma: 'editar forum interactions'});
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarForum_interactions (req, res) {
        try {
            return res.status(200).json({confirma: 'apagar forum interactions'});
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    }
}

