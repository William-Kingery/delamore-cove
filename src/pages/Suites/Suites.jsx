import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Popup from "../../components/Popup/Popup";
import suiteData from "../../data/suiteData";
import "./Suites.scss";

const Suites = () => {
  const { suiteSlug } = useParams();
  const navigate = useNavigate();
  const routedSuite = suiteData.find((suite) => suite.slug === suiteSlug);
  const [selectedSuite, setSelectedSuite] = useState(routedSuite ?? null);

  useEffect(() => {
    setSelectedSuite(routedSuite ?? null);
  }, [routedSuite]);

  const openSuite = (suite) => {
    setSelectedSuite(suite);
    navigate(`/suites/${suite.slug}`, { replace: true });
  };

  const closeSuite = () => {
    setSelectedSuite(null);
    navigate("/suites", { replace: true });
  };

  return (
    <main className="page">
      <Header />
      <header className="suites-hero">
        <div className="suites-hero__inner shell">
          <div className="suites-hero__title">
            <p className="eyebrow">Four ways to stay</p>
            <h1 className="display-title">Room to exhale.</h1>
          </div>
          <div className="suites-hero__copy">
            <p className="lede">Each suite has its own relationship with the landscape—open bay, sunset balcony, sheltered garden, or space for the family. All share the ease of an independent island stay.</p>
            <ul aria-label="Suite collection highlights">
              <li>Four private suites</li>
              <li>Matiatia Bay</li>
              <li>Onsite parking</li>
            </ul>
          </div>
        </div>
        <div className="suites-hero__colour-line" aria-hidden="true"><span /><span /><span /></div>
      </header>

      <section className="suites-list shell" aria-label="Delamore Cove suites">
        {suiteData.map((suite, index) => (
          <article className="suite-row" key={suite.slug}>
            <button className="suite-row__image-button" type="button" onClick={() => openSuite(suite)} aria-label={`View ${suite.name} suite details`}>
              <img className="suite-row__image" src={suite.images[0]} alt={`${suite.name} suite`} loading="lazy" />
              <span>View gallery</span>
            </button>
            <div className="suite-row__content">
              <p className="suite-row__number">0{index + 1} / 04</p>
              <h2>{suite.name}</h2>
              <p className="suite-row__setting">{suite.setting}</p>
              <p className="suite-row__description">{suite.short}</p>
              <dl className="suite-row__facts">
                <div><dt>Sleeps</dt><dd>{suite.sleep}</dd></div>
                <div><dt>Bed</dt><dd>{suite.bed}</dd></div>
              </dl>
              <div className="suite-row__actions">
                <button className="button" type="button" onClick={() => openSuite(suite)}>Explore {suite.name}</button>
                <a className="suite-row__book" href={suite.href} target="_blank" rel="noopener noreferrer">Check current rates</a>
              </div>
            </div>
          </article>
        ))}
      </section>

      <Popup show={Boolean(selectedSuite)} onClose={closeSuite} suite={selectedSuite} />
      <Footer />
    </main>
  );
};

export default Suites;
