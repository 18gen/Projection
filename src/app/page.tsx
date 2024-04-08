import Header from "./components/header";
import About from "./components/about";
import FAQ from "./components/FAQ";
import Sponsor from "./components/sponsor";
import Footer from "./components/footer";
import "./globals.css";
import Schedule from "./components/schedule";

export default function Home() {
  return (
    <main>
      <Header/>
      <About/>
      <Sponsor/>
      <Schedule/>
      <FAQ/>
      <Footer/>
    </main>
  );
}
