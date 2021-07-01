import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";

function App() {
  const isAuth = false;
  const isAdmin = false;
  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/admindashboard">Admin dashboard</a>
            </li>
          </ul>
        </nav>
      </main>
      <Switch>
        <Route path="/" render={Home} />
        <Route path="/about" render={About} />
        <Route path="/contact" render={Contact} />
        {isAdmin ? (
          <>
            <Route path="/admindashboard:isSignedIn" render={AdminDashboard} />
            <Route path="/mangeOrders/:isSignedIn" render={Orders} />
          </>
        ) : (
          <Redirect to="/" />
        )}
      </Switch>
    </Router>
  );
}

const Home = ({ signedId }) => {
  <>
    {signedId === true ? <Redirect to="cart" /> : null}
    <h1>Home</h1>
  </>;
};

const About = () => {
  <>
    <h1>About</h1>
  </>;
};

const Contact = () => {
  <>
    <h1>Contact</h1>
  </>;
};

const AdminDashboard = () => {
  <>
    <h1> AdminDashboard</h1>
  </>;
};

const Orders = () => {
  <>
    <h1> Orders</h1>
  </>;
};
export default App;

// Task 1: Portfolio website with multiple pages react router dom
// Task 1.5 :Create a signedIn route
// Task 2 : Ecommerce application with admin routes, private routes"
