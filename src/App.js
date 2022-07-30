
import Expenses from './components/Expenses';
import './App.css'

function App() {

    let expenses = [
        {
            id: 'e1',
            title : 'School Fee',
            amount : 250,
            date : new Date(2021, 5, 12)
        },
        {
            id: 'e2',
            title : 'Books',
            amount : 250,
            date : new Date(2021, 4, 12)
        },

        {
            id: 'e3',
            title : 'Hospital',
            amount : 1000,
            date : new Date(2021, 2, 12)
        },

        {
            id: 'e4',
            title : 'Rent',
            amount : 1400,
            date : new Date(2021, 5, 12)
        }
    ];

    // let expenseDate = new Date(2022, 3, 28);
    // let expenseTitle = "School Fee";
    // let expenseAmount = 3000;

    return (
        <div className="app-container">

            <h2 className="Header">Expense Tracker</h2>
           
           <Expenses item={expenses}/>

        </div>
    );
}

export default App;