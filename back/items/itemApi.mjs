
import express from 'express';
import {getItems,deleteItem,getItem,updateItem,addItem} from "./item.mjs";

const itemApi = express();
itemApi.use(express.json());


itemApi.post('/item/add', (req, res) => {

	try {
		const {author_id,title,description,price,category_type_id } = req.body;
		const create=addItem(author_id,title,description,price,category_type_id);

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
itemApi.get('/all/items', async (req, res) => {
	try{
     const item= await getItems();
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
itemApi.delete('/item/delete/:id', async (req, res) => {
	const id=req.params.id;
	try{
     const item= await deleteItem(id);
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
  itemApi.get('/item/edit/:id',async(req,res)=>{
      
	const id=req.params.id;
	try{
     const item=await getItem(id);
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
itemApi.put("/item/update/:id", async (req, res) => {
	const { id } = req.params;
	console.log(id);
	try {
	  const { id } = req.params;
	  const { author_id,title,description,price,category_type_id } = req.body;
     
	  console.log(id);
	  const update=updateItem(author_id,title,description,price,category_type_id,id);

	  res.status(200).json({
		message: "updated",
	  });

	} catch (err) {
	  res.status(500).json({
		message: err,
	  });
	}

 });

 export  default itemApi;


