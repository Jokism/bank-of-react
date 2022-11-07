/*==================================================
src/App.js

This is the top-level component of the app.
It contains the top-level state.
==================================================*/
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Import other components
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Credits from './components/Credits';
import Debits from './components/Debits';

class App extends Component {
  constructor() {  // Create and initialize state
    super(); 
    this.state = {
      accountBalance: 1234567.89,
      debitList: [],
      totalDebits: 0,
      creditList: [],
      totalCredits: 0,
      currentUser: {
        userName: 'Joe Smith',
        memberSince: '11/22/99',
      },
    }
  }
  
  // Update state's currentUser (userName) after "Log In" button is clicked
  mockLogIn = (logInInfo) => {  
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  updateAccountBalance = () => {
    this.setState({accountBalance : Number(this.state.totalCredits - Number(this.state.totalDebits)).toFixed(2)})
  }
  
  // Update state's creditList (array) based on user input of new credits, update totalCredits based on credit's amount
  addCredit = (credit) => {
    const newCreditList = this.state.creditList;
    credit.key = newCreditList.length;
    newCreditList.push(credit);
    this.setState({ totalCredits: (Number(this.state.totalCredits) + Number(credit.credit.amount)).toFixed(2) })
    this.setState({ creditList: newCreditList });
  }

  // Update state's debitList (array) based on user input of new debits, update totalDebits based on debit amount
  addDebit = (debit) => {
    const newDebitList = this.state.debitList;
    debit.key = newDebitList.length;
    newDebitList.push(debit);
    this.setState({ totalDebits: (Number(this.state.totalDebits) + Number(debit.debit.amount)).toFixed(2) })
    this.setState({ debitList: newDebitList });
  }

  // Lifecycle method that updates the state using data from API requests
  componentDidMount() {
    // Fetch Credits data from API
    fetch("https://moj-api.herokuapp.com/credits")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        for (const credit of data) {
          this.addCredit({credit});
	}
      })

    // Fetch Debits data from API
    fetch("https://moj-api.herokuapp.com/debits")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        for (const debit of data) {
          this.addDebit({debit});
	}
      })
  }

  // Lifecycle method that updates the accountBalance when a credit or debit is added
  componentDidUpdate(prevProps, prevState) {
    if(this.state.totalCredits !== prevState.totalCredits || this.state.totalDebits !== prevState.totalDebits) {
	    this.updateAccountBalance();
    }
  }

  // Create Routes and React elements to be rendered using React components
  render() {  
    // Create React elements and pass input props to components
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} />);
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)
    const DebitsComponent = () => (<Debits debits={this.state.debitList} 
	                                     addDebit={this.addDebit}
	                                     accountBalance={this.state.accountBalance}
	                                     updateAccountBalance={this.updateAccountBalance}
        />)
    const CreditsComponent = () => (<Credits credits={this.state.creditList} 
		                             addCredit={this.addCredit}
		                             accountBalance={this.state.accountBalance}
	                                     updateAccountBalance={this.updateAccountBalance}
	/>)

    // Important: Include the "basename" in Router, which is needed for deploying the React app to GitHub Pages
    return (
      <Router basename="/bank-of-react-example-code-gh-pages">
        <div>
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path="/userProfile" render={UserProfileComponent}/>
          <Route exact path="/login" render={LogInComponent}/>
          <Route exact path="/credits" render={CreditsComponent}/>
          <Route exact path="/debits" render={DebitsComponent}/>
        </div>
      </Router>
    );
  }
}

export default App;
