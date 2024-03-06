import { createBrowserRouter } from "react-router-dom";
import About from "./screens/About";
import Home from "./screens/Home";
import Root from "./Root";
import NotFound from "./screens/NotFound";
import Author from "./screens/Author";
import Books from "./screens/Books";
import Chapter from "./screens/Books/Chapter";
import Characters from "./screens/Books/Characters";

const router = createBrowserRouter([
    {
        path : "/",
        element : <Root />,
        children : [
            {
                path : "",
                element : <Home />
            },
            {
                path : "about",
                element : <About />
            },
            {
                path : "/author/:name",  //dynamic params //users/:userId
                element : <Author />,
                children : [
                    {
                        path : "/author/:name/:book",
                        element : <Books />,
                        children : [
                            {
                                path : "/author/:name/:book/chapter",
                                element : <Chapter />
                            },
                            {
                                path : "/author/:name/:book/characters",
                                element : <Characters />
                            },
                        ],
                    },
                ],
            },

        ],
        errorElement :<NotFound />
    },
]);

export default router;