

const {json} = require('express');
const db = require('../database/connection');

module.exports = {

    async listarInterests (req, res) {
        try {
            const q = 'select * from interests'
            const data = await db.query(q)
            return res.json(data[0])

        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarInterests (request, response) {
        try {
            return response.status(200).json({confirma: 'cadastrar interests'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async editarInterests (request, response) {
        try {
            return response.status(200).json({confirma: 'editar interests'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarInterests (request, response) {
        try {
            return response.status(200).json({confirma: 'apagar interests'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }
}
