import AboutMe from "../components/AboutMe";
import AboutWebsite from "../components/AboutWebsite";

export default function AboutPage() {
  return (
    <main className="p-6 md:p-24"> 
      <AboutWebsite />
      <AboutMe />
    </main>
  );
}
