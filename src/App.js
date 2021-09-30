
import './App.css';
import Login from './log-in/Login';
import SignUp from './log-in/SignUp';
import Home from './log-in/Home';
import About from './log-in/About';
import "./log-in/Style.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="header">
          <Link className="home" to="/home"> Home </Link>
          <Link className="about" to="/about"> About </Link>
          <Link className="login" to="/login"> Login </Link>
          <Link className="signup" to="/signup"> SignUp </Link>
        </div>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Router>
    </div>
  );
}

export default App;
