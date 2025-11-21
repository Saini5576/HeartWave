"use client";

import Animation from "../HeartMain/Animation";
import Header from "../Header/Index";

export default function DashboardClient() {
  return (
    <>
      <Animation />
      <Header />

      {/* Optional: Welcome text center mein */}
      <div className="fixed inset-0 z-40 flex items-center justify-center pointer-events-none">
        <h1 className="text-6xl md:text-8xl font-bold text-white/90 tracking-tight">
          Welcome Back
        </h1>
      </div>
    </>
  );
}
