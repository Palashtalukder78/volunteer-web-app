import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/shared/Header/Header';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Events from './components/Events/Events';
import Dashboard from './components/Dashboard/Dashboard';
import AddEvent from './components/AddEvent/AddEvent';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/events">
            <Events></Events>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/add-event">
            <AddEvent></AddEvent>
          </PrivateRoute>
        </Switch>
      </Router>
    </AuthProvider>
  );
}
export default App;
