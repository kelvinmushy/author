
import express from 'express';
import conn from "../db/db_connection.mjs"

const epsode=express.Router();

  epsode.use(express.json());


export async function addEpsode(item_id,title,description,price){

  const create_new= await conn.promise().query(

     `INSERT INTO item_epsodes (item_id,title,description,price) 
        VALUES (?,?,?,?)`,

      [item_id,title,description,price]
      );
     return create_new;
  
}

export async function getEpsodes() {
    const data = await conn.promise().query(
      `SELECT *  from items;`
    );
    return data;
}

 export async function deleteEpsode(id){
      const update = await conn
       .promise()
       .query(
        `DELETE FROM  item_epsodes where id = ?`,
      [id]
      );
      return update;
  }

   export async function getEpsode(id){
    const item = await conn.promise().query(
      `SELECT *  from item_epsodes where id = ?`,[id]
    );
    return item;

  }

  export async function updateEpsode(item_id,title,description,price,id){

    const update = await conn
		.promise()
		.query(
		  `UPDATE item_epsodes set item_id = ?, title = ?, description = ? ,price=? where id = ?`,
		    [item_id,title,description,price,id]
		);


  }

