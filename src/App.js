import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navbar from './components/navbars/navbar1';
import Form from './components/forms/from1';
// import Loader from './components/Loaders/loader1';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/navbar" component={Navbar} />
          <Route path="/form" component={Form} />
          <Route path="/loader" component={Loader} />
          {/* Add more routes as necessary */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
