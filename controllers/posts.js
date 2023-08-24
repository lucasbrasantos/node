

const {json} = require('express');
const db = require('../database/connection');

module.exports = {

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
            return res.status(200).json({confirma: 'cadastrar posts'});
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarPosts (req, res) {
        try {
            return res.status(200).json({confirma: 'editar posts'});
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarPosts (req, res) {
        try {
            return res.status(200).json({confirma: 'apagar posts'});
        } catch (error) {
            return res.status(500).json({confirma: 'Erro', message: error});
        }
    }
}

