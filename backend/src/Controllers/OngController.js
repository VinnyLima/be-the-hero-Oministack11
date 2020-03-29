const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    /**
     * METODO CREATE 
     * @param {*} req 
     * @param {*} resp 
     * Responsavel pela criação de uma ong no sistema
     * 
     */

    async create(req, resp) {
        const { name, email, whatsapp, city, uf } = req.body;
        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });

        return resp.json({ id });
    },


    async List(req, resp) {
        const ongs = await connection('ongs').select('*');
        return resp.json({ ongs });
    }
}