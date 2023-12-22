import { userInfo } from "../../App"

const ExpenseForm = ({userInfo}: {userInfo:userInfo}) => {
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('cool')
    }

    return (
        <form className="" id="add-expense-form" onSubmit={handleSubmit}>
            <label htmlFor='expense-form-name' className='label'>
                Expense Name
            </label>
            <input id='expense-form-name' name='name' 
                type="text" placeholder="Expense" 
                className="input input-bordered w-full" 
            />
            
            <label htmlFor='expense-form-price' className='label'>
                Price
            </label>
            <input id='expense-form-price' name='price' 
                type="text" placeholder="Expense" 
                className="input input-bordered w-full" 
            />
            
            <label htmlFor='expense-form-category' className='label'>
                Category
            </label>        
            <input id='expense-form-category' name='category' 
                type="text" placeholder="Expense" 
                className="input input-bordered w-full" 
            />

            <label htmlFor='expense-form-description' className='label'>
                Description
            </label>
            <textarea
                id='expense-form-description' 
                className="textarea textarea-bordered w-full" placeholder="Expense Description"
                name="description"
            >      
            </textarea>        
        </form>
    )
}

export default ExpenseForm