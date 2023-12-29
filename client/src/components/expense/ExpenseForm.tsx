import { userInfo } from "../../App"

const ExpenseForm = (
    {userInfo, handleClick, name, setName, price, setPrice, category, setCategory, description, setDescription, date, setDate, isExpense, setIsExpense}: 
    {userInfo:userInfo, handleClick:any, name, setName, price, setPrice, category, setCategory, description, setDescription, date, setDate, isExpense, setIsExpense}) => 
    {

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
        resetForm()
    }

    const resetForm = () => {
        setName('')
        setPrice(0)
        setCategory('')
        setDescription('')
        setDate('')
        setIsExpense(true)
    }

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value
        setPrice(Number(value));
    }
    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.value)
    }
    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value)
    }
    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formDate = e.target.value
        setDate(formDate)
    }
    const handleTransactionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let expenseString = e.target.value
        const expenseBool = expenseString == 'expense' ? true : false 
        setIsExpense(expenseBool)
    }

    // Used to convert boolean state to string value, used in HTML select element
    // for selecting expense type.
    const convertBoolToExpenseType = (bool) => {
        if (bool) return 'expense'
        else return 'income'
    }

    return (
        <form className="" id="add-expense-form" onSubmit={handleSubmit}>
            <label htmlFor='expense-form-name' className='label'>
                Expense Name
            </label>
            <input id='expense-form-name' name='name' 
                type="text" placeholder="Expense" 
                className="input input-bordered w-full max-w-xs"
                value={name}
                onChange={handleNameChange} 
                required
            />
            
            <label htmlFor='expense-form-price' className='label'>
                Price
            </label>
            <input id='expense-form-price' name='price' 
                type="number" placeholder="Expense" 
                className="input input-bordered w-full max-w-xs"
                value={price}
                min={0}
                step={0.01}
                onChange={handlePriceChange}
                required 
            />
            
            <label htmlFor='expense-form-category' className='label'>
                Category
            </label>        
            <select id="expense-form-category" 
                className="select select-bordered w-full max-w-xs"
                value={category}
                onChange={handleCategoryChange}
                required
            >
                <option value="Utilities">Utilities</option>
                <option value="Rent">Rent</option>
                <option value="Subscriptions">Subscriptions</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Travel">Travel</option>
                <option value="Food">Food</option>
                <option value="Medical">Medical</option>
                <option value="Insurance">Insurance</option>
                <option value="Debt">Debt & Loan Payment</option>
                <option value="Education">Education</option>
                <option value="Savings">Savings</option>
                <option value="Gifts">Gifts</option>
                <option value="Household">Household Items & Supplies</option>
                <option value="Clothing">Clothing</option>
                <option value="Maintenance">Repairs & Maintenance</option>
                <option value="Income">Income</option>
            </select>

            <label htmlFor='expense-form-date' className='label'>
                Expense Date
            </label> 
            <input
                id='expense-form-date' name='date'
                className="input input-bordered w-full max-w-xs" 
                aria-label="Date" 
                type="date" 
                value={date}
                onChange={handleDateChange}
                required
            />

            <label htmlFor='expense-form-transaction' className='label'>
                Transaction Type
            </label> 
            <select id="expense-form-transaction" 
                className="select select-bordered w-full max-w-xs"
                onChange={handleTransactionChange}
                value={convertBoolToExpenseType(isExpense)}
                required
            >
                <option value="expense">Expense</option>
                <option value="income">Income</option>
            </select>

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