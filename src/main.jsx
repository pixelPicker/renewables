import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './HomePageComponents/Home.jsx';
import Page404 from './ProjectComponents/Page404.jsx';
import AboutUs from './QuizComponent/About/AboutUs.jsx'
import Quiz from './QuizComponent/Quiz/Quiz.jsx'
import UpcomingEvents from './Upcoming/Upcoming.jsx'
import CaseStudies from './Casestudy/Casestudy.jsx'
import Blog from './blog/blog.jsx'
import Projects from './DIYProject/Projects.jsx'
const reactRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'blog', element: <Blog /> },
      { path: 'projects', element: <Projects /> },
      { path: 'casestudy', element: <CaseStudies /> },
  {path:"upcoming",element:<UpcomingEvents/>},

      {path:'about' ,element:<AboutUs/>},
      {path:'quiz',element:<Quiz/>}
    ]
  },
  {
    path: '*',
    element: <Page404 />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={reactRouter} />
  </StrictMode>,
)
