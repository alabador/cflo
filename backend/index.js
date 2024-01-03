import express, { request, response } from 'express';
import 'dotenv/config'
import cors from 'cors'
import middleware from './middleware/index.js';
import mongoose from 'mongoose';
import admin from './config/firebase-config.js';
import Users from './models/users.js';
import Expense from './models/expense.js';

const app = express()

app.use(express.json())
app.use(cors())
// app.use(middleware.decodeToken)


const newUserData = async (decodeValue, req, res) => {
	const newUser = new Users({
		name : decodeValue.name,
		email : decodeValue.email,
		imageURL: decodeValue.picture,
		userId : decodeValue.user_id,
		email_verified: decodeValue.email_verified,
		auth_time: decodeValue.auth_time 
	})

	try {
		const savedUser = await newUser.save()
		res.status(200).send({user : savedUser})
	} catch (error) {
		res.status(400).send({success: false, msg: error})
	}
}

const updateUserData = async (decodeValue, req, res) => {
	const filter = {userId : decodeValue.user_id}
	const options = {
		upsert : true,
		new: true,
	}
	
	try {
		const result = await Users.findOneAndUpdate(filter, 
			{auth_time: decodeValue.auth_time},
			options
		)
		res.status(200).send({user: result})
	} catch (error) {
		res.status(400).send({success: false, msg: error})
	}
}

const newExpenseData = async (expenseData, req, res) => {
	const newExpense = new Expense({
		userId: expenseData.userId,
		expense_name: expenseData.expenseName,
		expense_price: expenseData.expensePrice,
		expense_category: expenseData.expenseCategory,
		expense_description: expenseData.expenseDescription,
		is_expense: expenseData.isExpense,
		date: expenseData.date
	})

	try {
		const savedExpense = await newExpense.save()
		res.status(200).send({expense : savedExpense})
	} catch (error) {
		res.status(400).send({success: false, msg: error})
	}
}

app.get('/', (request, response) => {
    return response.status(200).send('Successful')
})

app.get('/home', (req, res) => {
	return res.json({
		expenses: [
			{expense_name : 'expense title',
			expense_price : 0,
			expense_category : 'entertainment',
			expense_description : 'this is a short desc',
			is_expense: true,
			date: '1/1/2024'
			},
			{expense_name : 'expense title 2',
			expense_price : 0,
			expense_category : 'entertainment',
			expense_description : 'this is a short desc',
			is_expense: true,
			date: '1/1/2024'
			}
		],
	});
});



app.post('/home', async (req, res) => {
	if (!req.headers.authorization) {
		console.log('error')
		return res.status(500).send({message: "Invalid Token"})
	}

	const token = req.headers.authorization.split(' ')[1];
	console.log(token)
	try {
		const decodeValue = await admin.auth().verifyIdToken(token);
		if (decodeValue) {
			console.log(decodeValue);
			// res.send(decodeValue)
			const userExists = await Users.findOne({userId:decodeValue.uid})
			if (!userExists) {
				newUserData(decodeValue, req, res)
			} else {
				updateUserData(decodeValue, req, res)
			}
			// res.send()
		} else {
			return res.json({ message: 'Unauthorized' });
		}
	} catch (e) {
		console.log(e)
		return res.json({ message: 'Internal Error' });
	}
});

app.post('/home/add', async (req,res) => {
	if (!req.headers.authorization) {
		console.log('error')
		return res.status(500).send({message: "Not signed in to an account."})
	}
	const expenseData = req.body
	const token = req.headers.authorization.split(' ')[1];
	try {
		newExpenseData(expenseData, req, res)
	} catch (error) {
		console.log(error)
		return res.json({ message: 'Internal Error' });
	}
})

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