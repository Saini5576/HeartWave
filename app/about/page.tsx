import Header from "@/components/Header/Index";
import Animation from "@/components/HeartMain/Animation";

export default function AboutPage() {
    return (
        <>
            {/* Full-screen heart particle background */}
            <Animation />

            {/* Header */}
            <Header />

            {/* Main Content - Clean & Professional */}
            <div className="fixed inset-0 z-50 flex items-center justify-center px-6 bg-black/5 backdrop-blur-xs">

                <div className="max-w-3xl text-center space-y-8">
                    <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight">
                        About This Project
                    </h1>

                    <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                        A modern, interactive dashboard featuring a stunning 3D heart particle animation built with Three.js.
                        Experience smooth page transitions, mouse-reactive effects (repel, wave, vortex), drag-to-rotate, and touch support.
                    </p>

                    <p className="text-lg md:text-xl text-white/70">
                        Fully responsive • Real-time particle physics • Dynamic color modes • Glassmorphic UI
                    </p>

                    <div className="pt-8 text-white/60">

                    </div>
                </div>
            </div>
        </>
    );
}