import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <h1 className="text-4xl font-bold tracking-light">
          Software Engineer and{" "}
          <span className="block text-purple-400">UI/UX Designer</span>
        </h1>
        <p className="mt-6 text-xl text-gray-700 leading-8">
          Lorem ipsum dolor sit amet consectetur adipiscing elit | Dolor sit
          ametconsectetur adipiscing elit quisque faucibus.
        </p>
        <div className="flex mt-10 gap-4">
          <button className="px-8 py-3 rounded-lg bg-purple-500 text-white font-medium hover:bg-purple-500">
            About Me
          </button>
          <button className="px-8 py-3 rounded-lg border border-gray-600  font-medium hover:bg-purple-500">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}
