
import express from 'express';
import itemApi from './items/itemApi.mjs';
import authorApi from './authors/authorApi.mjs';
import epsodeApi from './epsodes/epsodeApi.mjs';

const app = express();
app.use(express.json());




app.use("/api",itemApi);
app.use("/api",authorApi);
app.use("/api",epsodeApi);

app.listen(3000, function () {
	console.log(
		"server is running on port 3000"
	);
})
