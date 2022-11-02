import {Routes,Route} from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";



const Shop = () =>{
  return(
    <h1>Enjoy Shopping</h1>
  );
}

const App = () => {
  return(
    <Routes>
      <Route path='/' element={ <Navigation/>}>
        <Route index element={ <Home/>}/>
        <Route path='shop' element={ <Shop/>}/>
        <Route path="Auth" element={<Authentication/>}></Route>
      </Route>
    </Routes>
  )};
export default App;
