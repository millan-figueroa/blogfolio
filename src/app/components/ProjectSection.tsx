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
    {
      id: 4,
      title: "Tenzies Game",
      tags: ["TS", "Postgres", "DrizzleORM"],
      description:
        "A fun dice game where players try to roll all dice to the same number.",
      fullDescription:
        "This project is a simple dice game built with TypeScript and Postgres. Players roll dice and try to get all dice to show the same number. The game logic is implemented in NodeJS, and the front-end uses TailwindCSS for styling.",
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
    {
      id: 5,
      title: "Portfolio Website",
      tags: ["NextJS", "React", "TailwindCSS"],
      description: "A personal portfolio website to showcase projects.",
      fullDescription:
        "This project is built with NextJS and React, using TailwindCSS for styling. It includes sections for projects, blog posts, and contact information.",
      image: "/portfolio.png",
      techStack: ["NextJS", "React", "TailwindCSS", "NodeJS"],
    },
    {
      id: 6,
      title: "Recipe App",
      tags: ["NextJS", "React", "TailwindCSS"],
      description: "A web application to search and save recipes.",
      fullDescription:
        "This project allows users to search for recipes, save their favorites, and share them with others. Built with NextJS and React, it uses TailwindCSS for styling.",
      image: "/portfolio.png",
      techStack: ["NextJS", "React", "TailwindCSS", "NodeJS"],
    },
  ];

  return (
    <section id="projects" className="px-4 py-32 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project, index) => (
          // Project card component
          <div
            key={index}
            className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-white transition-colors hover:shadow-sm text-left"
          >
            <h3 className="py-3">{project.title}</h3>
            <div className="flex flex-wrap gap-1 mt-auto">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-0.5 text-xs rounded-full bg-[var(--primary-dark)] text-[var(--primary-light)] border border-[var(--primary)] "
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
