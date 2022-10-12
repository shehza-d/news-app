import express, { response } from "express";
console.log(`Im sever file from Shehzad`)

const app = express();
const PORT = process.env.PORT || 3002;

app.get('/',(request, response)=>{
	response.send("Server hello world shehzad")
})

app.listen(PORT, () => {
	console.log(`Examples app listening on port ${PORT}`)
  })