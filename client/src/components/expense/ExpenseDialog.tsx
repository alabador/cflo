import ExpenseForm from "./ExpenseForm"

const ExpenseDialog = () => {

    return (
        <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click the button below to close</p>
            <ExpenseForm />
            <div className="modal-action">
                <button 
                    className="btn btn-primary"
                    form="add-expense-form"
                    value={"submit"}
                >
                    Add
                </button>
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                </form>
            </div>
        </div>
    )
}

export default ExpenseDialog