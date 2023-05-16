import "./App.css";
import { legacy_createStore as createStore } from "redux";
import {Provider} from "react-redux"; //cover this app into store. get data from store
import userReducer from "./store/reducer/user"; 
import {BrowserRouter as Router,  Routes, Route} from "react-router-dom"; //Switch - port changing, 
import Users from "./pages/Users";
import Home from "./pages/Home";

function App() {

  const store = createStore(userReducer)

  return (
    //cover this app into store - using provider - so we can easily access the states
    <div className="App">
      <Provider store={store}>
          <Router>
            <Routes Routes>
              <Route path="/users" Component={Users}/>
              <Route path="/" Component={Home}/>
            </Routes>
          </Router>
      </Provider>
    </div>
  );
}

export default App;
