
import { useState } from "react";
import { MainNav } from "@/components/MainNav";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, Award } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Advanced RCC Design",
    instructor: "Dr. Sarah Johnson",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    price: "$199",
    duration: "8 weeks",
    level: "Advanced",
  },
  {
    id: 2,
    title: "Steel Structure Analysis",
    instructor: "Prof. Michael Chen",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    price: "$249",
    duration: "10 weeks",
    level: "Intermediate",
  },
  {
    id: 3,
    title: "Bridge Engineering Fundamentals",
    instructor: "Eng. David Miller",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    price: "$179",
    duration: "6 weeks",
    level: "Beginner",
  },
];

const Courses = () => {
  const [sortBy, setSortBy] = useState("title");
  const [searchQuery, setSearchQuery] = useState("");

  const sortedCourses = [...courses].sort((a, b) => {
    if (sortBy === "price") {
      return parseInt(a.price.slice(1)) - parseInt(b.price.slice(1));
    }
    return a[sortBy].localeCompare(b[sortBy]);
  });

  const filteredCourses = sortedCourses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold">All Courses</h1>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Search courses..."
              className="px-4 py-2 border rounded-md"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="title">Name</SelectItem>
                <SelectItem value="price">Price</SelectItem>
                <SelectItem value="level">Level</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover-scale">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-gray-500 mb-4">{course.instructor}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    {course.level}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold">{course.price}</span>
                  <Button asChild>
                    <a href={`/courses/${course.id}`}>Learn More</a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
