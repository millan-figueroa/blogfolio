import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (
    <div className="container mx-auto p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="relative">
        <div className="opacity-10">
          <div className="absolute top-0 right-0 sm:w-[600px] sm:h-[600px] w-[300px] h-[300px] bg-[var(--primary-dark)]/50 rounded-full blur-3xl"></div>
          <div className="absolute top-4 right-4 sm:w-[400px] sm:h-[400px] w-[150px] h-[150px] bg-[var(--primary)]/60 rounded-full blur-2xl"></div>
          <div className="absolute top-8 right-8 sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] bg-[var(--primary-light)]/70 rounded-full blur-xl"></div>
        </div>
        <h1 className="text-4xl font-bold tracking-light">
          Software Engineer and{" "}
          <span className="block text-[var(--primary)]">UI/UX Designer</span>
        </h1>
        <p className="mt-6 text-xl text-gray-300 leading-8">
          Lorem ipsum dolor sit amet consectetur adipiscing elit | Dolor sit
          ametconsectetur adipiscing elit quisque faucibus.
        </p>
        <div className="flex mt-10 gap-4">
          <button className="px-8 py-3 rounded-lg bg-[var(--primary)] text-white font-medium hover:bg-[var(--primary)]">
            About Me
          </button>
          <button className="px-8 py-3 rounded-lg border border-gray-600  font-medium hover:bg-[var(--primary)]">
            Contact Me
          </button>
        </div>
      </div>
      <ProjectSection />
    </div>
  );
}
