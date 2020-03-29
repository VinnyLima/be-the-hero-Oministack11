const connection = require('../database/connection');

module.exports = {

    async index(req, resp) {
    const {page =1 } = req.query;


    const [count] = await connection('incidents').count();


        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page -1) * 5)
        .select(['incidents.*', 
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf']);


        resp.header('X-Total-Count', count['count(*)']);
        return resp.json({ incidents });
    },

    

    async create(req, resp){
        try {

            const {title, description, value} = req.body;
        const  ong_id = req.headers.idong;
              
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,

        });

        return resp.json({id});
            
        } catch (error) {

            error.json({message:"458: Erro ao inserir"})
            
        }       

    },

    async delete(req, resp){

        const {idreq} = req.params;
        const ong_id = req.headers.idreq;
    
        //BUSCA NO BANCO O ID DA ONG
        const incident = await connection('incidents')        
        .where('id',idreq)
        .select('ong_id')
        .first();    

       
        //VEREFICA SE A ONG E A MESMA QUE ESTÁ REQUISITANDO O DELETE!
        if (incident.ong_id != ong_id) {
            return resp.status(401).json({error: 'Operação não permitida'});
        }

        await connection('incidents').where('id', idreq).delete();

        return resp.status(204).send();

    },

    async update(req, resp){

    }
}