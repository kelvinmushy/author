
import express from 'express';
import {getAuthors,deleteAuthor,getAuthor,updateAuthor,addAuthor} from "./author.mjs";

const authorApi = express();
authorApi.use(express.json());


authorApi.post('/author/add', (req, res) => {

	try {
		const {user_id,first_name,last_name } = req.body;
		const create=addAuthor(user_id,first_name,last_name);

		res.status(200).json({
		  message: "created",
		});
  
	  } catch (err) {
		res.status(500).json({
		  message: err,
		});
	  }
    
});

//get all authors
authorApi.get('/all/authors', async (req, res) => {
	try{
     const author= await getAuthors();
    res.status(202).json({
	authors: author,
    });
      } catch (err) {
      res.status(500).json({
      message: err,
     });
  }
});


//delete author base on id
authorApi.delete('/author/delete/:id', async (req, res) => {
	const id=req.params.id;
	try{
     const author= await deleteAuthor(id);
      res.status(202).json({
	  authors: "Deleted",
     });
      } catch (err) {
      res.status(500).json({
      message: err,
     });
  }
  });


  //get author base on id's
  authorApi.get('/author/edit/:id',async(req,res)=>{
      
	const id=req.params.id;
	try{
     const author=await getAuthor(id);
      res.status(202).json({
	  authors:author,
     });
      } catch (err) {
      res.status(500).json({
      message: err,
     });
  }
	 
  });

//update author base on id's
authorApi.put("/author/update/:id", async (req, res) => {
	
	
	try {
	  const { id } = req.params;
	  const { user_id,first_name,last_name } = req.body;
     
	  const update=updateAuthor(user_id,first_name,last_name,id);

	  res.status(200).json({
		message: "updated",
	  });

	} catch (err) {
	  res.status(500).json({
		message: err,
	  });
	}

 });

 export  default authorApi;


