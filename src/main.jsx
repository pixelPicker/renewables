import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'

// const reactRouter = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: 'blog', element: <Blog /> },
//       { path: 'projects', element: <Projects /> },
//       { path: 'casestudy', element: <CaseStudies /> },
//   {path:"upcoming",element:<UpcomingEvents/>},

//       {path:'about' ,element:<AboutUs/>},
//       {path:'quiz',element:<Quiz/>}
//     ]
//   },
//   {
//     path: '*',
//     element: <Page404 />
//   },
// ], {
//   basename: '/renewables'
// });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
