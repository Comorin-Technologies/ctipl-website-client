import "./OurOfferings.css";
import { ourOfferings } from "./OurOfferingsHelper";

export function OurOfferings() {
  return (
    <div className="offering-main-div">
      <h2>Our Offerings</h2>
      <div className="ourofferingcard-disp-div">
        {ourOfferings.map((offer) => {
          return (
            <div>
              <div class="card" style={{ width: 280 }}>
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{offer.name}</h5>
                  <p class="card-text">{offer.description}</p>
                  <a href="#" class="btn btn-primary">
                    Know More
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
