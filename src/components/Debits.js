/*==================================================
src/components/Debits.js

The Debits component contains information for Debits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';
import AccountBalance from "./AccountBalance";

const Debits = (props) => {
  // Create the list of Debit items
  const debitsView = () => {
    return (
	    props.debits
	    ? props.debits.map((debit) => (  // Extract "key", "amount", "description" and "date" properties of each debits JSON array element
              <tr key={debit.key}>
                <td>{debit.debit.description}</td>
                <td>{debit.debit.amount.toFixed(2)}</td>
                <td>{debit.debit.date}</td>
              </tr>
	    ))
	    : null
    ) 
  }

  // Create view for displaying the account balance
  const accountBalanceView = () => (<AccountBalance accountBalance={props.accountBalance} />)

  // When user clicked "Add Debit" button, store form data and then update state through props
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create new debits object using form data
    let newDebit = {
      description: e.target.description.value,
      amount: Number(e.target.amount.value),
      date: new Date().toISOString(),
      key: props.debits.length,
    }

    props.addDebit({debit: newDebit})  // Update state in the top-level component (App.js)

    // Reset form fields
    e.target.description.value = "";
    e.target.amount.value = "";
  }

  // Render the list of Debit items and a form to input new Debit item
  return (
    <div>
      <h1>Debits</h1>
      <br />
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
	  </tr>
	</thead>
	<tbody>
          {debitsView()}
	</tbody>
      </table>
      <br/>
      <form onSubmit={handleSubmit}>
	<label name="description">Description:</label>
        <input type="text" name="description" />
	<label name="amount">Amount:</label>
        <input type="number" step="0.01" name="amount" />
        <button type="submit">Add Debit</button>
      </form>
      <br/>
      {accountBalanceView()}
      <br/>
      <Link to="/">Return to Home</Link>
    </div>
  )
}

export default Debits;
