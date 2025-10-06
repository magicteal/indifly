export type TeamMember = {
  name: string;
  role: string;
  imageUrl: string;
};

export type TeamGroup = {
  title: string;
  members: TeamMember[];
};

export const teamGroups: TeamGroup[] = [
  {
    title: "Promoters & Directors",
    members: [
      {
        name: "A. Sharma",
        role: "Promoter & Director",
        imageUrl: "/members/Abhinath-Shinde.png",
      },
      { name: "B. Verma", role: "Director", imageUrl: "/home/silhoutte.svg" },
    ],
  },
  {
    title: "Founding Team Member",
    members: [
      {
        name: "C. Gupta",
        role: "Founding Engineer",
        imageUrl: "/home/silhoutte.svg",
      },
      {
        name: "D. Patel",
        role: "Founding Designer",
        imageUrl: "/home/silhoutte.svg",
      },
      {
        name: "E. Rao",
        role: "Founding Product",
        imageUrl: "/home/silhoutte.svg",
      },
    ],
  },
  {
    title: "Key Managerial Personnel",
    members: [
      {
        name: "F. Iyer",
        role: "Operations Lead",
        imageUrl: "/home/silhoutte.svg",
      },
      { name: "G. Das", role: "Finance Lead", imageUrl: "/home/silhoutte.svg" },
      {
        name: "H. Khan",
        role: "Marketing Lead",
        imageUrl: "/home/silhoutte.svg",
      },
      { name: "I. Roy", role: "HR Lead", imageUrl: "/home/silhoutte.svg" },
    ],
  },
];
