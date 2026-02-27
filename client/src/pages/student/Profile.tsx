import {  Avatar ,AvatarFallback,AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Loader2 } from 'lucide-react'
import Course from './Course'

function Profile() {
  
  const isLoading=false;
  const enrolledCourses = [1];

  return (
    <div className='max-w-4xl mx-auto px-4 my-24'>
       <h1 className='font-bold text-2xl text-center md:text-left '>Profile</h1>
       <div className='flex flex-col md:flex-row item-center md:items-start gap-8 my-5'>
        <div className='flex flex-col items-center '>
          <Avatar className="h-24 mb-2 w-24 md:h-32 md:w-32">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
        <div>
          <div className='mb-2'> 
            <h1 className='font-semibold text-gray-900 dark:text-gray-100'>
              Adeed khan
            </h1>
          </div>
          <div className='mb-2'> 
            <h1 className='font-semibold text-gray-900 dark:text-gray-100'>
              adeedkhan0786@gmail.com
            </h1>
          </div>
          <div className='mb-2'> 
            <h1 className='font-semibold text-gray-900 dark:text-gray-100'>
              INSTRUCTOR
            </h1>
          </div>
          <Dialog>
            <DialogTrigger asChild>
                <Button size={"sm"}>Edit profile</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  Edit Profile
                </DialogTitle>
                <DialogDescription>
                  Make changes to your profile here click save when youre done
                </DialogDescription>
              </DialogHeader>
              <div className='grid gap-4 py-4 '>
                  <div className='grid grid-cols-4 items-center'>
                    <Label className=''>Name :</Label>
                    <Input type='text' placeholder='adeedkhan' className='col-span-3'/>
                  </div>
                  <div className='grid grid-cols-4 items-center'>
                    <Label className=''>Avatar Image :</Label>
                    <Input type='file' accept='image/*' className='col-span-3'/>
                  </div>
                  <DialogFooter>
                    <Button disabled={isLoading}>{
                      isLoading ? (
                        <>
                        <Loader2 className='mr-2 h-4 w-4 animate-spin'/>
                        </>
                      ):
                      (
                        "Save Changes"
                      )
                      }</Button>
                  </DialogFooter>
              </div>
            </DialogContent>
          </Dialog>
        </div>
       </div>
       <div>
        <h1 className='font-medium text-lg'>Courses youre enrolled in </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5'>
                    {
                      enrolledCourses.length ===0? <h1>you are not enrolled in any course</h1>:(
                        enrolledCourses.map((course , index)=>(
                          <Course key={index}/>
                        ))
                      )
                    }
        </div>
       </div>
    </div>
  )
}

export default Profile