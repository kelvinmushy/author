
import express from 'express';
import conn from "../db/db_connection.mjs"

const router=express.Router();

router.use(express.json());


export async function addAuthor(user_id,first_name,last_name){

  const create_new= await conn.promise().query(

     `INSERT INTO authors (user_id,first_name,last_name) 
        VALUES (?, ?,?)`,

      [user_id,first_name,last_name]
      );
     return create_new;
  
}

export async function getAuthors() {
    const data = await conn.promise().query(
      `SELECT *  from authors;`
    );
    return data;
}

 export async function deleteAuthor(id){
      const update = await conn
       .promise()
       .query(
        `DELETE FROM  authors where id = ?`,
      [id]
      );
      return update;
  }

   export async function getAuthor(id){
    const author = await conn.promise().query(
      `SELECT *  from authors where id = ?`,[id]
    );
    return author;

  }

  export async function updateAuthor(user_id,first_name,last_name,id){

    const update = await conn
		.promise()
		.query(
		  `UPDATE authors set user_id = ?, first_name = ?, last_name = ?  where id = ?`,
		    [user_id,first_name,last_name,id]
		);


  }

