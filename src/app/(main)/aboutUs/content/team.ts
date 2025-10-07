export type TeamMember = {
  name: string;
  role: string;
  imageUrl: string;
  linkedin?: string; // LinkedIn profile URL to be added by content editors
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
        name: "Abhinath Shinde",
        role: "Co-Founder & Director",
        imageUrl: "/members/promotersAndDirectors/Abhinath-Shinde.png",
        linkedin: "https://www.linkedin.com/in/abhinath-shinde-0990aa178/",
      },
      {
        name: "Smita Vishvjeet Thombare",
        role: "Co-Founder & Director",
        imageUrl: "/members/promotersAndDirectors/Smita-Vishvjeet-Thombare.png",
        linkedin: "https://www.linkedin.com/in/smita-thombre-a57489348/",
      },
      {
        name: "Vishvjeet Thombre",
        role: "Co-Founder & CEO",
        imageUrl: "/members/promotersAndDirectors/Vishvjeet-Thombre.png",
        linkedin: "https://www.linkedin.com/in/vishvjeetthombre/",
      },
    ],
  },
  {
    title: "Founding Team Member",
    members: [
      {
        name: "Shankar Shahu Bhore",
        role: "Executive Director & CEO",
        imageUrl: "/members/founding/Shankar-Shahu-Bhore.png",
        linkedin: "https://www.linkedin.com/in/shankar-bhore-514181263/",
      },
      {
        name: "Amit Tiwari",
        role: "Executive Director",
        imageUrl: "/members/founding/Amit-Tiwari.png",
        linkedin: "",
      },
      {
        name: "Amar Kurund",
        role: "Executive Director",
        imageUrl: "/members/founding/Amar-Kurund.png",
        linkedin: "https://www.linkedin.com/in/amar-kurund-aaba37249/",
      },
      {
        name: "Ajit Dhapate",
        role: "Executive Director",
        imageUrl: "/members/founding/Ajit-dhapate.png",
        linkedin: "https://www.linkedin.com/in/ajit-dhapate-38543478/",
      },
    ],
  },
  {
    title: "Key Managerial Personnel",
    members: [
      {
        name: "Sagayanathan Amalanathan",
        role: "Group CTO",
        imageUrl: "/members/keyManagerial/Sagayanathan-Amalanathan.png",
        linkedin: "https://www.linkedin.com/in/sag0612/",
      },
      {
        name: "Afsa Chorwadwala",
        role: "Group CMO",
        imageUrl: "/members/keyManagerial/Afsa-Chorwadwala.png",
        linkedin: "https://www.linkedin.com/in/afsa-chorwadwala/",
      },
      {
        name: "Bharati Sonar",
        role: "Group CHRO",
        imageUrl: "/members/keyManagerial/Bharati-Sonar.png",
        linkedin: "https://www.linkedin.com/in/bharati-sonar-507722a0/",
      },
      {
        name: "Sakshi Chindak",
        role: "Group Company Secretary",
        imageUrl: "/members/keyManagerial/Sakshi-Chindak.png",
        linkedin: "https://www.linkedin.com/in/cs-sakshi-chindak-428a83203/",
      },
    ],
  },
];
