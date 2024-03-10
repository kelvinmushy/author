
import express from 'express';
import router from './authors/crud.mjs';


const app = express();
app.use(express.json());


app.post('/add', (req, res) => {

    const body = req.body;

    res.send(body.num1)
    
})
;
app.use('/api',router);
app.listen(3000, function () {
	console.log(
		"server is running on port 3000"
	);
})
