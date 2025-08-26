import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import Home from "../pages/Home";
import Explore from "../pages/Explore";
import Detail from "../pages/Detail";
import Seach from "../pages/Seach"


const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:":explore",
                element:<Explore/>
            },
            {
                path:":explore/:id",
                element:<Detail/>
            },
            {
                path:"seach",
                element:<Seach/>
            }

        ]
    }
])

export default router;