const products = [
  {
    name: "Spannik",
    category: "bedroom",
    price: 4200000,
    rating: "4.9",
    image: "1.jpg"
  },

  {
    name: "Dekorativ kitob javonlari",
    category: "living",
    price: 6100000,
    rating: "4.8",
    image: "2.jpg"
  },

  {
    name: "Sofali oshxona mebellari",
    category: "kitchen",
    price: 5300000,
    rating: "4.7",
    image: "3.jpg"
  },

  {
    name: "Ofis partasi",
    category: "office",
    price: 2800000,
    rating: "4.9",
    image: "4.jpg"
  },

  {
    name: "Bolalar divanlari",
    category: "living",
    price: 2400000,
    rating: "4.8",
    image: "5.jpg"
  },

  {
    name: "Sifatli shkaf",
    category: "bedroom",
    price: 3600000,
    rating: "4.9",
    image: "6.jpg"
  }
];


const categoryNames = {
  bedroom: "Yotoqxona",
  kitchen: "Oshxona",
  office: "Ofis",
  living: "Mehmonxona"
};


const grid = document.getElementById("productGrid");


const formatPrice = (value) => {
  return new Intl.NumberFormat("uz-UZ").format(value) + " so'm";
};


function renderProducts(category = "all") {

  const filtered =
    category === "all"
      ? products
      : products.filter(
          product => product.category === category
        );


  grid.innerHTML = filtered
    .map(
      product => `

        <article class="product-card">

          <div
            class="product-image"
            role="img"
            aria-label="${product.name}"
            style="
              background-image:
              url('${product.image}')
            "
          ></div>


          <div class="product-body">

            <div class="product-top">

              <span class="badge">
                ${categoryNames[product.category]}
              </span>

              <span class="rating">
                ★ ${product.rating}
              </span>

            </div>


            <h3>
              ${product.name}
            </h3>


            <div class="product-meta">

              <span class="price">
                ${formatPrice(product.price)}
              </span>

              <span class="badge">
                Sifatli
              </span>

            </div>


            <div class="product-actions">

              <button
                class="btn btn-primary order-button"
                data-product="${product.name}"
              >
                Sotib olish
              </button>

              <button
                class="ghost-btn detail-button"
                data-product="${product.name}"
              >
                Batafsil
              </button>

            </div>

          </div>

        </article>

      `
    )
    .join("");
}


/* FILTER */

document
  .querySelectorAll(".filter-btn")
  .forEach(button => {

    button.addEventListener("click", () => {

      document
        .querySelectorAll(".filter-btn")
        .forEach(item =>
          item.classList.remove("active")
        );

      button.classList.add("active");

      renderProducts(
        button.dataset.filter
      );

    });

  });


/* BUY / DETAIL */

document.addEventListener(
  "click",
  event => {

    const button =
      event.target.closest(
        ".order-button, .detail-button"
      );

    if (!button) return;


    const productInput =
      document.querySelector(
        '[placeholder="Mahsulot nomi"]'
      );


    productInput.value =
      button.dataset.product;


    document
      .getElementById("contact")
      .scrollIntoView({
        behavior: "smooth"
      });

  }
);


/* FORM */

document
  .querySelector(".contact-form form")
  .addEventListener(
    "submit",
    event => {

      event.preventDefault();

      alert(
        "Rahmat! Buyurtmangiz qabul qilindi. Tez orada bog‘lanamiz."
      );

      event.target.reset();

    }
  );


/* START */

renderProducts();
