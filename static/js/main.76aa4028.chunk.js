(this["webpackJsonpbank-of-react"]=this["webpackJsonpbank-of-react"]||[]).push([[0],{27:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(20),s=n.n(a),i=(n(27),n(19)),b=n(15),j=n(8),o=n(9),d=n(10),u=n(11),l=n(4),h=n(2),O=n(0),x=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:["Balance: ",this.props.accountBalance]})}}]),n}(c.Component),m=x,p=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{src:"https://picsum.photos/200/200",alt:"bank"}),Object(O.jsx)("h1",{children:"Bank of React"}),Object(O.jsx)(l.b,{to:"/userProfile",children:"User Profile"}),Object(O.jsx)("br",{}),Object(O.jsx)(l.b,{to:"/login",children:"Login"}),Object(O.jsx)("br",{}),Object(O.jsx)(l.b,{to:"/credits",children:"Credits"}),Object(O.jsx)("br",{}),Object(O.jsx)(l.b,{to:"/debits",children:"Debits"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)(m,{accountBalance:this.props.accountBalance})]})}}]),n}(c.Component),f=p,v=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"User Profile"}),Object(O.jsxs)("div",{children:["Username: ",this.props.userName]}),Object(O.jsxs)("div",{children:["Member Since: ",this.props.memberSince]}),Object(O.jsx)("br",{}),Object(O.jsx)(l.b,{to:"/",children:"Return to Home"})]})}}]),n}(c.Component),g=v,y=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(j.a)(this,n),(c=t.call(this,e)).handleChange=function(e){var t=Object(b.a)({},c.state.user);t.userName=e.target.value,c.setState({user:t})},c.handleSubmit=function(e){e.preventDefault(),c.props.mockLogIn(c.state.user),c.setState({redirect:!0})},c.state={user:{userName:c.props.user.userName,password:""},redirect:!1},c}return Object(o.a)(n,[{key:"render",value:function(){return this.state.redirect?Object(O.jsx)(h.a,{to:"/userProfile"}):Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Login"}),Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"User Name"}),Object(O.jsx)("input",{type:"text",name:"userName",defaultValue:this.props.user.userName,onChange:this.handleChange})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"Password"}),Object(O.jsx)("input",{type:"password",name:"password"})]}),Object(O.jsx)("button",{children:"Log In"})]}),Object(O.jsx)("br",{}),Object(O.jsx)(l.b,{to:"/",children:"Return to Home"})]})}}]),n}(c.Component),D=function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Credits"}),Object(O.jsx)("br",{}),Object(O.jsxs)("table",{children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Description"}),Object(O.jsx)("th",{children:"Amount"}),Object(O.jsx)("th",{children:"Date"})]})}),Object(O.jsx)("tbody",{children:e.credits?e.credits.map((function(e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.credit.description}),Object(O.jsx)("td",{children:e.credit.amount.toFixed(2)}),Object(O.jsx)("td",{children:e.credit.date})]},e.key)})):null})]}),Object(O.jsx)("br",{}),Object(O.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={description:t.target.description.value,amount:Number(t.target.amount.value),date:(new Date).toISOString(),key:e.credits.length};e.addCredit({credit:n}),t.target.description.value="",t.target.amount.value=""},children:[Object(O.jsx)("label",{name:"description",children:"Description:"}),Object(O.jsx)("input",{type:"text",name:"description"}),Object(O.jsx)("label",{name:"amount",children:"Amount:"}),Object(O.jsx)("input",{type:"number",step:"0.01",name:"amount"}),Object(O.jsx)("button",{type:"submit",children:"Add Credit"})]}),Object(O.jsx)("br",{}),Object(O.jsx)(m,{accountBalance:e.accountBalance}),Object(O.jsx)("br",{}),Object(O.jsx)(l.b,{to:"/",children:"Return to Home"})]})},k=function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Debits"}),Object(O.jsx)("br",{}),Object(O.jsxs)("table",{children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Description"}),Object(O.jsx)("th",{children:"Amount"}),Object(O.jsx)("th",{children:"Date"})]})}),Object(O.jsx)("tbody",{children:e.debits?e.debits.map((function(e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.debit.description}),Object(O.jsx)("td",{children:e.debit.amount.toFixed(2)}),Object(O.jsx)("td",{children:e.debit.date})]},e.key)})):null})]}),Object(O.jsx)("br",{}),Object(O.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={description:t.target.description.value,amount:Number(t.target.amount.value),date:(new Date).toISOString(),key:e.debits.length};e.addDebit({debit:n}),t.target.description.value="",t.target.amount.value=""},children:[Object(O.jsx)("label",{name:"description",children:"Description:"}),Object(O.jsx)("input",{type:"text",name:"description"}),Object(O.jsx)("label",{name:"amount",children:"Amount:"}),Object(O.jsx)("input",{type:"number",step:"0.01",name:"amount"}),Object(O.jsx)("button",{type:"submit",children:"Add Debit"})]}),Object(O.jsx)("br",{}),Object(O.jsx)(m,{accountBalance:e.accountBalance}),Object(O.jsx)("br",{}),Object(O.jsx)(l.b,{to:"/",children:"Return to Home"})]})},B=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(j.a)(this,n),(e=t.call(this)).mockLogIn=function(t){var n=Object(b.a)({},e.state.currentUser);n.userName=t.userName,e.setState({currentUser:n})},e.updateAccountBalance=function(){e.setState({accountBalance:Number(e.state.totalCredits-Number(e.state.totalDebits)).toFixed(2)})},e.addCredit=function(t){var n=e.state.creditList;t.key=n.length,n.push(t),e.setState({totalCredits:(Number(e.state.totalCredits)+Number(t.credit.amount)).toFixed(2)}),e.setState({creditList:n})},e.addDebit=function(t){var n=e.state.debitList;t.key=n.length,n.push(t),e.setState({totalDebits:(Number(e.state.totalDebits)+Number(t.debit.amount)).toFixed(2)}),e.setState({debitList:n})},e.state={accountBalance:1234567.89,debitList:[],totalDebits:0,creditList:[],totalCredits:0,currentUser:{userName:"Joe Smith",memberSince:"11/22/99"}},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://moj-api.herokuapp.com/credits").then((function(e){return e.json()})).then((function(t){var n,c=Object(i.a)(t);try{for(c.s();!(n=c.n()).done;){var r=n.value;e.addCredit({credit:r})}}catch(a){c.e(a)}finally{c.f()}})),fetch("https://moj-api.herokuapp.com/debits").then((function(e){return e.json()})).then((function(t){var n,c=Object(i.a)(t);try{for(c.s();!(n=c.n()).done;){var r=n.value;e.addDebit({debit:r})}}catch(a){c.e(a)}finally{c.f()}}))}},{key:"componentDidUpdate",value:function(e,t){this.state.totalCredits===t.totalCredits&&this.state.totalDebits===t.totalDebits||this.updateAccountBalance()}},{key:"render",value:function(){var e=this;return Object(O.jsx)(l.a,{basename:"/bank-of-react",children:Object(O.jsxs)("div",{children:[Object(O.jsx)(h.b,{exact:!0,path:"/",render:function(){return Object(O.jsx)(f,{accountBalance:e.state.accountBalance})}}),Object(O.jsx)(h.b,{exact:!0,path:"/userProfile",render:function(){return Object(O.jsx)(g,{userName:e.state.currentUser.userName,memberSince:e.state.currentUser.memberSince})}}),Object(O.jsx)(h.b,{exact:!0,path:"/login",render:function(){return Object(O.jsx)(y,{user:e.state.currentUser,mockLogIn:e.mockLogIn})}}),Object(O.jsx)(h.b,{exact:!0,path:"/credits",render:function(){return Object(O.jsx)(D,{credits:e.state.creditList,addCredit:e.addCredit,accountBalance:e.state.accountBalance,updateAccountBalance:e.updateAccountBalance})}}),Object(O.jsx)(h.b,{exact:!0,path:"/debits",render:function(){return Object(O.jsx)(k,{debits:e.state.debitList,addDebit:e.addDebit,accountBalance:e.state.accountBalance,updateAccountBalance:e.updateAccountBalance})}})]})})}}]),n}(c.Component),C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(B,{})}),document.getElementById("root")),C()}},[[37,1,2]]]);
//# sourceMappingURL=main.76aa4028.chunk.js.map