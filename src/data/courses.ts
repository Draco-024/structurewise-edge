
interface Lecture {
  id: number;
  title: string;
  duration: string;
  videoUrl: string;
}

export interface Course {
  id: number;
  title: string;
  instructor: string;
  image: string;
  price: string;
  duration: string;
  level: string;
  description: string;
  syllabus: string[];
  lectures: Lecture[];
  isPurchased?: boolean;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Advanced RCC Design",
    instructor: "Dr. Sarah Johnson",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    price: "₹15,999",
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
    lectures: [
      {
        id: 1,
        title: "Introduction to RCC Design",
        duration: "45 minutes",
        videoUrl: "https://example.com/video1",
      },
      {
        id: 2,
        title: "Complex Structure Analysis",
        duration: "60 minutes",
        videoUrl: "https://example.com/video2",
      },
    ],
    isPurchased: false,
  },
  {
    id: 2,
    title: "Steel Structure Analysis",
    instructor: "Prof. Michael Chen",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    price: "₹12,999",
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
    lectures: [
      {
        id: 1,
        title: "Steel Structures Basics",
        duration: "50 minutes",
        videoUrl: "https://example.com/video3",
      },
      {
        id: 2,
        title: "Load Analysis",
        duration: "55 minutes",
        videoUrl: "https://example.com/video4",
      },
    ],
    isPurchased: false,
  },
  {
    id: 3,
    title: "Bridge Engineering Fundamentals",
    instructor: "Eng. David Miller",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    price: "₹9,999",
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
    lectures: [
      {
        id: 1,
        title: "Bridge Types Overview",
        duration: "40 minutes",
        videoUrl: "https://example.com/video5",
      },
      {
        id: 2,
        title: "Load Distribution Basics",
        duration: "45 minutes",
        videoUrl: "https://example.com/video6",
      },
    ],
    isPurchased: false,
  },
];
