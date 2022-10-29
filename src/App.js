import {Routes,Route} from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Signin from "./routes/signin/sign-in.component";



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
        <Route path="sign-in" element={<Signin/>}></Route>
      </Route>
    </Routes>
  )};
export default App;
