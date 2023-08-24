

const {json} = require('express');
const db = require('../database/connection');

module.exports = {

    async listarForum (request, response) {
        try {
            const sql = "SELECT  `forumid`, `userid`, `title`, `description`, `tag`, `likes`, `created_at`, `moderator_status` FROM `bd_tcc_etim_121_g2`.`forum`;";
            const forum = await db.query(sql);
            return response.status(200).json(forum[0]);
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarForum (request, response) {
        try {
            return response.status(200).json({confirma: 'cadastrar forum'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarForum (request, response) {
        try {
            return response.status(200).json({confirma: 'editar forum'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarForum (request, response) {
        try {
            return response.status(200).json({confirma: 'apagar forum'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }
}

