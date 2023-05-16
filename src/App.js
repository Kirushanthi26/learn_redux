import "./App.css";
import { legacy_createStore as createStore } from "redux";
import {Provider} from "react-redux"; //cover this app into store. get data from store
import userReducer from "./store/reducer/user"; 

function App() {

  const store = createStore(userReducer)
  return (
    //cover this app into store - using provider - so we can easily access the states
    <div className="App">
      <Provider store={store}>
        
      </Provider>
    </div>
  );
}

export default App;
