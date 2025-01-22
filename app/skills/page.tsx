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
                    Skills & Technologies
                </h2>
                <div className="flex flex-col items-center justify-center min-h-screen space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6">
                    {/* Image Section */}
                    <img
                        src="/hamayoun_skills.PNG"
                        alt="Hamayoun Bhatti"
                        className="w-[520px] h-[650px] rounded-full shadow-lg"
                    />

                    {/* Skills Section */}
                    <div className="flex flex-wrap justify-center w-full space-y-4  lg:space-x-4">
                        <div className="p-6 bg-zinc-800 rounded-lg shadow-lg w-[200px] text-center mt-4 ml-3">
                            <h3 className="text-lg font-semibold text-zinc-100">Laravel</h3>
                        </div>
                        <div className="p-6 bg-zinc-800 rounded-lg shadow-lg w-[200px] text-center">
                            <h3 className="text-lg font-semibold text-zinc-100">Next.js</h3>
                        </div>
                        <div className="p-6 bg-zinc-800 rounded-lg shadow-lg w-[200px] text-center">
                            <h3 className="text-lg font-semibold text-zinc-100">JavaScript</h3>
                        </div>
                        <div className="p-6 bg-zinc-800 rounded-lg shadow-lg w-[200px] text-center">
                            <h3 className="text-lg font-semibold text-zinc-100">React</h3>
                        </div>
                        <div className="p-6 bg-zinc-800 rounded-lg shadow-lg w-[200px] text-center">
                            <h3 className="text-lg font-semibold text-zinc-100">Node.js</h3>
                        </div>
                        <div className="p-6 bg-zinc-800 rounded-lg shadow-lg w-[200px] text-center">
                            <h3 className="text-lg font-semibold text-zinc-100">HTML & CSS</h3>
                        </div>
                        <div className="p-6 bg-zinc-800 rounded-lg shadow-lg w-[200px] text-center">
                            <h3 className="text-lg font-semibold text-zinc-100">Bootstrap</h3>
                        </div>
                        <div className="p-6 bg-zinc-800 rounded-lg shadow-lg w-[200px] text-center">
                            <h3 className="text-lg font-semibold text-zinc-100">Taiwind CSS</h3>
                        </div>
                        <div className="p-6 bg-zinc-800 rounded-lg shadow-lg w-[200px] text-center">
                            <h3 className="text-lg font-semibold text-zinc-100">JQuery</h3>
                        </div>
                        <div className="p-6 bg-zinc-800 rounded-lg shadow-lg w-[200px] text-center">
                            <h3 className="text-lg font-semibold text-zinc-100">TypeScript</h3>
                        </div>
                        <div className="p-6 bg-zinc-800 rounded-lg shadow-lg w-[200px] text-center">
                            <h3 className="text-lg font-semibold text-zinc-100">Git</h3>
                        </div>                        
                        <div className="p-6 bg-zinc-800 rounded-lg shadow-lg w-[200px] text-center">
                            <h3 className="text-lg font-semibold text-zinc-100">RestApi</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-px bg-zinc-800" />
        </div>
    </div>
    );
}
