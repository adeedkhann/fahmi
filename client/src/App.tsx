
import Login from "./pages/Login"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import HeroSection from "./pages/student/HeroSection"
import Courses from "./pages/student/Courses"
import MyLearning from "./pages/student/MyLearning"

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