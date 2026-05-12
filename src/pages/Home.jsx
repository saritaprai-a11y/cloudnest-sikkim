import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

import "../styles/Home.css";

function Home() {
  return (
    <>

      <Navbar />

      <Hero />

      <section className="cards-section">

        <h2>Popular Homestays</h2>

        <div className="cards-container">

          <Card
            image="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            title="Pelling Mountain View"
            desc="Beautiful Himalayan experience"
          />

          <Card
            image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            title="Lachung Riverside"
            desc="Peaceful riverside retreat"
          />

          <Card
            image="https://images.unsplash.com/photo-1494526585095-c41746248156"
            title="Gangtok Heritage"
            desc="Traditional Sikkim hospitality"
          />

        </div>

      </section>

      <Footer />

    </>
  );
}

export default Home;