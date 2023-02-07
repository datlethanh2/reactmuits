import Layout from "../pages/home/Layout"
import Login from "../pages/login/Login"
import User from "../pages/user/User"
import NotFound from "../pages/notfound/NotFound"

import { Routes, Route, Navigate} from "react-router-dom";

export default function RouteLayout(){

    return(
        <Routes>
            {/* <Route path="/" element={localStorage.getItem('accessToken')?<Navigate to="/Home/Main" />:<Login />} />  */}
            {/* <Route path="/" element={localStorage.getItem('accessToken')?<Main />:<Navigate to="/" />}> */}
                {/* <Route path="Projects" element={<Projects />} />
                <Route path="Tasks" element={<Tasks/>} /> */}
            {/* </Route>              */}
            <Route path="/Login" element={<Login/>}/>
            <Route path="/" element={<Layout/>}>
                <Route path="User" element={<User/>} />
                <Route path="NotFound" element={<NotFound/>} />
            </Route>
            
        </Routes>
    )
}