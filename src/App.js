
import './App.css';
import Login from './log-in/Login';
import SignUp from './log-in/SignUp';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
    <Link className="button1" to="/login">Click here for Login</Link>
    <br/>
    <Link className="button" to="/signup">Click here for SignUp</Link>
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUp} />
    </Router>
    </div>
  );
}

export default App;
