import { createBrowserRouter } from "react-router-dom";
import { Default } from "./layouts/Default";
import { Status } from "./pages/status/Status";
import { Timeline } from "./pages/timeline/Timeline";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Default />,
        children: [
            {
                path: '/',
                element: <Timeline />
            },

            {
                path: '/status',
                element: <Status />
            },
        ]
    }
])