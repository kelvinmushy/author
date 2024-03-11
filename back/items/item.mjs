
import express from 'express';
import conn from "../db/db_connection.mjs"

const router=express.Router();

router.use(express.json());


export async function addItem(author_id,title,description,price,category_type_id){

  const create_new= await conn.promise().query(

     `INSERT INTO items (author_id,title,description,price,category_type_id) 
        VALUES (?, ?,?,?,?)`,

      [author_id,title,description,price,category_type_id]
      );
     return create_new;
  
}

export async function getItems() {
    const data = await conn.promise().query(
      `SELECT *  from items;`
    );
    return data;
}

 export async function deleteItem(id){
      const update = await conn
       .promise()
       .query(
        `DELETE FROM  items where id = ?`,
      [id]
      );
      return update;
  }

   export async function getItem(id){
    const item = await conn.promise().query(
      `SELECT *  from items where id = ?`,[id]
    );
    return item;

  }

  export async function updateItem(author_id,title,description,price,category_type_id,id){

    const update = await conn
		.promise()
		.query(
		  `UPDATE items set author_id = ?, title = ?, description = ? ,price=?,category_type_id=? where id = ?`,
		    [author_id,title,description,price,category_type_id,id]
		);


  }

