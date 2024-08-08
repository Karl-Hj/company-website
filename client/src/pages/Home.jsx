import officeImage from "./pictures/office.jpg";
import gt from "./pictures/tp1.jpg";
import "./index.css";
export function Home() {
  return (
    <>
      <section id="section-container">
        <div className="main-tagline-container">
          <h1 className="main-tagline">
            Take your business to the next level!
          </h1>
        </div>
      </section>
      <section>
        <div className="company-container">
          <div className="company-overview">
            <div className="company-office__picture">
              <img src={gt} alt="peoples-hands" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              voluptate facere minus enim, deleniti dicta, sunt unde porro neque
              necessitatibus ducimus. Accusantium inventore optio aliquid
              quisquam at vel magnam ducimus?
            </p>
          </div>
          <div className="company-overview">
            <div className="company-office__picture">
              <img src={officeImage} alt="peoples-hands" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              voluptate facere minus enim, deleniti dicta, sunt unde porro neque
              necessitatibus ducimus. Accusantium inventore optio aliquid
              quisquam at vel magnam ducimus?
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
