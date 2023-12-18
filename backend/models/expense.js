import mongoose from "mongoose";
const { Schema } = mongoose;

const expenseSchema = new Schema({
    expense_name : {
        type: String,
        required: true
    },
    expense_price : {
        type: Number,
        required: true
    },
    expense_category : {
        type: String,
        required: false
    },
    expense_description : {
        type: String,
        required: false
    },
    is_expense: {
        type: Boolean,
        required: true
    }
}, {timestamps : true})

const Expense = mongoose.model('expense', expenseSchema)

export default Expense