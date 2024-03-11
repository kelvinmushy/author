
import express from 'express';
import itemApi from './items/itemApi.mjs';
import authorApi from './authors/authorApi.mjs';


const app = express();
app.use(express.json());




app.use("/api",itemApi);
app.use("/api",authorApi);

app.listen(3000, function () {
	console.log(
		"server is running on port 3000"
	);
})
