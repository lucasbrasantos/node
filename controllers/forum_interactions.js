

const {json} = require('express');
const db = require('../database/connection');

module.exports = {

    async listarForum_interactions (request, response) {
        try {
            const sql = "SELECT  `interactionid`, `userid`, `forumid`, `content`, `photourl`, `likes`, `created_at`, `moderator_status` FROM `bd_tcc_etim_121_g2`.`forum_interactions`;";
            const forumInterac = await db.query(sql);
            return response.status(200).json(forumInterac[0]);
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarForum_interactions (request, response) {
        try {
            return response.status(200).json({confirma: 'cadastrar forum interactions'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarForum_interactions (request, response) {
        try {
            return response.status(200).json({confirma: 'editar forum interactions'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarForum_interactions (request, response) {
        try {
            return response.status(200).json({confirma: 'apagar forum interactions'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }
}

