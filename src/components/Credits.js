/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';
import AccountBalance from "./AccountBalance";

const Credits = (props) => {

  // Create view for displaying credits passed by props
  const creditsView = () => {
    return(
      props.credits 
      ? props.credits.map((credit) => (
	<tr key={credit.key}>
	      <td>{credit.credit.description}</td>
	      <td>{credit.credit.amount.toFixed(2)}</td>
	      <td>{credit.credit.date}</td>
	      </tr>
      )) 
      : null
    )
  }

  // Create view for displaying the account balance
  const accountBalanceView = () => (<AccountBalance accountBalance={props.accountBalance} />);

  // When user clicked "Add credit" button, store form data and then update state through props
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create new credits object using form data
    let newCredit = {
      description: e.target.description.value,
      amount: Number(e.target.amount.value),
      date: new Date().toISOString(),
      key: props.credits.length,
    }
     
    props.addCredit({credit: newCredit});  // Update state in the top-level component (App.js)
     
    // Reset form fields
    e.target.description.value = "";
    e.target.amount.value = "";
  }


  return (
    <div>
      <h1>Credits</h1>
      <br/>
      <table>
	<thead>
	  <tr>
	    <th>Description</th>
	    <th>Amount</th>
	    <th>Date</th>
	  </tr>
        </thead>
        <tbody>
          {creditsView()}
	</tbody>
      </table>
      <br/>
      <form onSubmit={handleSubmit}>
	<label name="description">Description:</label>
        <input type="text" name="description" />
	<label name="amount">Amount:</label>
        <input type="number" step="0.01" name="amount" />
        <button type="submit">Add Credit</button>
      </form>
      <br/>
      {accountBalanceView()}
      <br/>

      <Link to="/">Return to Home</Link>
    </div>
  )
}

export default Credits;
