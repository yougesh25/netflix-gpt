import "./App.css";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <div className="w-12/12">
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
