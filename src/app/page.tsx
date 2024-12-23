import Hero from "./_sections/Hero";
import About from "./_sections/About";
// import Expertise from "./_sections/Expertise";
import Projects from "./_sections/Projects";
import Blogs from "./_sections/Blogs";
import Inquire from "./_sections/Inquire";
import LetsCollaborate from "./_sections/LetsCollaborate";
import Testimonial from "./_sections/Testimonials";
import MediaWall from "./_sections/MediaWall";
import Banner from "./_sections/Banner";
import OptimizedBackground from "./_components/OptimizedBackground";
// import Quote from "./_sections/Quote";
import Footer from "./_sections/Footer";
import CursorFlowEffect from "./_components/CursorFlowEffect";
// import OpenGraphBlock from "./_components/OpenGraphBlock";
export default function Home() {
  return (
    <div className="relative w-full text-zinc-900 dark:text-zinc-200  h-auto flex items-center justify-center flex-col overflow-x-hidden">
      <OptimizedBackground src={"/l1.jpg"} opacity={10} />
      <CursorFlowEffect />
      <div className="relative w-screen z-10 backdrop-blur-md ">
        <Hero />
        <About />
        <Projects />
        {/* <Expertise /> */}
        <Blogs />
        <Inquire />
        <Banner />
        <LetsCollaborate />
        {/* <div className="scale-90 md:scale-100">
          <Quote />
        </div> */}
        {/* <OpenGraphBlock /> */}

        <Testimonial />
        {/* <MediaWall /> */}
        <Footer />
      </div>
    </div>
  );
}
