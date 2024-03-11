
import express from 'express';
import itemApi from './items/itemApi.mjs';

const app = express();
app.use(express.json());




app.use("/api",itemApi);

app.listen(3000, function () {
	console.log(
		"server is running on port 3000"
	);
})
