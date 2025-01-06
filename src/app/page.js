// app/home/page.js (or app/home.js in Next.js 13 or later)

// Assuming you use Supabase for fetching
import Hero2 from "./_sections/Hero2";
import About from "./_sections/About";
import Projects from "./_sections/Projects";
import Blogs from "./_sections/Blogs";
import Inquire from "./_sections/Inquire";
import LetsCollaborate from "./_sections/LetsCollaborate";
import Testimonial from "./_sections/Testimonials";
import Banner from "./_sections/Banner";
import OptimizedBackground from "./_components/OptimizedBackground";
import CursorFlowEffect from "./_components/CursorFlowEffect";
import Skills from "./_sections/Skills";
import Footer from "./_sections/Footer";
import { supabase } from "./lib/supabase";

export default async function Home() {
  // Fetch data for all sections here
  const { data: skillsData, error: skillsError } = await supabase
    .from("expertise")
    .select("*")
    .order("priority", { ascending: true });

  if (skillsError) {
    return <div>Error loading data</div>;
  }

  // Pass the data to the sections as props
  return (
    <div className="relative w-full text-zinc-900 dark:text-zinc-200 h-auto flex items-center justify-center flex-col overflow-x-hidden">
      <OptimizedBackground src={"/l1.jpg"} opacity={10} />
      <CursorFlowEffect />
      <div className="relative w-screen z-10 bg-white/60 dark:bg-black/30 backdrop-blur-md ">
        <Hero2 />
        <About />
        <Projects />
        <Skills skills={skillsData} isOnHome={true} direction={1} />
        <Blogs />
        <Inquire />
        <Banner />
        <LetsCollaborate />
        <Testimonial />
        <Footer />
      </div>
    </div>
  );
}
