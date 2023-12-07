import express, { request, response } from 'express';
import 'dotenv/config'
import cors from 'cors'
import middleware from './middleware/index.js';
import mongoose from 'mongoose';
import admin from './config/firebase-config.js';

const app = express()

app.use(express.json())
app.use(cors())
// app.use(middleware.decodeToken)

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

app.post('/home', async (req, res) => {
	if (!req.headers.authorization) {
		return res.status(500).send({message: "Invalid Token"})
	}

	const token = req.headers.authorization.split(' ')[1];
	console.log(token)
	try {
		const decodeValue = await admin.auth().verifyIdToken(token);
		if (decodeValue) {
			console.log(decodeValue);
			res.send(decodeValue)
			// return next();
		} else {
			return res.json({ message: 'Unauthorized' });
		}
	} catch (e) {
		console.log(e)
		return res.json({ message: 'Internal Error' });
	}
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