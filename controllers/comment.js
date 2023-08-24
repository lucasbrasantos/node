

const {json} = require('express');
const db = require('../database/connection');

module.exports = {

    async listarComment (request, response) {
        try {
            const sql = 'SELECT  `userid`, `postid`, `timecommented`, `comment`, `moderator_status` FROM `bd_tcc_etim_121_g2`.`comment`;';
            const comment = await db.query(sql);
            return response.status(200).json(comment[0]);
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarComment (request, response) {
        try {
            return response.status(200).json({confirma: 'cadastrar comment'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarComment (request, response) {
        try {
            return response.status(200).json({confirma: 'editar comment'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarComment (request, response) {
        try {
            return response.status(200).json({confirma: 'apagar comment'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }
}

