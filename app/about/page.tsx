"use client";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

export default function Example() {
	return (
    <div className="relative pb-16">
    <Navigation />
    <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
      <div className="mx-auto lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          About Me
        </h2>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6">
  {/* Image Section */}
  <img
    src="/hamayoun_about.png"
    alt="Hamayoun Bhatti"
    className="w-[520px] h-[650px] rounded-full shadow-lg"
  />

  {/* Content Section */}
  <div className="flex flex-col justify-between w-full">
    {/* Description Section */}
    <div className="lg:w-2/3 text-zinc-400 space-y-4 ml-8">
      <p>
        I'm Hamayoun Bhatti, a passionate Web Developer with 3+ years of experience in the field. I specialize as a Laravel Developer and Next.js Developer, combining back-end and front-end expertise to create dynamic, efficient, and user-friendly web solutions.
      </p>
      <p>
        Driven by a relentless pursuit of excellence, I thrive on challenges and am inspired by the potential to solve problems, innovate, and create meaningful solutions. I'm constantly learning and exploring new technologies to stay at the forefront of web development.
      </p>
      <p>
        My work reflects my dedication to sustainable design solutions that benefit society. Explore my portfolio to see how I bring creativity and expertise to every project. Let's connect and collaborate to make great things happen!
      </p>
    </div>

    {/* Personal Details Section */}
    <div className="lg:w-1/3 text-zinc-400 space-y-2">
      <h2 className="text-lg font-semibold text-zinc-300 mb-4 mt-4 ml-8">Personal Details</h2>
      <ul className="ml-8">
        <li><strong>Name:</strong> Hamayoun Bhatti</li>
        <li><strong>Date of Birth:</strong> May 10, 1998</li>
        <li><strong>Address:</strong> Township Lahore</li>
        <li><strong>Zip Code:</strong> 54000</li>
        <li>
          <strong>Email:</strong>  
          <a href="mailto:hamayounzaheer786@gmail.com" className="text-blue-400 hover:underline">
            hamayounzaheer786@gmail.com
          </a>
        </li>
        <li>
          <strong>Phone:</strong> 
          <a href="tel:+923394111529" className="text-blue-400 hover:underline">
            +92-339-4111529
          </a>
        </li>
      </ul>
       {/* Download CV Button */}
  <div className="ml-8 mt-4">
    <a
      href="/Hamayoun_bhatti.pdf"
      download
      className="inline-block px-6 py-2 mt-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition"
    >
      Download CV
    </a>
  </div>
    </div>
  </div>
</div>
</div>
      <div className="w-full h-px bg-zinc-800" />
    </div>
  </div>
  	);
}
