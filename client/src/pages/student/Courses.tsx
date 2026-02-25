import { Skeleton } from '@/components/ui/skeleton';
import React from 'react'
import Course from './Course';


const courses =[1,2,3,4,5,6,7,8]


function Courses() {

    const isLoading = false;

  return (
   <div className='bg-gray-50 min-h-screen w-full flex flex-col items-center py-10'>
    <div className='max-w-7xl w-full px-6'>
        <h2 className='font-bold text-5xl text-center mb-10 w-full'>
            Our Courses
        </h2>
        <div className='flex flex-wrap justify-center gap-6'>
            {isLoading ? (
                Array.from({ length: 8 }).map((_, index) => (
                    <CourseSkeleton key={index} />
                ))
            ) : (
                courses.map((item)=>(
                    <Course/>
                ))
            )}
        </div>
    </div>
</div>
  )
}

export default Courses



const CourseSkeleton =()=>{
    return(
        <div className='bg-white shadow:md hover:shadow-lg transition-shadow'>
        <Skeleton className='w-full h-36'/>
        <div className='px-5 py-4 space-y-3'>
            <Skeleton className='h-6 w-3/4'/>
            <div className='flex items-center justify-center'>
                <div className='flex items-center gap-3'>
                    <Skeleton className='h-6 w-6 rounded-full'/>
                    <Skeleton className='h-4 w-16'/>
                </div>
                <Skeleton className='h-4 w-16'/>
            </div>
            <Skeleton className='h-4 w-1/4'/>
        </div>
    </div>
    )
}
