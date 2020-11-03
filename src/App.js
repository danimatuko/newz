import "./App.css";
import Navigation from "./components/navigation/navigation";
// console.log( process.env.REACT_APP_API_KEY);

function App() {
  // Top sports headlines from Israel

  fetch(
    `http://newsapi.org/v2/top-headlines?country=il&category=sports&apiKey=${process.env.REACT_APP_API_KEY}`
  )
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch(console.log("noob"));

  return (
    <div>
      <Navigation />
      <div className="container"></div>
    </div>
  );
}

export default App;

// fetch(
//   "http://newsapi.org/v2/top-headlines?country=il&category=sports&apiKey=798fae5901184ccf8e4880a3283c562d"
// ).then((res) => console.log(res.json()));
