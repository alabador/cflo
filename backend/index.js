import express, { request, response } from 'express';
import 'dotenv/config'
import cors from 'cors'
import middleware from './middleware/index.js';
import mongoose from 'mongoose';

const app = express()

app.use(express.json())
app.use(cors())
app.use(middleware.decodeToken)

app.get('/', (request, response) => {
    return response.status(200).send('Successful')
})

app.get('/home', (req, res) => {
	return res.json({
		expenses: [
			{title: 'Expense1',},
			{title: 'Expense2',},
		],
	});
});

mongoose
	.connect(process.env.DB_CONNECTION_STRING)
	.then(() => {
		console.log('App connected to database')
		app.listen(process.env.PORT, () => {
			console.log(`App is listening on port: ${process.env.PORT}`)
		})
	})
	.catch((error) => {
		console.log(error)
	})