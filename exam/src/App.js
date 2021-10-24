import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from './components/Form';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
        <div className="container my-3">
          <Switch>
            <Route path="/">
              <Form />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
