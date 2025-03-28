import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./pages";

function App() {
  return (
    <>
      <Header />
      <div className="content-container">
        <Home />
      </div>
    </>
  );
}

export default App;
