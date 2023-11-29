import { createBrowserRouter } from "react-router-dom";
import Admin from "../admin/Admin";
import path from "./path";
import Layout from "../layout/Layout";

const router = createBrowserRouter([
    {
        path:path.home,
        element:<Layout/>
    },
    {
        path:path.admin,
        element:<Admin/>
    }
])
export default router;