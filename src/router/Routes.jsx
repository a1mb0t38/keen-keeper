import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import HomePage from "../pages/homepage/HomePage";
import Timeline from "../pages/timeline/Timeline";
import Stats from "../pages/stats/Stats";
import NotFound from "../pages/notfoundpage/NotFound";
import FriendsDetails from "../pages/friendsDetail/FriendsDetails";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        // path: "/",
        index: true,
        element: <HomePage></HomePage>
      },
      {
        path:"/:id",
        element: <FriendsDetails></FriendsDetails>
      },
      {
        path: "/timeline",
        element: <Timeline></Timeline>
      },
      {
        path: "/stats",
        element: <Stats></Stats>
      },

    ],
    errorElement: <NotFound></NotFound>
  },
  
])