import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import SignIn from './pages/signin/signin.page';
import "materialize-css/dist/css/materialize.min.css";
import NavBar from './components/navbar/navbar.component';
import Forum from './pages/forum/forum.page';
import Footer from './components/footer/footer.component';


function App() {
  return (
    <Router>
        <NavBar/>
        <Switch>
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
