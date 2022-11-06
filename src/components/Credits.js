/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';

const Credits = (props) => {
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

      {props.credits ? props.credits.map((credit) => (
	<tr key={credit.credit.key}>
	      <td>{credit.credit.description}</td>
	      <td>{credit.credit.amount.toFixed(2)}</td>
	      <td>{credit.credit.date}</td>
	      </tr>
      )) : null}
	  </tbody>
      </table>
      <Link to="/">Return to Home</Link>
    </div>
  )
}

export default Credits;
