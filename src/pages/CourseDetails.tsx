
import { MainNav } from "@/components/MainNav";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, Award, BookOpen, IndianRupee, Play } from "lucide-react";
import { useParams } from "react-router-dom";
import { courses } from "@/data/courses";
import { useToast } from "@/hooks/use-toast";

const CourseDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const course = courses.find((c) => c.id === Number(id));

  if (!course) {
    return <div>Course not found</div>;
  }

  const handlePurchase = () => {
    // Handle purchase logic here
    toast({
      title: "Course purchased",
      description: "You now have access to all lectures",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-[400px] object-cover rounded-xl mb-8"
            />
            <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                {course.duration}
              </span>
              <span className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                {course.level}
              </span>
            </div>
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mb-4">About this course</h2>
              <p className="text-gray-600 mb-6">{course.description}</p>
              
              {course.isPurchased ? (
                <>
                  <h2 className="text-2xl font-bold mb-4">Course Lectures</h2>
                  <div className="space-y-4">
                    {course.lectures.map((lecture) => (
                      <Card key={lecture.id} className="p-4 hover:shadow-lg transition-shadow rounded-xl">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Play className="h-5 w-5 text-primary" />
                            <div>
                              <h3 className="font-semibold">{lecture.title}</h3>
                              <p className="text-sm text-gray-500">{lecture.duration}</p>
                            </div>
                          </div>
                          <Button variant="outline" className="rounded-xl">
                            Watch
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-4">What you'll learn</h2>
                  <ul className="space-y-2">
                    {course.syllabus.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
          <div>
            <Card className="p-6 sticky top-24 rounded-xl">
              <div className="text-3xl font-bold mb-6 flex items-center">
                <IndianRupee className="h-6 w-6" />
                {course.price}
              </div>
              <Button 
                className="w-full mb-4 rounded-xl" 
                onClick={handlePurchase}
                disabled={course.isPurchased}
              >
                {course.isPurchased ? "Enrolled" : "Enroll Now"}
              </Button>
              <div className="text-sm text-gray-500">
                <p>✓ Full lifetime access</p>
                <p>✓ Certificate of completion</p>
                <p>✓ Premium support</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
