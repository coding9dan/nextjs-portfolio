import Navbar from "@/components/Navbar";
import SocialButton from "@/components/SocialButton";
import LinkedIn from "../public/linkedin.svg";
import ProjectPreview from "@/components/ProjectPreview";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar page="home" />

      <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-4">
        <div className="h-[30rem] rounded-3xl p-10 flex flex-col gap-16 bg-[url('/gradient-bg.jpg')] bg-cover">
          <h1 className="text-3xl font-semibold">
            Hi, I am Michael, I have been working as a software engineer for the
            past 15 years, and primarily focusing on front-end web development
            for the past 10 years.
          </h1>
          <p className="flex-1">
            I have experience with technologies like HTML, CSS, vanilla
            JavaScript es6, and web applications using ReactJS, TypeScript,
            Redux, and Redux tool kit as well as backend technologies like
            Python throughout my career, I have worked on various projects,
            including e-commerce platforms and content management systems.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-4 justify-self-end">
            <button className="bg-black text-white font-medium py-3 px-12 rounded-full w-60 lg:w-auto pointer-events-none">
              Contact me
            </button>
            <div className="flex items-center gap-4">
              <Link
                href="https://www.linkedin.com/in/codeinlife/"
                target="_blank"
              >
                <SocialButton bgColor="linkedin">
                  <LinkedIn className="w-5 h-5" />
                </SocialButton>
              </Link>
            </div>
          </div>
        </div>
        <div className="h-[30-rem] rounded-3xl p-8 bg-[url('/profile.gif')] bg-cover bg-center" />
      </section>

      <section className="grid grid-colos-1 lg:grid-cols-2 gap-4 my-4">
        <ProjectPreview
          name="Weather App"
          description="Getting weather data through an API based on the location"
          imageUrl="/weather.png"
          bgColor="#685ccd"
          link="/weather"
          dark
        />
        <ProjectPreview
          name="JavaScript Game"
          description="Trying to get remove of all the bugs so you can save the carrots"
          imageUrl="/game.png"
          link="/game"
          dark
        />
      </section>

      <Footer />
    </>
  );
}
