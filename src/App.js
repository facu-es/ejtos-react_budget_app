import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

//Code to import Remaining.js
import Remaining from './components/Remaining';

//Code to import ExpenseTotal.js
import ExpenseTotal from './components/ExpenseTotal';

//Code to import ExpenseList.js
import ExpenseList from './components/ExpenseList';

//Code to import ExpenseItem.js
import ExpenseItem from './components/ExpenseItem';

//Code to import AllocationForm.js
import AllocationForm from './components/AllocationForm';

// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                            { // Budget component
                                <div className='col-sm'>
                                   <Budget />
                                </div>
                        }        

                            { //Remaining component
                                <div className='col-sm'>
                                    <Remaining />
                                </div>
                        }        

                            { //ExpenseTotal component
                                <div className='col-sm'>
                                    <ExpenseTotal />
                                </div>
                        }

                    </div>
                    <h3 className='mt-3'>Allocation</h3>
                        <div className='row '>
                            { //ExpenseTotal component
                                <div className='col-sm'>
                                    <ExpenseList />
                                </div>
                            }         
                        </div>
                    <h3 className='mt-3'>Change allocation</h3>
                        <div className='row mt-3'>
                            <div className='col-sm'>  
                                { //ExpenseTotal component
                                    <div className='col-sm'>
                                        <AllocationForm />
                                    </div>
                            }
                        </div>
                    </div>
                </div>
        </AppProvider>
    );
};
export default App;
