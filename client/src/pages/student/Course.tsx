import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function Course() {
  return (
    <Card className="overflow-hidden rounded-lg dark:bg-gray-800 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-200">
      <div className="relative">
        <img
          src="https://tse2.mm.bing.net/th/id/OIP.6oQcqcOumdw_WndFkhrqfAHaEK?pid=Api&P=0&h=180"
          alt="Course Image"
          className="w-full h-36 object-cover rounded-t-lg "
        />
      </div>
      <CardContent className="overflow-hidden min-w-0 mt-2">
        <h1 className="hover:underline font-bold text-lg truncate">
          Next complete hindi
        </h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 ">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 className="font-medium text-sm">Adeed Khan</h1>
          </div>
          <Badge>Advance</Badge>
        </div>
        <div>
          <span className="text-lg">$ 499</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default Course;
