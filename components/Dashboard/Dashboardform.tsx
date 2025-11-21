"use client";

import Animation from "../HeartMain/Animation";
import Header from "../Header/Index";

export default function DashboardClient() {
  return (
    <>
      <Animation />
      <Header />

      <div
        className="
          fixed inset-0 z-40 
          flex items-center justify-center
          px-4 
          pointer-events-none
        "
      >
        <h1
          className="
            text-4xl sm:text-5xl md:text-7xl lg:text-8xl 
            font-bold 
            text-white/90 
            tracking-tight 
            text-center
            leading-tight
          "
        >
          Welcome Back
        </h1>
      </div>
    </>
  );
}
