
import { MainNav } from "@/components/MainNav";
import { Card } from "@/components/ui/card";
import { BookOpen, Award, Clock, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">About StructoEdge</h1>
          <p className="text-xl text-gray-600">
            Empowering structural engineers with premium online education and
            professional certification courses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="text-gray-600">
              StructoEdge is dedicated to providing high-quality education in
              structural engineering through expert-led courses, hands-on projects,
              and industry-recognized certifications.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Our Vision</h2>
            <p className="text-gray-600">
              To become the leading online platform for structural engineering
              education, fostering a community of skilled professionals ready to
              tackle modern construction challenges.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 text-center hover-scale">
            <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Expert-Led Courses</h3>
            <p className="text-gray-500">
              Learn from industry professionals with years of experience.
            </p>
          </Card>
          <Card className="p-6 text-center hover-scale">
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Certification</h3>
            <p className="text-gray-500">
              Earn industry-recognized certificates upon completion.
            </p>
          </Card>
          <Card className="p-6 text-center hover-scale">
            <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Flexible Learning</h3>
            <p className="text-gray-500">
              Study at your own pace with lifetime access.
            </p>
          </Card>
          <Card className="p-6 text-center hover-scale">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Community</h3>
            <p className="text-gray-500">
              Join a network of structural engineering professionals.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
