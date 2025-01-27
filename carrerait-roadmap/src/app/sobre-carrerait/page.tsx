import AboutMe from "../components/About/AboutMe";
import AboutWebsite from "../components/About/AboutWebsite";

export default function AboutPage() {
  return (
    <main className="p-6 md:p-24">
      <AboutWebsite />
      <AboutMe />
    </main>
  );
}
