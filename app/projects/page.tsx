import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Chatbot from "../components/Chatbot";

export const revalidate = 60;

const projects = [
  {
    slug: "jobskills",
    title: "Jobskills",
    description: "The website JobSkills focuses on connecting job seekers with potential employers in Saudi Arabia. It offers services for both job seekers and employers, including a variety of job listings, employer packages, and resources for recruitment. The site also features sections about its mission, vision, and values, and provides a platform for registering as either a job seeker or employer. Additionally, there are blog posts, news updates, and announcements related to the job market.",
    date: "2024-03-01",
    image: "/jobskills.png",
    technologies: ["PHP", "Laravel", "CSS", "Bootstrap", "Javascript", "jQuery", "MySql"],
  },
  {
    slug: "my_portfolio",
    title: "My Portfolio",
    description: "Hamayoun Bhatti's portfolio highlights his expertise as a Junior Software Engineer specializing in Laravel, showcasing projects, professional experience, and personal interests in an engaging, user-friendly design.",
    date: "2024-02-10",
    image: "/my-portfolio.png",
    technologies: ["PHP", "Laravel", "CSS", "Bootstrap", "Javascript", "jQuery"],
  },
  {
    slug: "claim_utility",
    title: "Urbansole Claim Utility",
    description: "A Laravel-based claim management system designed for UrbanSole to streamline the shoe claim process. Shops can create claims, which are reviewed by QA to determine if they are claimable, repairable, or rejected. Approved claims are forwarded to the respective distribution centers for processing. The system features complete CRUD operations, role-based access control, claim settlement reports, and a structured workflow for efficient tracking. Built with Laravel and JavaScript, it ensures seamless claim handling from start to finish.",
    date: "2025-01-21",
    image: "/urbansole-claim-utility.png",
    technologies: ["PHP", "Laravel", "CSS", "Bootstrap", "Javascript", "jQuery"],
  },
    {
    slug: "asaan_fbr",
    title: "Asaan FBR",
    description: "Asaan FBR – A PRAL-integrated digital invoicing platform for businesses in Pakistan, built to comply with FBR e-invoicing regulations. I contributed to the frontend development, focusing on creating a user-friendly interface, smooth navigation, and responsive layouts for real-time invoice tracking and compliance management.",
    date: "2025-07-24",
    image: "/asaan_fbr.png",
    technologies: ["HTML","CSS","Javascript"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          {projects.map((project) => (
            <Card key={project.slug}>
              <Link href={`/projects/${project.slug}`}>
                <article className="relative w-full h-full p-4 md:p-8">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="flex items-center justify-between gap-2 mt-4">
                    <div className="text-xs text-zinc-100">
                      {project.date ? (
                        <time dateTime={new Date(project.date).toISOString()}>
                          {Intl.DateTimeFormat(undefined, {
                            dateStyle: "medium",
                          }).format(new Date(project.date))}
                        </time>
                      ) : (
                        <span>SOON</span>
                      )}
                    </div>
                  </div>

                  <h2
                    id="featured-post"
                    className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                  >
                    {project.title}
                  </h2>
                  <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                    {project.description}
                  </p>
                  <div className="mt-4">
                    <h3 className="text-sm font-semibold text-zinc-200">
                      Technologies:
                    </h3>
                    <ul className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech) => (
                        <li
                          key={tech}
                          className="px-2 py-1 text-xs text-zinc-800 bg-zinc-200 rounded-lg"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Link>
            </Card>
          ))}
        </div>
      </div>
      <Chatbot />
    </div>
  );
}
