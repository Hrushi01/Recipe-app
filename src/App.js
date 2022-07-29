import Catogory from "./components/Catogory";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import Logobar from "./components/Logobar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Logobar />
        <Search />
        <Catogory />

        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
