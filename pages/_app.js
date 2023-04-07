import "../styles/globals.css";
import "../styles/typewriter.css";
import "../styles/back.css";
import Navbar from "../components/Navbar";
import Back from "../components/Back";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <div className="z-[-1] fixed h-screen pointer-events-none">
        <Back />
      </div>
      {
        router.pathname !== "/" && (

          <Navbar 
            onHomeClick = {() => router.push("/")}
            onAboutClick = {() => router.push("/#about")}
            onSkillsClick = {() => router.push("/#skills")}
            onProjectsClick = {() => router.push("/#projects")}
            onContactClick = {() => router.push("/#contact")}
          />
        )
      }
      <Component {...pageProps} />
    </>
  );
}
