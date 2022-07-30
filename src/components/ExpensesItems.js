import { renderIntoDocument } from 'react-dom/test-utils';
import './ExpensesItems.css';
import Expensedate from './Expensesdate';
import React, { useState } from 'react';

function ExpenseItems(props) {

    const [newTitle, setNewTitle] = useState("");

    const changeHandler = (event) => {

        setNewTitle(event.target.value);

    }

    const [title, setTitle] = useState(props.title);

    
    const clickHandler = () => {

        setTitle(newTitle);

    }

    return (


        <div className='expense-Item'>

            <Expensedate date={props.date} />

            <h2> { title }</h2>

            <div className='expense-item__description'>

                <div className='expense-item__price'>₹{props.amount}</div>
            </div>
            < input type="text" value={newTitle} onChange={ changeHandler }/>
            <button onClick={clickHandler} > Change Title </button>
        </div>


    );


}


export default ExpenseItems;