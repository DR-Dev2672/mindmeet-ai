import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-black/10">
        <h1 className="text-2xl font-bold tracking-wide">MeetMindAi</h1>
        <div className="flex gap-4">
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button asChild className="rounded-full">
            <Link href="/sign-up">Register</Link>
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-28 px-6">
        <h2 className="text-6xl font-extrabold leading-tight mb-6">
          Your Personal AI Interview Partner
        </h2>
        <p className="text-black/60 max-w-2xl mx-auto mb-10 text-lg">
          MeetMindAi brings intelligent agents together to help you practice interviews, learn concepts deeply, and simulate real-world roles. Whether you're preparing for tech interviews, business analysis, or improving communication skills, our AI adapts to you.
        </p>
        <div className="flex justify-center gap-5">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/register">Start Practicing</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link href="/explore">Explore Agents</Link>
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="px-10 py-20 grid md:grid-cols-3 gap-8">
        <div className="p-8 border border-black/10 rounded-2xl hover:border-black transition">
          <h3 className="text-xl font-semibold mb-4">AI Interviewer</h3>
          <p className="text-black/60 text-sm">
            Experience realistic technical and HR interviews powered by AI that asks dynamic questions and evaluates your answers instantly.
          </p>
        </div>

        <div className="p-8 border border-black/10 rounded-2xl hover:border-black transition">
          <h3 className="text-xl font-semibold mb-4">AI Tutor</h3>
          <p className="text-black/60 text-sm">
            Learn complex topics with a personalized AI tutor that adjusts explanations based on your understanding and pace.
          </p>
        </div>

        <div className="p-8 border border-black/10 rounded-2xl hover:border-black transition">
          <h3 className="text-xl font-semibold mb-4">Business Analyst Agent</h3>
          <p className="text-black/60 text-sm">
            Solve real-world case studies, improve decision-making, and build analytical thinking with guided AI simulations.
          </p>
        </div>

        <div className="p-8 border border-black/10 rounded-2xl hover:border-black transition">
          <h3 className="text-xl font-semibold mb-4">Software Developer Agent</h3>
          <p className="text-black/60 text-sm">
            Practice coding, system design, and debugging with an AI that behaves like a real interviewer or teammate.
          </p>
        </div>

        <div className="p-8 border border-black/10 rounded-2xl hover:border-black transition">
          <h3 className="text-xl font-semibold mb-4">Mock Real-World Scenarios</h3>
          <p className="text-black/60 text-sm">
            Prepare for meetings, presentations, and workplace challenges using interactive AI-driven simulations.
          </p>
        </div>

        <div className="p-8 border border-black/10 rounded-2xl hover:border-black transition">
          <h3 className="text-xl font-semibold mb-4">Instant Feedback</h3>
          <p className="text-black/60 text-sm">
            Get actionable insights on your performance, communication, and problem-solving to improve faster.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-black/10 mx-10" />

      {/* About AI */}
      <section className="py-24 px-10 text-center">
        <h2 className="text-4xl font-bold mb-10">Why AI for Practice?</h2>
        <p className="max-w-3xl mx-auto text-black/60 leading-relaxed">
          Artificial Intelligence enables continuous learning without limits. Unlike traditional preparation methods, AI-powered agents provide real-time feedback, adapt to your skill level, and simulate real-world interactions. With MeetMindAi, you are not just practicing — you are experiencing scenarios that prepare you for actual challenges.
        </p>
      </section>

      {/* How it works */}
      <section className="py-24 px-10 text-center">
        <h2 className="text-4xl font-bold mb-16">How it works</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="text-5xl font-bold mb-4">1</div>
            <p className="text-black/60">Choose your AI agent based on your goal</p>
          </div>

          <div>
            <div className="text-5xl font-bold mb-4">2</div>
            <p className="text-black/60">Start interacting in real-time scenarios</p>
          </div>

          <div>
            <div className="text-5xl font-bold mb-4">3</div>
            <p className="text-black/60">Receive feedback and improve continuously</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-24 px-6 border-t border-black/10">
        <h2 className="text-5xl font-bold mb-6">
          Ready to Level Up Your Skills?
        </h2>
        <p className="text-black/60 mb-10">
          Join MeetMindAi and start your journey toward smarter preparation.
        </p>
        <div className="flex justify-center gap-5">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/sign-up">Register</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link href="/sign-in">Login</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-black/10 text-black/40 text-sm">
        © {new Date().getFullYear()} MeetMindAi
      </footer>
    </div>
  );
}
