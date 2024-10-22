import {BrowserRouter, createBrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./screens/Home";
import About from "./screens/About";
import Root from "./Root";
import NotFound from "./screens/NotFound";
import User from "./screens/users/User";
import Followers from "./screens/users/Followers";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "users/:userId",
                element: <User />,
                children: [
                    {
                        path: "followers",
                        element: <Followers />
                    }
                ]
            }
        ],
        errorElement: <NotFound />  // 에러 페이지를 만들어서 웹이 죽는 걸 방지할 수 있다. 
    }
])

export default router;