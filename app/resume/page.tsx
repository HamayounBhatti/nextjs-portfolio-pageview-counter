import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

export default function ResumePage() {
  return (
        <div className="relative pb-16">
          <Navigation />
     <main className="bg-black text-white min-h-screen px-6 py-12 font-sans mt-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 flex flex-col sm:flex-row sm:justify-between gap-6">
          <div className="flex-1">
            <h1 className="text-3xl font-bold mt-4">Muhammad Hamayoun Zaheer Bhatti</h1>
            <p className="text-sm text-gray-300 mt-4">Software Engineer</p>
            <p className="mt-4">House#529-2-D1, Township, Lahore, Pakistan</p>
            <p className="mt-4 mb-4">📞 0307-7529404 | 📧 hamayounzaheer786@gmail.com</p>
            <a
              href="https://hamayounbhatti.vercel.app"
              className="text-white underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio : https://hamayounbhatti.vercel.app
            </a>
        <h2 className="text-xl font-semibold border-b border-gray-700 pb-1 mb-2 mt-4">Profile</h2>
          <p>
            I'm Hamayoun Bhatti, a passionate Web Developer with 3+ years of experience. I specialize in Laravel and Next.js,
            combining back-end and front-end skills to build dynamic, efficient, and user-friendly solutions.
          </p>
          <p className="mt-2">
            I thrive on challenges and constantly explore new technologies. My goal is to create meaningful digital solutions
            that are both functional and impactful.
          </p>
          </div>
          <div className="shrink-0">
            <img
              src="/hamayoun_resume.PNG"
              alt="Hamayoun Bhatti"
              className="w-[300px] h-[400px] object-cover object-top rounded-t-none rounded-b-full shadow-lg mx-auto sm:mx-0"
            />
          </div>
        </header>

        <section className="mb-6">

        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b border-gray-700 pb-1 mb-2">Skills</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            {[
              "HTML", "CSS", "Bootstrap", "JavaScript", "Laravel", "MySQL",
              "PHP", "REST APIs", "Next.js", "Tailwind CSS", "TypeScript", "GitHub"
            ].map(skill => (
              <span key={skill} className="bg-gray-800 px-3 py-1 rounded">{skill}</span>
            ))}
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b border-gray-700 pb-1 mb-2">Employment History</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <strong>Software Engineer / Team Lead</strong><br />
              Xconsol, Lahore — <em>Dec 2024 – Jul 2025</em>
            </li>
            <li>
              <strong>Laravel Developer</strong><br />
              BF-Tech, Lahore — <em>Dec 2021 – Apr 2024</em>
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b border-gray-700 pb-1 mb-2">Internships</h2>
          <p><strong>Laravel Intern</strong> — BF-Tech, Lahore (Jan 2021 – Nov 2021)</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b border-gray-700 pb-1 mb-2">Education</h2>
          <ul className="text-sm">
            <li><strong>BSCS</strong> — Central Institute of Management Sciences (GCUF Affiliated), Lahore (2017 – 2021)</li>
            <li><strong>ICS</strong> — Concordia College, Lahore (2015 – 2017)</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b border-gray-700 pb-1 mb-2">Projects</h2>
          <ul className="list-disc pl-5 text-sm space-y-2">
            <li><strong>Medicine Donation System</strong> — Laravel 8, HTML, CSS, Bootstrap, JS</li>
            <li><strong>Tollplaza</strong> — PHP, HTML, CSS, Bootstrap, JS</li>
            <li><strong>Blood Donation System</strong> — PHP, HTML, CSS, Bootstrap</li>
            <li><strong>Jobskills (Beyond Future Tech)</strong> — <a href="https://www.jobskills.sa" className="text-blue-400 underline">jobskills.sa</a></li>
            <li><strong>My Portfolio</strong> — Node.js, Next.js, TypeScript — <a href="https://hamayounbhatti.vercel.app" className="text-blue-400 underline">View</a></li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b border-gray-700 pb-1 mb-2">Languages</h2>
          <ul className="text-sm">
            <li>Urdu — Native speaker</li>
            <li>English — Working knowledge</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b border-gray-700 pb-1 mb-2">Personal Details</h2>
          <ul className="text-sm">
            <li><strong>Nationality:</strong> Pakistani</li>
            <li><strong>Date of Birth:</strong> 10 May 1998</li>
            <li><strong>Place of Birth:</strong> Lahore</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold border-b border-gray-700 pb-1 mb-2">Hobbies</h2>
          <p className="text-sm">Computing, Surfing, Reading</p>
        </section>

        <div className="mt-10 ml-[350px]">
          <a
            href="/resume/Hamayoun_bhatti.pdf"
            download
            className="inline-block px-4 py-2 bg-white hover:bg-zinc-700 hover:text-white text-black rounded"
          >
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </main>
    </div>
  );
}
