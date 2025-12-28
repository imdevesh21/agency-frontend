import Navbar from "../component/Navbar";
import EarthGlobe from "../component/Globe";
import "../styles/hero.css";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="globe-wrapper">
          <EarthGlobe />
        </div>

        <h1 className="title">dev.io</h1>
        <p className="tagline">COMING SOON</p>
      </section>
    </>
  );
}
