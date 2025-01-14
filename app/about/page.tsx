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
      <div className="max-w-2xl mx-auto lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          About
        </h2>
        <p className="mt-4 text-zinc-400">
        I'm Hamayoun Bhatti, a passionate Web Developer. With 2 Years Of experience in this field, I'm driven by a relentless pursuit of excellence. I thrive on challenges and am inspired by the potential to solve problems, innovate, and create meaningful solutions, and my work reflects my dedication to contribute to sustainable design solutions that benefit society. Explore my portfolio to see how I bring creativity and expertise to every project. Let's connect and collaborate to make great things happen!
        </p>
      </div>
      <div className="w-full h-px bg-zinc-800" />
    </div>
  </div>
  	);
}
