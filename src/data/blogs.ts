export type Blog = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[]; // paragraphs or HTML-safe strings
  image: string;
  toc?: string[];
  featured?: boolean;
  date: string; // ISO
  readTime?: string;
  tags?: string[];
  author?: {
    name: string;
    role?: string;
    bio?: string;
    avatar?: string;
    linkedin?: string;
    experience?: string;
  };
};

export const blogs: Blog[] = [
  {
    slug: "mastering-chatgpt-blog-creation",
    title:
      "Mastering ChatGPT Blog Creation: Dos and Don'ts for SaaS Marketing Managers",
    excerpt:
      "Even though it was made by AI, no detection tools could tell. The only thing used was OpenAI's Chat API, no other external tools.",
    content: [
      "Even though it was made by AI, no detection tools could tell...",
      "It's a new chapter in how we create and share information.",
    ],
    image: "/home/blog.png",
    featured: true,
    date: "2024-07-22",
    readTime: "4 min",
    tags: ["AI", "Content", "ChatGPT"],
    author: {
      name: "Jane Doe",
      role: "Content Lead",
      avatar: "/home/blog.png",
      linkedin: "https://linkedin.com/in/janedoe",
      experience: "8 years",
    },
  },
  {
    slug: "ai-in-marketing-trends",
    title: "AI in Marketing: Trends to Watch",
    excerpt: "A quick look at how AI is shaping modern marketing.",
    content: ["Paragraph 1", "Paragraph 2"],
    image: "/home/blog.png",
    featured: false,
    date: "2024-06-10",
    readTime: "6 min",
    tags: ["AI", "Marketing"],
    author: {
      name: "John Smith",
      role: "Growth",
      avatar: "/home/blog.png",
      linkedin: "https://linkedin.com/in/johnsmith",
      experience: "6 years",
    },
  },
  // add more sample blogs as needed
];

export default blogs;
