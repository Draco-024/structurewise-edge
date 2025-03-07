import { MainNav } from "@/components/MainNav";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, Award, BookOpen } from "lucide-react";
import { useParams } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Advanced RCC Design",
    instructor: "Dr. Sarah Johnson",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    price: "$199",
    duration: "8 weeks",
    level: "Advanced",
    description:
      "Master advanced concepts in reinforced concrete design with practical examples and industry best practices.",
    syllabus: [
      "Introduction to Advanced RCC",
      "Design of Complex Structures",
      "Seismic Considerations",
      "Advanced Foundation Design",
    ],
  },
  {
    id: 2,
    title: "Steel Structure Analysis",
    instructor: "Prof. Michael Chen",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    price: "$249",
    duration: "10 weeks",
    level: "Intermediate",
    description:
      "Learn the fundamentals of steel structure analysis and design, covering topics such as load calculations, stress analysis, and connection design.",
    syllabus: [
      "Introduction to Steel Structures",
      "Load Calculations and Combinations",
      "Stress Analysis Techniques",
      "Connection Design",
    ],
  },
  {
    id: 3,
    title: "Bridge Engineering Fundamentals",
    instructor: "Eng. David Miller",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    price: "$179",
    duration: "6 weeks",
    level: "Beginner",
    description:
      "Explore the basics of bridge engineering, including bridge types, load distribution, and structural components.",
    syllabus: [
      "Introduction to Bridge Engineering",
      "Bridge Types and Selection",
      "Load Distribution",
      "Structural Components",
    ],
  },
];

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === Number(id));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-[400px] object-cover rounded-lg mb-8"
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
              <h2 className="text-2xl font-bold mb-4">What you'll learn</h2>
              <ul className="space-y-2">
                {course.syllabus.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <Card className="p-6 sticky top-24">
              <div className="text-3xl font-bold mb-6">{course.price}</div>
              <Button className="w-full mb-4">Enroll Now</Button>
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
