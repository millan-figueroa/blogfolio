const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: "AI Summarization Tool",
      tags: ["AWS", "React", "Cloudflare"],
      description:
        "A tool that summarizes long articles into short paragraphs using AI.",
      fullDescription:
        "This project uses AWS Lambda functions to process text data and return a summarized version of the content. The front-end is built with React and hosted on Cloudflare Pages.",
      image: "/summarization.png",
      techStack: ["React", "AWS", "Cloudflare", "TailwindCSS", "NodeJS"],
    },
    {
      id: 2,
      title: "Form Builder Tool",
      tags: ["NextJS", "React", "TailwindCSS", "Prisma"],
      description: "A tool that allows users to create custom forms.",
      fullDescription:
        "This project uses NextJS and React to build the front-end. Prisma is used to manage the database schema.",
      image: "/form.png",
      techStack: [
        "NextJS",
        "React",
        "Prisma",
        "TailwindCSS",
        "NodeJS",
        "Stripe API",
      ],
    },
    {
      id: 3,
      title: "Feedback Platform",
      tags: ["TS", "Postgres", "DrizzleORM"],
      description: "A platform for collecting feedback from users.",
      fullDescription:
        "This project uses TypeScript and Postgres to store user feedback. DrizzleORM is used to manage the database schema.",
      image: "/feedback.png",
      techStack: [
        "TypeScript",
        "Postgres",
        "DrizzleORM",
        "TailwindCSS",
        "NodeJS",
        "Stripe API",
      ],
    },
  ];

  return (
    <section id="projects" className="px-4 py-32 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-primary-500/50 transition-colors hover:shadow-sm text-left"
          >
            {project.title}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
