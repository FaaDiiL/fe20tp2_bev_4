import About from '../About';
import Contact from '../Contact';
import GlobalStyleDefault from '../GlobalStyleDefault';
import Navbar from '../Navbar';
import Admin from './Admin';
import Error from './Error';
import Landing from './Landing';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Member from './Member';

function App() {
  return (
    <>
      <Router>
        <GlobalStyleDefault />
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
