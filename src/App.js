import Determinante3 from "./Paginas/Determinante3";
import NavBar from "./Paginas/NavBar";
import MainPage from "./Paginas/MainPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Determinante2 from "./Paginas/Determinante2";

function App() {
   
   return (
      <div className="dark:bg-gray-600 min-h-screen bg-white text-center transition-all">
         <Router>
            <NavBar />
            <Switch>
               <Route path="/" exact component={MainPage} />
               <Route path="/determinante3x3" component={Determinante3} />
               <Route path="/determinante2x2" component={Determinante2} />
            </Switch>
         </Router>
      </div>
   );
   // <div>{JSON.stringify(valores, null, 2)}</div>
}

export default App;
