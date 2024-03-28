import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import FAQ from "./components/FAQ";


export default function Home() {
  return (
    <main >
      <Header/>
      <div>Landing page</div>
      <div>Carousel of sponsors</div>
      <div>Projection is a week long hackathon aimed to tackle real 
organizational problem through the perspective of business and tech</div>
      <div>Projection is Waterloo's biggest google sponsored hackathon backed 
by University of Waterloo</div>
      <div>Timeline</div>
      <div>Benefit we provide to hackers</div>
      <div>Sponsorship</div>
      <FAQ/>
      <Footer/>
      
    </main>
  );
}
