const connection = require('../config/dbConexion');


class IndexController {

    getBands(req, res) {
        let sql = `SELECT * FROM music.bands`;
        
        connection.query(sql, (err, result) => {
            if (err) throw err;
            res.status(200).json(result);
        });
    };

    createBand(req, res) {
        const { name, description, video, foundation_year } = req.body;
        const img = req.file.filename;

        let sql = `INSERT INTO music.bands (name, description, img, video, foundation_year) 
        VALUES ('${name}', '${description}', '${img}','${video}', ${foundation_year})`;

        connection.query(sql, (err, result) => {
            if (err) throw err;
            res.status(200).json(result);
        });
    };
    
    updateBand(req,res){
        const id = req.params.id;
        const { name, description, video, foundation_year } = req.body;
        const img = req.file.filename;
        
        let sql=`UPDATE music.bands SET name='${name}' , description='${description}', 
        img='${img}', video='${video}', foundation_year=${foundation_year} 
        WHERE band_ID=${id}`;
        
        connection.query(sql,(err,result)=>{
            if(err)throw err;
            res.status(200).json(result);
        })
    }
    
    deleteBand(req,res){
        const id = req.params.id;
        let sql=`DELETE FROM music.bands WHERE band_ID=${id}`;
        connection.query(sql,(err,result)=>{
            if(err)throw err;
            res.json(result);
        });
    };
}

module.exports = new IndexController();