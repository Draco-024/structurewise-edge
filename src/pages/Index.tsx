
import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/MainNav";
import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen, Clock, Award, Check } from "lucide-react";
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
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="flex flex-col space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-primary">
                <Award className="h-4 w-4" />
                Professional Certification
              </span>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Master Structural Engineering
                <span className="text-primary block mt-2">with StructoEdge</span>
              </h1>
              <p className="text-gray-500 md:text-xl max-w-[600px]">
                Learn from industry experts and advance your career with our professional certification courses. Get certified and stay ahead in the field.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="animate-fade-up" asChild>
                  <Link to="/courses">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  View Courses
                </Button>
              </div>
              <div className="flex gap-8 items-center">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-sm text-gray-600">Expert-led</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-sm text-gray-600">Self-paced</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-sm text-gray-600">Certified</span>
                </div>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-lg blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952"
                alt="Engineering students"
                className="relative rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose StructoEdge?</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="p-6 hover:shadow-lg transition-shadow glass-card hover-scale">
              <BookOpen className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert-led Courses</h3>
              <p className="text-gray-500">Learn directly from industry professionals with years of real-world experience.</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow glass-card hover-scale">
              <Clock className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Learn at Your Pace</h3>
              <p className="text-gray-500">Access course content anytime, anywhere, and learn at your own convenience.</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow glass-card hover-scale">
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Get Certified</h3>
              <p className="text-gray-500">Earn industry-recognized certificates to showcase your expertise.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Courses</h2>
            <Button variant="outline" asChild>
              <Link to="/courses">View All Courses</Link>
            </Button>
          </div>
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
