import BroadcastListPage from "@/pages/BroadcastListPage";
import BroadcastDetailPage from "@/pages/BroadcastDetailPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BroadcastListPage />,
  },
  {
    path: "/:campaignKey",
    element: <BroadcastDetailPage />,
  },
]);

export default router;
