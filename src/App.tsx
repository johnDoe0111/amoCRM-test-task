import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="w-80 sm:w-200 m-auto">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
