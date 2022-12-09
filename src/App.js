import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import NotFound from './NotFound';

function App() {
  const title="Welcome to the new Blog";
  const likes=50;
  const links="https://www.google.com";
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="Content">
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route   path="/BlogDetails/:id">
         <BlogDetails/>
        </Route>
        <Route   path="/Create">
         <Create></Create>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
       

      </div>
    </div>
    </Router>
  );
}

export default App;
