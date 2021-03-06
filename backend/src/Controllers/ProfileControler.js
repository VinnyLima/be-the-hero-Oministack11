const connection = require('../database/connection');
module.exports = {

    async index(req, resp){

        const ong_id  = req.headers.idreq;

        const incidentes = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*');

            return resp.json({incidentes});
    }
}