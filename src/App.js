import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useEffect, useState } from "react";
import { Component } from "react";
const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2023, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2024, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       newExpenses: [],
//     };
//   }
//   render() {
//     addExpenseHandler = (expense) => {
//       setNewExpenses((prevExpense) => {
//         return [expense, ...prevExpense];
//       });
//     };
//     return (
//       <div className="App">
//         <NewExpense onAddExpense={addExpenseHandler} />
//         <Expenses expenses={newExpenses} />{" "}
//       </div>
//     );
//   }
// }

function App() {
	const [newExpenses, setNewExpenses] = useState(expenses)

	const addExpenseHandler = (expense) => {
		setNewExpenses((prevExpense) => {
			return [expense, ...prevExpense]
		})
	}
useEffect(()=>{
getData()
},[])

async function getData(){
  try{

    const response = await await fetch('https://hw17-69e45-default-rtdb.asia-southeast1.firebasedatabase.app/hw_17.json')
    const data =await await response.json()
    const fromFireBase =[]
    for (const key in data){
      fromFireBase.push({
        id:key,
        title:data[key].title,
        amount:data[key].amount,
        date:new Date(data[key].date)
      })
    }
    setNewExpenses([...fromFireBase, ...expenses])
  }catch(error){
    console.error(error);
  }
}
	return (
		<div className='App'>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses expenses={newExpenses} />
		</div>
	)
}

export default App
