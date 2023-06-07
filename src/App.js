
import './App.css';
import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/welcome";
import User from "./pages/user";






const App = () => (
  <>
    <Routes>
      <Route element={<Welcome />} path='/' />
      <Route element={<User />} path='/user'/>
    </Routes>
  </>

)

export default App;