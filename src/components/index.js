const { BrowserRouter } = require("react-router-dom");

function Spa(props, state) {
    return (
      <BrowserRouter>
        <UserContext.Provider value={{ user: {email: ''}}}>
          <NavBar />
          <div className="container" style={{padding: "20px"}}>
            <Route path="/" exact component={Home} />
            <Route path="/CreateAccount/" component={CreateAccount} />
            <Route path="/login/" component={Login} />
            <Route path="/deposit/" component={Deposit}/>
            <Route path="/withdraw/" component={Withdraw} />
            <Route path="/transfer/" component={Transfer} />
            <Route path="/alldata/" component={AllData} />
  
          </div>
        </UserContext.Provider>
      </BrowserRouter>
    );
  }
  
  ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
  );