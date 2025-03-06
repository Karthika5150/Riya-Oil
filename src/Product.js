import React from "react";

const products = [
  {
    image: "../assets/img-5.jpg",
    name: "Herbal Hair Oil",
    price: "₹499",
    description: "Strengthens roots, reduces hair fall, and promotes natural shine.",
  },
  {
    image: "../assets/img-9.png",
    name: "Herbal Hair Serum",
    price: "₹599",
    description: "Tames frizz, adds shine, and protects hair from heat damage.",
  },
  {
    image: "../assets/img-10.png",
    name: "Neem Hair Care Combo",
    price: "₹199",
    description: "A complete herbal solution for dandruff-free, nourished hair.",
  }
];

const Products = () => {
  return (
    <section className="products-section text-center" id="product">
      <h2 className="fw-bold text-success">Our Herbal Hair Care Products</h2>
      <div className="container mt-4">
        <div className="row">
          {products.map((product, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="product-card p-3">
                <img src={product.image} alt={product.name} className="product-img" />
                <h4 className="mt-3">{product.name}</h4>
                <p className="text-muted">{product.description}</p>
                <p className="fw-bold text-dark">{product.price}</p>
                <button className="btn btn-success">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
