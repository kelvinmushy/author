
import express from 'express';
import conn from "../db/db_connection.mjs"

const router=express.Router();
router.use(express.json());


router.get('/all/items',async(req, res) => {

    var qry =`SELECT * from posts;`;

      conn.connect(function () {
       try{
        conn.query(qry, function (err ,results) {
          res.status(202).json({
            items: results,
          });

        });

       }
       catch (err) {
        res.status(500).json({
          message: err,
        });
      }

       conn.end();
    });

});

router.post('/item/add',(req,res)=>{

    const name=req.body['name'];
    const category_id=req.body['category_id']
    conn.connect(function() {
        try{
           var sql = "INSERT INTO posts (name, category_id) VALUES ('"+name+"', '"+category_id+"')";
         
           conn.query(sql, function (err, result) {
 
           if (err) throw err;
           
           res.status(202).json({
            message: "item created",
          });
           
 
         });
 
        }catch(err){
          res.status(500).json({
            message: err,
          });

        }
        
        
 
       });
})
router.delete('/item/delete/:id',async (req,res)=>{
    const id=req.params.id;
  conn.connect(function() {
      try{
       var sql = "delete from posts where id='"+id+"'";
       conn.query(sql, function (err, result) {
         if (err) throw err;
           res.status(200).json({
          message: "deleted",
          });

       });

      }catch(err){

        res.status(500).json({
          message: err,
        });
  

      }
      
      

     });
})

export default router
