import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function HeroSection() {
  return (
    <div className="mt-13 relative bg-linear-to-r from-blue-500 to bg-indigo-600  dark:from-gray-800 dark:to-gray-900 py-16 px-4 text-center ">
        <div className="max-w-3xl mx-auto">
            <h1 className="text-white text-4xl font-bold mb-4">
                Find the Best courses for you
            </h1>
            <p className="text-gray-200 dark:text-gray-400 mb-8">
                Discover learn and upskill with our wide range of courses
            </p>
            <form  className="flex items-center bg-white dark:bg-gray-800 rounded-full shadow-lg overflow-hidden">
                <Input 
                type="text"
                placeholder="Search Coureses..."
                className="grow broder-none focus-visible:ring-0 px-6 py-3 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
                />
                <Button className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 rounded-r-full hover:bg-blue-800">Search</Button>
                
            </form>
            <Button className="bg-white dark:bg-gray-800 text-blue-600 rounded-full hover:bg-gray-200 mt-10">Explore Courses</Button>
        </div>
    </div>
  )
}

export default HeroSection