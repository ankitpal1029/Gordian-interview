import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';
import SignIn from './pages/signin/signin.page';
import "materialize-css/dist/css/materialize.min.css";
import NavBar from './components/navbar/navbar.component';
import Forum from './pages/forum/forum.page';
import Footer from './components/footer/footer.component';
import { useState } from 'react';


function App() {
        const [ loggedIn, setloggedIn ] = useState(window.localStorage.getItem('loggedin'))  
    console.log(loggedIn);
  return (
    <Router>
        <NavBar/>
        <Switch>
        <Route exact path="/">
          {loggedIn=== 'true' ? <Redirect  to="/forum" /> : <SignIn />}
        </Route>
            <Route path="/signin">
                <SignIn/>
            </Route>

            <Route path="/forum">
                <Forum />
            </Route>
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
