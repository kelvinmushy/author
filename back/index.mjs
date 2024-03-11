
import express from 'express';
import {getItems,deleteItem,getItem,updateItem,addItem} from "./authors/item.mjs";

const app = express();
app.use(express.json());



//add item to the list

app.post('/api/item/add', (req, res) => {

	try {
		
		const {author_id,name,description,price,category_type_id } = req.body;
		const create=addItem(author_id,name,description,price,category_type_id);

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
app.get('/api/all/items', async (req, res) => {
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
app.delete('/api/item/delete/:id', async (req, res) => {
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
  app.get('/api/item/edit/:id',async(req,res)=>{
      
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
app.put("/api/item/update/:id", async (req, res) => {
	const { id } = req.params;
	console.log(id);
	try {
	  const { id } = req.params;
	  const { author_id,name,description,price,category_type_id } = req.body;
     
	  console.log(id);
	  const update=updateItem(author_id,name,description,price,category_type_id,id);

	  res.status(200).json({
		message: "updated",
	  });

	} catch (err) {
	  res.status(500).json({
		message: err,
	  });
	}

 });



app.listen(3000, function () {
	console.log(
		"server is running on port 3000"
	);
})
