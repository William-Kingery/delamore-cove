import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import suiteData from "../../data/suiteData";
import placeImage from "../../assets/images/general/2.jpeg";
import "./Home.scss";

const facts = [["04", "Distinct private stays"], ["Bay", "Views across Matiatia"], ["Near", "Oneroa village"], ["Easy", "Onsite parking"]];

const Home = () => (
  <main className="page">
    <Header />
    <Hero />

    <section className="home-intro shell" aria-labelledby="home-intro-title">
      <div>
        <p className="eyebrow">Delamore Cove</p>
        <h2 className="section-title" id="home-intro-title">Above the bay.<br />Away from the rush.</h2>
      </div>
      <div>
        <p className="lede">Set high above the comings and goings of Matiatia, Delamore Cove is a small collection of calm, independent stays shaped by sea views, native bush, and the rhythm of island life.</p>
        <p className="home-intro__copy">Wake to ferries crossing the bay. Follow a coastal path from the gate. Return for sunset on your balcony or a quiet evening beneath the stars. Oneroa, vineyards, and beaches are close; the feeling here is wonderfully removed.</p>
      </div>
    </section>

    <section className="home-facts" aria-label="At a glance">
      <div className="home-facts__inner shell">
        {facts.map(([value, label]) => <div className="home-fact" key={label}><strong>{value}</strong><span>{label}</span></div>)}
      </div>
    </section>

    <section className="home-suites shell" aria-labelledby="home-suites-title">
      <div className="home-section-heading">
        <div><p className="eyebrow">The suites</p><h2 className="section-title" id="home-suites-title">Your place to land.</h2></div>
        <Link className="button button--ghost" to="/suites">View all suites</Link>
      </div>
      <div className="home-suites__grid">
        {suiteData.map((suite, index) => (
          <Link className={`home-suite home-suite--${index + 1}`} to={`/suites/${suite.slug}`} key={suite.slug}>
            <div className="home-suite__image-wrap">
              <img className="home-suite__image" src={suite.images[0]} alt={`${suite.name} suite`} loading="lazy" />
              <span className="home-suite__number">0{index + 1}</span>
            </div>
            <div className="home-suite__text"><h3>{suite.name}</h3><p>{suite.setting}</p></div>
          </Link>
        ))}
      </div>
    </section>

    <section className="home-place">
      <div className="home-place__image-wrap"><img src={placeImage} alt="The coast and native bush around Matiatia Bay" className="home-place__image" loading="lazy" /></div>
      <div className="home-place__content">
        <p className="eyebrow">The island around you</p>
        <h2 className="section-title">Begin at the water.</h2>
        <p className="lede">Arrive across the Hauraki Gulf, settle above Matiatia, then choose your own pace: coastal walks, long lunches, cellar doors, or nowhere at all.</p>
        <div className="home-place__links"><Link to="/experiences">Explore Waiheke</Link><Link to="/getting-here">Plan your arrival</Link></div>
      </div>
    </section>
    <Footer />
  </main>
);

export default Home;
