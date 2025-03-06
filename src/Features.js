import React from "react";

const features = [
  {
    image: "../assets/img-5.jpg",
    title: "100% Natural Ingredients",
    description: "Our hair oil is made from pure herbal extracts, ensuring a chemical-free and safe solution for healthy hair."
  },
  {
    image: "../assets/img-6.jpg",
    title: "Promotes Hair Growth",
    description: "Nourishes the scalp and strengthens hair roots, reducing hair fall and promoting faster growth."
  },
  {
    image: "../assets/img-7.jpg",
    title: "Adds Shine & Softness",
    description: "Deeply conditions your hair, making it shinier, smoother, and easier to manage."
  },
  {
    image: "../assets/img-5.jpg",
    title: "Controls Dandruff",
    description: "Infused with anti-dandruff herbs that soothe the scalp and eliminate flakes effectively."
  }
];

const Features = () => {
  return (
    <section className="features-section" id="feature">
      <h2 className="text-center text-success fw-bold">Why Choose Our Hair Oil?</h2>
      <div className="container mt-4">
        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-md-6 col-lg-6">
              <div className="pb-3">
                <div className="feature-box text-center p-3">
                  <img src={feature.image} alt={feature.title} className="feature-img" />
                  <h4 className="mt-3 text-dark fe-txt">{feature.title}</h4>
                  <p className="text-muted pf-txt">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
