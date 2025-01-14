"use client";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

export default function Example() {
    return (
        <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation />
            <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
                <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
                            <p className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent">
                                I'm Hamayoun Bhatti, a passionate Web Developer. With 2 Years Of experience in this field, I'm driven by a relentless pursuit of excellence. I thrive on challenges and am inspired by the potential to solve problems, innovate, and create meaningful solutions, and my work reflects my dedication to contribute to sustainable design solutions that benefit society. Explore my portfolio to see how I bring creativity and expertise to every project. Let's connect and collaborate to make great things happen!
                            </p>
                </div>
            </div>
        </div>
    );
}
