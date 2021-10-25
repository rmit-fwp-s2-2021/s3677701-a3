import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from './components/Form';
import MealPlan from './components/MealPlan';


function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
        <div className="container my-3">
          <Switch>
            <Route path="/mealPlan">
              <MealPlan fields={null}/>
            </Route>
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
