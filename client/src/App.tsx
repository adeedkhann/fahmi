
import Login from "./pages/Login"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import HeroSection from "./pages/student/HeroSection"
import Courses from "./pages/student/Courses"
import MyLearning from "./pages/student/MyLearning"
import Profile from "./pages/student/Profile"

function App() {




     const appRouter =createBrowserRouter([
        {
            path:'/',
            element:<MainLayout/>,
            children:[
                {
                    path:"/",
                    element:(
                        <>
                    <HeroSection/>
                    <Courses/>
                    </>
                    )    
                },
                {
                    path:"login",
                    element:<Login/>
                },{
                    path:"MyLearning",
                    element:<MyLearning/>
                }
                ,{
                    path:"profile",
                    element:<Profile/>
                }
            ]
        }
    ])

  return (
    <main>
        <RouterProvider router={appRouter}/>

        

    </main>
  )
}


export default App