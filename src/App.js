import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/shared/Header/Header';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard';
import AddEvent from './components/AddEvent/AddEvent';
import Register from './components/Register/Register';
import MyEvent from './components/MyEvent/MyEvent';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/events/:id">
            <Register></Register>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/my-event">
            <MyEvent></MyEvent>
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
