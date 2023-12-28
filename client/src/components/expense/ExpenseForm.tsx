import { useState } from "react"
import { userInfo } from "../../App"

const ExpenseForm = ({userInfo, handleClick}: 
    {userInfo:userInfo, handleClick:any}) => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        let data = {
            userId: userInfo.userId,
            expenseName: name,
            expensePrice: price,
            expenseCategory: category,
            expenseDescription: description,
            isExpense: true,
            date: date
        }
        handleClick(data)
        setName('')
        setPrice(0)
        setCategory('')
        setDescription('')
        setDate('')
    }

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // const value = !Number.isNaN(e.target.valueAsNumber) ? e.target.valueAsNumber : null;
        const value = e.target.valueAsNumber
        setPrice(value);
    }
    const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCategory(e.target.value)
    }
    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value)
    }
    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formDate = e.target.value
        setDate(formDate)
    }

    return (
        <form className="" id="add-expense-form" onSubmit={handleSubmit}>
            <label htmlFor='expense-form-name' className='label'>
                Expense Name
            </label>
            <input id='expense-form-name' name='name' 
                type="text" placeholder="Expense" 
                className="input input-bordered w-full"
                value={name}
                onChange={handleNameChange} 
            />
            
            <label htmlFor='expense-form-price' className='label'>
                Price
            </label>
            <input id='expense-form-price' name='price' 
                type="number" placeholder="Expense" 
                className="input input-bordered w-full"
                value={price}
                min={0}
                step={0.01}
                onChange={handlePriceChange} 
            />
            
            <label htmlFor='expense-form-category' className='label'>
                Category
            </label>        
            <input id='expense-form-category' name='category' 
                type="text" placeholder="Expense" 
                className="input input-bordered w-full"
                value={category}
                onChange={handleCategoryChange} 
            />

            <label htmlFor='expense-form-date' className='label'>
                Expense Date
            </label> 
            <input
                id='expense-form-date' name='date'
                className="input input-bordered w-full" 
                aria-label="Date" 
                type="date" 
                value={date}
                onChange={handleDateChange}
            />

            <label htmlFor='expense-form-description' className='label'>
                Description
            </label>
            <textarea
                id='expense-form-description' 
                className="textarea textarea-bordered w-full" placeholder="Expense Description"
                name="description"
                value={description}
                onChange={handleDescriptionChange}
            >      
            </textarea>        
        </form>
    )
}

export default ExpenseForm