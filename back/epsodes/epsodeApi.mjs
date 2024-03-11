
import express from 'express';
import {getEpsodes,deleteEpsode,getEpsode,updateEpsode,addEpsode} from "./epsode.mjs";

const epsodeApi = express();
epsodeApi.use(express.json());


epsodeApi.post('/epsode/add', (req, res) => {

	try {
		const {item_id,title,description,price} = req.body;
		const create=addEpsode(item_id,title,description,price);

		res.status(200).json({
		  message: "created",
		});
  
	  } catch (err) {
		res.status(500).json({
		  message: err,
		});
	  }
    
});

//get all items
epsodeApi.get('/all/epsodes', async (req, res) => {
	try{
     const item= await getEpsodes();
    res.status(202).json({
	items: item,
    });
      } catch (err) {
      res.status(500).json({
      message: err,
     });
  }
});


//delete item base on id
epsodeApi.delete('/epsode/delete/:id', async (req, res) => {
	const id=req.params.id;
	try{
     const item= await deleteEpsode(id);
      res.status(202).json({
	  items: "Deleted",
     });
      } catch (err) {
      res.status(500).json({
      message: err,
     });
  }
  });


  //get item base on id's
  epsodeApi.get('/epsode/edit/:id',async(req,res)=>{
      
	const id=req.params.id;
	try{
     const item=await getEpsode(id);
      res.status(202).json({
	  items:item,
     });
      } catch (err) {
      res.status(500).json({
      message: err,
     });
  }
	 
  });

//update item base on id's
epsodeApi.put("/epsode/update/:id", async (req, res) => {
	const { id } = req.params;
	console.log(id);
	try {
	  const { id } = req.params;
	  const { item_id,title,description,price} = req.body;
     
	  console.log(id);
	  const update=updateEpsode(item_id,title,description,price,id);

	  res.status(200).json({
		message: "updated",
	  });

	} catch (err) {
	  res.status(500).json({
		message: err,
	  });
	}

 });

 export  default epsodeApi;


