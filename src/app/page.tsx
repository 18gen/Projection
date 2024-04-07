import Header from "./components/header";
import About from "./components/about";
import FAQ from "./components/FAQ";
import Sponsor from "./components/sponsor";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
      <Header/>
      <About/>
      <Sponsor/>
      <FAQ/>
      <Footer/>
    </main>
  );
}
