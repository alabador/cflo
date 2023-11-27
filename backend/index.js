import express, { request, response } from 'express';
import 'dotenv/config'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

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

app.listen(process.env.PORT, () => {
    console.log(`App is listening on port: ${process.env.PORT}`)
})