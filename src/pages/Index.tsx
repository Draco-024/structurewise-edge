
import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/MainNav";
import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";

const featuredCourses = [
  {
    id: 1,
    title: "Advanced RCC Design",
    instructor: "Dr. Sarah Johnson",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    price: "$199",
    duration: "8 weeks",
  },
  {
    id: 2,
    title: "Steel Structure Analysis",
    instructor: "Prof. Michael Chen",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    price: "$249",
    duration: "10 weeks",
  },
  {
    id: 3,
    title: "Bridge Engineering Fundamentals",
    instructor: "Eng. David Miller",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    price: "$179",
    duration: "6 weeks",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 md:pt-24 lg:pt-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Master Structural Engineering
                <br className="hidden sm:inline" />
                <span className="text-primary"> with StructoEdge</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Learn from industry experts and advance your career with our professional certification courses.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg" className="animate-fade-up">
                <Link to="/courses">
                  Explore Courses <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="p-6 glass-card hover-scale">
              <BookOpen className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert-led Courses</h3>
              <p className="text-gray-500">Learn from industry professionals with years of experience.</p>
            </Card>
            <Card className="p-6 glass-card hover-scale">
              <Clock className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Learn at Your Pace</h3>
              <p className="text-gray-500">Access course content anytime, anywhere, at your convenience.</p>
            </Card>
            <Card className="p-6 glass-card hover-scale">
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Get Certified</h3>
              <p className="text-gray-500">Earn recognized certificates upon course completion.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Courses</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {featuredCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover-scale">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-gray-500 mb-4">{course.instructor}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold">{course.price}</span>
                    <span className="text-gray-500">{course.duration}</span>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    Learn More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
