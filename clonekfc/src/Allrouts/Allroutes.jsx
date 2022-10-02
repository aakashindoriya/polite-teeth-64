import {Routes,Route} from "react-router-dom"
import CartPage from "../pages/CartPage"
import Homepage from "../pages/homepage"
import Login from "../pages/loginpage"
import Menu from "../pages/menupage"
import Signup from "../pages/SignUp"
import Private from "./privateRouts"
export default function AllRoutes(){

    return(
        <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/cart" element={<Private><CartPage /></Private>} />
            <Route path="/menu" element={<Menu />}  />
            <Route path="/menu/:id" element={<Menu/>} />
        </Routes>
    )
}