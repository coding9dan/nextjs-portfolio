import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next/types";
import React from "react";

export const metadata: Metadata = {
  title: "Code in Life | About",
  description: "About page",
};

const about = () => {
  return (
    <>
      <Navbar page="about" />

      <section className="grid grid-cols-1 lg:grid-cols-1 gap-4 mb-4">
        <div className="h-screen rounded-3xl p-10 flex flex-col gap-16 bg-[url('/gradient-bg.jpg')] bg-cover">
          <h1 className="text-3xl font-semibold">
            Hi, I am Michael, I have been working as a software engineer for the
            past 15 years, and primarily focusing on front-end web development
            for the past 10 years.
          </h1>
          <p className="">
            I have experience with technologies like HTML, CSS, vanilla
            JavaScript es6, and web applications using ReactJS, TypeScript,
            Redux, and Redux tool kit as well as backend technologies like
            Python throughout my career, I have worked on various projects,
            including e-commerce platforms and content management systems.
          </p>
          <p className="">
            I was working at Health Gorilla which is providing secure solutions
            for healthcare data as a front-end engineer. I worked closely with
            product managers, QA team, and backend team as well. My tech stack
            was Typescript, React, Redux, webpack, and Git. And I implemented
            for the client dashboard V2 based on the Module Federation which was
            I implemented as well.
          </p>
          <p className="">
            My previous role was as a front-end engineer at iHerb which is an
            e-commerce business for healthcare products. I was working on the
            checkout team and I worked closely with UI and QA teams. We were
            using React, Redux, Typescript, and Next.js for the desktop and
            mobile web applications. And also deployed a new version of
            applications to data centers using the Jenkins CI/CD process.
          </p>
          <p className="">
            And prior to iHerb, I worked as a Sr. front-end engineer at
            Paciolan. I was working on the web-dev team. I worked closely with
            the e-commerce specialist and QA team. We were using vanilla
            JavaScript, jQuery, React, and especially I was using Python, and
            node.js to develop a custom continuous integration for the Git flow
            for the team.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default about;
