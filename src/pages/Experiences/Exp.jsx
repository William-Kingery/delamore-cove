import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import coastImage from "../../assets/images/general/13.jpeg";
import wineImage from "../../assets/images/general/17-web.jpg";
import foodImage from "../../assets/images/general/18-web.jpg";
import "./Exp.scss";

const collections = [
  {
    label: "Drink slowly", title: "Cellar doors", image: wineImage, alt: "Vineyard landscape on Waiheke Island",
    intro: "From garden terraces near Oneroa to a beachside tasting room at the island’s far edge, Waiheke rewards an unhurried afternoon.",
    places: [
      ["Mudbrick", "Gardens, sea views, and an elegant hilltop setting.", "About 6 minutes by car", "https://mudbrick.co.nz"],
      ["Cable Bay", "Contemporary food and wine with broad coastal views.", "About 5 minutes by car", "https://cablebay.nz"],
      ["Man O’ War", "A remote, beachside cellar door made for a day trip.", "About 40 minutes by car", "https://www.manowar.co.nz/"],
      ["Casita Miro", "Spanish spirit, mosaics, olive trees, and a warm sense of place.", "About 15 minutes by car", "https://www.casitamiro.co.nz/"],
    ],
  },
  {
    label: "Eat well", title: "Island tables", image: foodImage, alt: "Dining among vines on Waiheke Island",
    intro: "Seafood, island-grown produce, vineyard lunches, and views that make you linger. Book ahead when the island is busy.",
    places: [
      ["The Oyster Inn", "Oysters, seafood, and a relaxed view across Oneroa Bay.", "About 5 minutes by car", "https://www.theoysterinn.co.nz/"],
      ["Ki Māha", "Seasonal New Zealand produce served above Onetangi Bay.", "About 20 minutes by car", "https://kimaha.nz/"],
      ["Red Crab", "Thai flavours and a bright outlook over Oneroa.", "About 5 minutes by car", "https://www.redcrab.co.nz/"],
      ["Wild on Waiheke", "Casual food, local wine and beer, and room to play.", "About 15 minutes by car", "https://wildestate.co.nz/"],
    ],
  },
  {
    label: "Walk lightly", title: "Coastal tracks", image: coastImage, alt: "Coastal walking landscape near Matiatia Bay",
    intro: "The Te Ara Hura network traces headlands, coves, and native bush. One of its island loops begins just beyond the property gate.",
    places: [
      ["Matiatia–Owhanake–Oneroa", "A 9 km northern loop through changing coastal terrain.", "Northern walk", "https://www.alltrails.com/trail/new-zealand/auckland/northern-walk-matiatia-owhanake-oneroa"],
      ["Waiheke short loop", "A 5.6 km loop with access right outside our gates.", "From Delamore Drive", "https://www.alltrails.com/trail/new-zealand/auckland/waiheke-island-short-loop"],
      ["Matiatia–Church Bay–Oneroa", "An 8.3 km southern loop around headlands and bays.", "Southern walk", "https://www.alltrails.com/trail/new-zealand/auckland/southern-walk-matiatia-church-bay-oneroa-loop"],
      ["Oneroa Beach track", "An easy 3.5 km out-and-back beside the village and shore.", "Oneroa", "https://www.alltrails.com/trail/new-zealand/auckland/oneroa-beach-track"],
    ],
  },
];

const Experiences = () => (
  <main className="page">
    <Header />
    <header className="experiences-hero">
      <div className="experiences-hero__inner shell">
        <div className="experiences-hero__title">
          <p className="eyebrow">What we love on Waiheke</p>
          <h1 className="display-title">Leave room<br />for discovery.</h1>
        </div>
        <div className="experiences-hero__copy">
          <p className="lede">The island is best experienced without a checklist. Choose a direction, follow the coast, and let one good thing lead to another.</p>
          <p className="experiences-hero__edit">Our island edit <span>Wine · Food · Walks</span></p>
        </div>
      </div>
    </header>

    <div className="experience-collections shell">
      {collections.map((collection, index) => (
        <section className="experience-collection" key={collection.title} aria-labelledby={`experience-${index}`}>
          <div className="experience-collection__visual">
            <img src={collection.image} alt={collection.alt} loading="lazy" />
          </div>
          <div className="experience-collection__content">
            <p className="eyebrow">{collection.label}</p>
            <h2 id={`experience-${index}`}>{collection.title}</h2>
            <p className="experience-collection__intro">{collection.intro}</p>
            <div className="experience-places">
              {collection.places.map(([name, description, distance, href]) => (
                <a className="experience-place" href={href} target="_blank" rel="noopener noreferrer" key={name}>
                  <span><strong>{name}</strong><small>{description}</small></span><em>{distance}</em>
                </a>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
    <Footer />
  </main>
);

export default Experiences;
