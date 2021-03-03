import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Admin from './Admin';
import Error from './Error';
import Landing from './Landing';
import Member from './Member';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar />
        <div>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/navbar" exact component={Navbar} />
            <Route path="/member" exact component={Member} />
            <Route path="/admin" exact component={Admin} />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
