
import { MainNav } from "@/components/MainNav";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";
import { useParams } from "react-router-dom";
import { courses } from "@/data/courses";

const EnrolledCourse = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === Number(id));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">{course.title}</h1>
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
      </div>
    </div>
  );
};

export default EnrolledCourse;
