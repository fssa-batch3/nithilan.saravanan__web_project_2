const foodItem = [
  {
    id: 1,
    name: "Ambur Biryani",
    category: "biryani",
    rating: 4.3,
    price: 13,
    img: "https://iili.io/HSRLAmB.jpg",
    quantity: 1,
    status:true
  },
  {
    id: 2,
    name: "Hyderabadi Biryani",
    category: "biryani",
    rating: 4.3,
    price: 15,
    img: "https://iili.io/HSRLo0b.jpg",
    quantity: 1,
  },
  {
    id: 3,
    name: "Egg Biryani",
    category: "biryani",
    rating: 4.3,
    price: 18,
    img: "https://iili.io/HSRLBse.jpg",
    quantity: 1,
  },
  {
    id: 4,
    name: "Goan Fish Biryani",
    category: "biryani",
    rating: 4.3,
    price: 15,
    img: "https://iili.io/HSRLqX9.jpg",
    quantity: 1,
  },
  {
    id: 5,
    name: "Mutton Biryani",
    category: "biryani",
    rating: 4.3,
    price: 10,
    img: "https://iili.io/HSRLxgj.png",
    quantity: 1,
  },
  {
    id: 6,
    name: "Kamrupi Biryani",
    category: "biryani",
    rating: 4.3,
    price: 12,
    img: "https://iili.io/HSRLT5Q.jpg",
    quantity: 1,
  },
  {
    id: 7,
    name: "Kashmiri Biryani",
    category: "biryani",
    rating: 4.3,
    price: 13,
    img: "https://iili.io/HSRLIdx.jpg",
    quantity: 1,
  },
  {
    id: 8,
    name: "Memoni Biryani",
    category: "biryani",
    rating: 4.3,
    price: 20,
    img: "https://iili.io/HSRLueV.jpg",
    quantity: 1,
  },
  {
    id: 9,
    name: "Mughlai Biryani",
    category: "biryani",
    rating: 4.3,
    price: 15,
    img: "https://iili.io/HSRL5zP.jpg",
    quantity: 1,
  },
  {
    id: 10,
    name: "Chicken Roast",
    category: "chicken",
    rating: 4.3,
    price: 11,
    img: "https://iili.io/HSRZqKu.jpg",
    quantity: 1,
  },
  {
    id: 11,
    name: "Chicken Curry",
    category: "chicken",
    rating: 4.3,
    price: 10,
    img: "https://iili.io/HSRZFV9.jpg",
    quantity: 1,
  },
  {
    id: 12,
    name: "Chicken Do Pyaza",
    category: "chicken",
    rating: 4.3,
    price: 14,
    img: "https://iili.io/HSRZBcb.jpg",
    quantity: 1,
  },
  {
    id: 13,
    name: "Chicken Masala",
    category: "chicken",
    rating: 4.3,
    price: 12,
    img: "https://iili.io/HSRZ3o7.jpg",
    quantity: 1,
  },
  {
    id: 14,
    name: "Handi Chicken",
    category: "chicken",
    rating: 4.3,
    price: 17,
    img: "https://iili.io/HSRZFV9.jpg",
    quantity: 1,
  },
  {
    id: 15,
    name: "Murgh Musallam",
    category: "chicken",
    rating: 4.3,
    price: 20,
    img: "https://iili.io/HSRZBcb.jpg",
    quantity: 1,
  },
  {
    id: 16,
    name: "Matar Paneer",
    category: "paneer",
    rating: 4.3,
    price: 15,
    img: "https://iili.io/HSRbHAv.jpg",
    quantity: 1,
  },
  {
    id: 17,
    name: "Palak Paneer",
    category: "paneer",
    rating: 4.3,
    price: 10,
    img: "https://iili.io/HSRb9HJ.png",
    quantity: 1,
  },
  {
    id: 18,
    name: "Paneer Butter Masala",
    category: "paneer",
    rating: 4.3,
    price: 15,
    img: "https://iili.io/HSRbHAv.jpg",
    quantity: 1,
  },
  {
    id: 19,
    name: "Paneer Do Pyaza",
    category: "paneer",
    rating: 4.3,
    price: 12,
    img: "https://iili.io/HSRb9HJ.png",
    quantity: 1,
  },
  {
    id: 20,
    name: "Hyderabadi Paneer",
    category: "paneer",
    rating: 4.3,
    price: 8,
    img: "https://iili.io/HSRDpSa.jpg",
    quantity: 1,
  },
  {
    id: 21,
    name: "Paneer Lababdar",
    category: "paneer",
    rating: 4.3,
    price: 7,
    img: "https://iili.io/HSRtiBt.jpg",
    quantity: 1,
  },
  {
    id: 22,
    name: "Shahi Paneer",
    age: "32",
    category: "paneer",
    rating: 4.3,
    price: 5,
    img: "https://iili.io/HSRtsEX.jpg",
    quantity: 1,
  },
  {
    id: 23,
    name: "Navratan Korma",
    category: "vegetable",
    rating: 4.3,
    price: 8,
    img: "https://iili.io/HSRmhhl.jpg",
    quantity: 1,
  },
  {
    id: 24,
    name: "Veg Jalfrezi",
    category: "vegetable",
    rating: 4.3,
    price: 7,
    img: " https://iili.io/HSRmXI4.jpg",
    quantity: 1,
  },
  {
    id: 25,
    name: "Veg Biryani",
    category: "vegetable",
    rating: 4.3,
    price: 5,
    img: "https://iili.io/HSRmjQ2.jpg",
    quantity: 1,
  },
  {
    id: 26,
    name: "Veg Curry",
    category: "vegetable",
    rating: 4.3,
    price: 7,
    img: " https://iili.io/HSRmNBS.jpg",
    quantity: 1,
  },
  {
    id: 27,
    name: "Veg Kolhapur",
    category: "vegetable",
    rating: 4.3,
    price: 10,
    img: "https://iili.io/HSRmOE7.png",
    quantity: 1,
  },
  {
    id: 28,
    name: "Veg Masala",
    category: "vegetable",
    rating: 4.3,
    price: 4,
    img: "https://iili.io/HSRme49.jpg",
    quantity: 1,
  },
  {
    id: 29,
    name: "Veg Pakora",
    category: "vegetable",
    rating: 4.3,
    price: 4,
    img: " https://iili.io/HSRm8Yu.jpg",
    quantity: 1,
  },
  {
    id: 30,
    name: "Momos",
    category: "chinese",
    rating: 4.3,
    price: 8,
    img: "https://iili.io/HSRp58u.jpg  ",
    quantity: 1,
  },
  {
    id: 31,
    name: "Chicken Manchurian",
    category: "chinese",
    rating: 4.3,
    price: 7,
    img: "https://iili.io/HSRpzn2.jpg",
    quantity: 1,
  },
  {
    id: 32,
    name: "Chili Chicken",
    category: "chinese",
    rating: 4.3,
    price: 5,
    img: "https://iili.io/HSRpIGS.jpg    ",
    quantity: 1,
  },
  {
    id: 33,
    name: "Chowmein",
    category: "chinese",
    rating: 4.3,
    price: 16,
    img: "https://iili.io/HSRpoZl.jpg",
    quantity: 1,
  },
  {
    id: 34,
    name: "Spring Roll",
    category: "chinese",
    rating: 4.3,
    price: 14,
    img: "https://iili.io/HSRp7yb.jpg",
    quantity: 1,
  },
  {
    id: 35,
    name: "Szechuan Chicken",
    category: "chinese",
    rating: 4.3,
    price: 10,
    img: "https://iili.io/HSRpAF9.jpg",
    quantity: 1,
  },
  {
    id: 36,
    name: "Fried Rice",
    category: "chinese",
    rating: 4.3,
    price: 8,
    img: "https://iili.io/HSRpT67.jpg ",
    quantity: 1,
  },
  {
    id: 37,
    name: "Butter Masala Dosa",
    category: "south indian",
    rating: 4.3,
    price: 18,
    img: "https://iili.io/HSRpRae.jpg",
    quantity: 1,
  },
  {
    id: 38,
    name: "Idli",
    category: "south indian",
    rating: 4.3,
    price: 20,
    img: "https://iili.io/HSRyJNj.jpg",
    quantity: 1,
  },
  {
    id: 39,
    name: "Masala Dosa",
    category: "south indian",
    rating: 4.3,
    price: 12,
    img: " https://iili.io/HSRyFVV.jpg",
    quantity: 1,
  },
  {
    id: 40,
    name: "Mysore Bonda",
    category: "south indian",
    rating: 4.3,
    price: 10,
    img: "https://iili.io/HSRydDx.jpg",
    quantity: 1,
  },
  {
    id: 41,
    name: "Onion Uttapam",
    category: "south indian",
    rating: 4.3,
    price: 15,
    img: "https://iili.io/HSRy3oQ.jpg",
    quantity: 1,
  },
  {
    id: 42,
    name: "Plain Dosa",
    category: "south indian",
    rating: 4.3,
    price: 40,
    img: " https://iili.io/HSRyKiB.jpg",
    quantity: 1,
  },
  {
    id: 43,
    name: "Rava Uttapam",
    category: "south indian",
    rating: 4.3,
    price: 25,
    img: " https://iili.io/HSRyBl1.jpg",
    quantity: 1,
  },
  {
    id: 44,
    name: "Sambhar Vada",
    category: "south indian",
    rating: 4.3,
    price: 34,
    img: "https://iili.io/HSRyqKP.jpg",
    // https://iili.io/HSRyCUF.png',
    quantity: 1,
  },
];

displayItems();


const loginUser = localStorage.getItem("logdetails");
console.log(loginUser);
const loginbtn = document.querySelector(".login");
const loginbtn1 = document.querySelector(".login1");



function displayItems() {
  const food_detail = JSON.parse(localStorage.getItem("food_details"));
  const biriyani = document.getElementById("biriyani");

  const biriyaniData = foodItem.filter((item) => item.category == "biryani");
  
  if (food_detail == null) {
  } else {

    for (let j = 0; j <= food_detail.length - 1; j++) {
      if (food_detail[j]["status"] == true) {
        const item_card = document.createElement("div");
        item_card.setAttribute("id", "item-card");

        const card_top = document.createElement("div");
        card_top.setAttribute("id", "card-top");

        const i_tag = document.createElement("i");
        i_tag.setAttribute("class", "fa fa-star");
        i_tag.setAttribute("id", "rating");
        i_tag.innerText = "$.3";
{/* <i class="fa-solid fa-cart-plus"></i> */}
        const i2_tag = document.createElement("i");
        i2_tag.setAttribute("class", "fa-solid fa-cart-plus");
        card_top.append(i_tag);
        card_top.append(i2_tag);
        const img = document.createElement("img");
        img.setAttribute("src", food_detail[j].food_image);
        // item_card.append(img);
        const p_tag = document.createElement("p");
        p_tag.setAttribute("id", "item-name");
        p_tag.innerText = food_detail[j].food_name;
        // card_top.append(p_tag);
        const p2_tag = document.createElement("p");
        p2_tag.setAttribute("id", "item-price");
        p2_tag.innerText = `Price : ${food_detail[j].price}`;
        // card_top.append(p2_tag);
        const anchor = document.createElement("a");
        anchor.setAttribute("href", "#");
        const btn = document.createElement("button");
        btn.setAttribute("id", "buynow");
        btn.innerText = "Buy now";
        // btn.setAttribute("href","https://google.com/");
        anchor.append(btn);
        item_card.appendChild(card_top);
        item_card.appendChild(img);
        item_card.appendChild(p_tag);
        item_card.appendChild(p2_tag);
        item_card.appendChild(anchor);
        document.querySelector("#near_food").append(item_card);
      }
    }
  }
  biriyaniData.find((item) => {
    // for(let i=0;i<biriyaniData.length;i++){
    const itemCard = document.createElement("div");
    itemCard.setAttribute("id", "item-card");

    const cardTop = document.createElement("div");
    cardTop.setAttribute("id", "card-top");
    itemCard.append(cardTop);

    const star = document.createElement("i");
    star.setAttribute("class", "fa fa-star");
    star.setAttribute("id", "ratting");
    star.innerText = ` ${item.rating}`;

    const heart = document.createElement("i");
    heart.setAttribute("class", "fa-solid fa-cart-plus");
    heart.setAttribute("id", item.id);
    // heart.innerText = ` ${item.rating}`;

    cardTop.appendChild(star);
    cardTop.appendChild(heart);

    const img = document.createElement("img");
    img.src = item.img;

    const itemName = document.createElement("p");
    itemName.setAttribute("id", "item-name");
    itemName.innerText = item.name;

    const itemPrice = document.createElement("p");
    itemPrice.setAttribute("id", "item-price");
    itemPrice.innerText = `Price : ₹${item.price}`;

    const anchor = document.createElement("a");
    anchor.setAttribute("href", "#");
    const btn = document.createElement("button");
    btn.setAttribute("id", "buynow");
    btn.innerText = "Buy now";
    // btn.setAttribute("href","https://google.com/");
    anchor.append(btn);
    // itemCard.appendChild(anchor)

    itemCard.appendChild(cardTop);
    itemCard.appendChild(img);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);
    itemCard.appendChild(anchor);
    document.querySelector("#biriyani").append(itemCard);
    // biriyani.appendChild(itemCard);
  });

  const chickenData = foodItem.filter((item) => item.category == "chicken");
  // console.log(biriyaniData);

  chickenData.find((item) => {
    // for(let i=0;i<biriyaniData.length;i++){
    const itemCard = document.createElement("div");
    itemCard.setAttribute("id", "item-card");

    const cardTop = document.createElement("div");
    cardTop.setAttribute("id", "card-top");
    itemCard.append(cardTop);

    const star = document.createElement("i");
    star.setAttribute("class", "fa fa-star");
    star.setAttribute("id", "ratting");
    star.innerText = ` ${item.rating}`;

    const heart = document.createElement("i");
    heart.setAttribute("class", "fa-solid fa-cart-plus");
    heart.setAttribute("id", item.id);
    // heart.innerText = ' ' + item.rating;

    cardTop.appendChild(star);
    cardTop.appendChild(heart);

    const img = document.createElement("img");
    img.src = item.img;

    const itemName = document.createElement("p");
    itemName.setAttribute("id", "item-name");
    itemName.innerText = item.name;

    const itemPrice = document.createElement("p");
    itemPrice.setAttribute("id", "item-price");
    itemPrice.innerText = `Price : ₹${item.price}`;
    const anchor = document.createElement("a");
    anchor.setAttribute("href", "#");
    const btn = document.createElement("button");
    btn.setAttribute("id", "buynow");
    btn.innerText = "Buy now";
    // btn.setAttribute("href","https://google.com/");
    anchor.append(btn);

    itemCard.appendChild(cardTop);
    itemCard.appendChild(img);
    itemCard.appendChild(itemName);

    itemCard.appendChild(itemPrice);
    itemCard.appendChild(anchor);
    document.querySelector("#chicken").append(itemCard);
    // biriyani.appendChild(itemCard);
  });

  const paneerData = foodItem.filter((item) => item.category == "paneer");
  // console.log(biriyaniData);

  paneerData.find((item) => {
    // for(let i=0;i<biriyaniData.length;i++){
    const itemCard = document.createElement("div");
    itemCard.setAttribute("id", "item-card");

    const cardTop = document.createElement("div");
    cardTop.setAttribute("id", "card-top");
    itemCard.append(cardTop);

    const star = document.createElement("i");
    star.setAttribute("class", "fa fa-star");
    star.setAttribute("id", "ratting");
    star.innerText = ` ${item.rating}`;

    const heart = document.createElement("i");
    heart.setAttribute("class", "fa-solid fa-cart-plus");
    heart.setAttribute("id", item.id);
    // heart.innerText = ' ' + item.rating;

    cardTop.appendChild(star);
    cardTop.appendChild(heart);

    const img = document.createElement("img");
    img.src = item.img;

    const itemName = document.createElement("p");
    itemName.setAttribute("id", "item-name");
    itemName.innerText = item.name;

    const itemPrice = document.createElement("p");
    itemPrice.setAttribute("id", "item-price");
    itemPrice.innerText = `Price : ₹${item.price}`;
    const anchor = document.createElement("a");
    anchor.setAttribute("href", "#");
    const btn = document.createElement("button");
    btn.setAttribute("id", "buynow");
    btn.innerText = "Buy now";
    // btn.setAttribute("href","https://google.com/");
    anchor.append(btn);

    itemCard.appendChild(cardTop);
    itemCard.appendChild(img);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);
    itemCard.appendChild(anchor);
    document.querySelector("#paneer").append(itemCard);
    // biriyani.appendChild(itemCard);
  });

  const vegetableData = foodItem.filter((item) => item.category == "vegetable");
  // console.log(biriyaniData);

  vegetableData.find((item) => {
    // for(let i=0;i<biriyaniData.length;i++){
    const itemCard = document.createElement("div");
    itemCard.setAttribute("id", "item-card");

    const cardTop = document.createElement("div");
    cardTop.setAttribute("id", "card-top");
    itemCard.append(cardTop);

    const star = document.createElement("i");
    star.setAttribute("class", "fa fa-star");
    star.setAttribute("id", "ratting");
    star.innerText = ` ${item.rating}`;

    const heart = document.createElement("i");
    heart.setAttribute("class", "fa-solid fa-cart-plus");
    heart.setAttribute("id", item.id);
    // heart.innerText = ' ' + item.rating;

    cardTop.appendChild(star);
    cardTop.appendChild(heart);

    const img = document.createElement("img");
    img.src = item.img;

    const itemName = document.createElement("p");
    itemName.setAttribute("id", "item-name");
    itemName.innerText = item.name;

    const itemPrice = document.createElement("p");
    itemPrice.setAttribute("id", "item-price");
    itemPrice.innerText = `Price : ₹${item.price}`;
    const anchor = document.createElement("a");
    anchor.setAttribute("href", "#");
    const btn = document.createElement("button");
    btn.setAttribute("id", "buynow");
    btn.innerText = "Buy now";
    // btn.setAttribute("href","https://google.com/");
    anchor.append(btn);

    itemCard.appendChild(cardTop);
    itemCard.appendChild(img);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);
    itemCard.appendChild(anchor);

    document.querySelector("#vegetable").append(itemCard);
    // biriyani.appendChild(itemCard);
  });
  const chiniseData = foodItem.filter((item) => item.category == "chinese");
  // console.log(biriyaniData);

  chiniseData.find((item) => {
    // for(let i=0;i<biriyaniData.length;i++){
    const itemCard = document.createElement("div");
    itemCard.setAttribute("id", "item-card");

    const cardTop = document.createElement("div");
    cardTop.setAttribute("id", "card-top");
    itemCard.append(cardTop);

    const star = document.createElement("i");
    star.setAttribute("class", "fa fa-star");
    star.setAttribute("id", "ratting");
    star.innerText = ` ${item.rating}`;

    const heart = document.createElement("i");
    heart.setAttribute("class", "fa-solid fa-cart-plus");
    heart.setAttribute("id", item.id);
    // heart.innerText = ' ' + item.rating;

    cardTop.appendChild(star);
    cardTop.appendChild(heart);

    const img = document.createElement("img");
    img.src = item.img;

    const itemName = document.createElement("p");
    itemName.setAttribute("id", "item-name");
    itemName.innerText = item.name;

    const itemPrice = document.createElement("p");
    itemPrice.setAttribute("id", "item-price");
    itemPrice.innerText = `Price : ₹${item.price}`;
    const anchor = document.createElement("a");
    anchor.setAttribute("href", "#");
    const btn = document.createElement("button");
    btn.setAttribute("id", "buynow");
    btn.innerText = "Buy now";
    // btn.setAttribute("href","https://google.com/");
    anchor.append(btn);

    itemCard.appendChild(cardTop);
    itemCard.appendChild(img);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);
    itemCard.appendChild(anchor);

    document.querySelector("#chinise").append(itemCard);
    // biriyani.appendChild(itemCard);
  });
  const southData = foodItem.filter((item) => item.category == "south indian");
  // console.log(biriyaniData);

  southData.find((item) => {
    // for(let i=0;i<biriyaniData.length;i++){
    const itemCard = document.createElement("div");
    itemCard.setAttribute("id", "item-card");

    const cardTop = document.createElement("div");
    cardTop.setAttribute("id", "card-top");
    itemCard.append(cardTop);

    const star = document.createElement("i");
    star.setAttribute("class", "fa fa-star");
    star.setAttribute("id", "ratting");
    star.innerText = ` ${item.rating}`;

    const heart = document.createElement("i");
    heart.setAttribute("class", "fa-solid fa-cart-plus");
    heart.setAttribute("id", item.id);
    // heart.innerText = ' ' + item.rating;

    cardTop.appendChild(star);
    cardTop.appendChild(heart);

    const img = document.createElement("img");
    img.src = item.img;

    const itemName = document.createElement("p");
    itemName.setAttribute("id", "item-name");
    itemName.innerText = item.name;

    const itemPrice = document.createElement("p");
    itemPrice.setAttribute("id", "item-price");
    itemPrice.innerText = `Price : ₹${item.price}`;

    const anchor = document.createElement("a");
    anchor.setAttribute("href", "#");
    const btn = document.createElement("button");
    btn.setAttribute("id", "buynow");
    btn.innerText = "Buy now";
    // btn.setAttribute("href","https://google.com/");
    anchor.append(btn);

    itemCard.appendChild(cardTop);
    itemCard.appendChild(img);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);
    itemCard.appendChild(anchor);
    document.querySelector("#south-indian").append(itemCard);
    // biriyani.appendChild(itemCard);
  });
}



const login_detail = localStorage.getItem("logdetails") ?? [];
console.log(login_detail);
const item_card = document.querySelectorAll(".fa-cart-plus");

let food_name;
let res;

item_card.forEach((e) => {
  e.addEventListener("click", (el) => {
    if (login_detail == "") {
      alert("please login");
    } else {
      food_name = e.parentElement.parentElement.children[2].innerText;

      foodItem.find((element) => {
        if (food_name == element.name) {
          res = element;
        }
      });
      console.log(res);
      console.log(food_name);

      const add_to_cart = JSON.parse(localStorage.getItem("add_to_cart")) ?? [];
      let check = 0;
      let cart_food;
      add_to_cart.forEach((e) => {
        if (food_name == e.food_name && login_detail == e.user) {
          check = 1;
          cart_food = e;
        }
      });

      if (check == 1) {
        const new_q = Number(cart_food.quantity) + 1;
        cart_food.quantity = new_q;
        cart_food.total_individual_price = cart_food.quantity * cart_food.price;
        add_to_cart.forEach((e, index) => {
          if (cart_food.food_name == e.food_name) {
            add_to_cart[index] = cart_food;
          }
        });
        console.log("already there");
      } else {
        const cart = {
          food_name,
          price: res.price,
          food_image: res.img,
          rating: res.rating,
          status: "true",
          user: login_detail,
          quantity: 1,
          total_individual_price: res.price,
        };

        add_to_cart.push(cart);
        // alert("Food add to cart");
        console.log("Created new");
      }

      localStorage.setItem("add_to_cart", JSON.stringify(add_to_cart));
      alert("Food add to cart");
      // window.location.href = "./html/cart.html"
    }
  });
});

// console.log(user[k]["email"])
console.log(login_detail);
const user = JSON.parse(localStorage.getItem("user_details"));
let code;
if (user == null) {
} else {
  for (let k = 0; k < user.length; k++) {
    if (login_detail == user[k].user_email) {
      code = user[k].status;
      console.log(`${code}ok`);
    }
  }
}


let login_details = localStorage.getItem("logdetails") ?? []
const login_butn = document.querySelector(".login");
const account_btn = document.getElementById("account_btn");
if (login_details == "") {
  account_btn.style.display = "none";
  login_butn.style.display = "inline-block"

} 
else {
  login_butn.style.display = "none"
  account_btn.style.display = "flex";
}

const add_product = document.getElementById("add_product");
if (code == "user") {
  add_product.style.display = "none";
}


const hotel_image = [
  {
    hotel_name: "Serenity Sands Resort",
  },
  {
    hotel_name: "Azure Haven Hotel",
  },
  {
    hotel_name: " Mountain View Retreat",
  },
  {
    hotel_name: "Royal Oak Manor",
  },
  {
    hotel_name: "Tranquil Waters Resort",
  },
  {
    hotel_name: " Golden Horizon Inn",
  },
  {
    hotel_name: " The Grand Tower Hotel",
  },
  {
    hotel_name: "Whispering Pines Lodge",
  },

  {
    hotel_name: " Majestic Bay Resort",
  },
  {
    hotel_name: "The Ivy Manor Hotel",
  },
  {
    hotel_name: "A2ertB",
  },
  {
    hotel_name: "A2Bhg",
  },
];

const preveiwContainer = document.querySelector(".products-preview");
const previewBox = preveiwContainer.querySelectorAll(".preview");
const header_ = document.getElementById("header");
console.log(previewBox);
console.log(hotel_image.length);

document.querySelectorAll("#item-card").forEach((product) => {
  product.onclick = () => {
    console.log(product.children[2]);
    preveiwContainer.style.display = "flex";
    previewBox[0].classList.add("active")
    previewBox[0].children[1].src = product.children[1].src;
    previewBox[0].children[2].innerText = product.children[2].innerText;
    previewBox[0].children[5].innerText = product.children[3].innerText;
 
    previewBox[0].children[4].innerHTML =
      hotel_image[Math.floor(Math.random() * 12)].hotel_name; // 0
    
    previewBox[0].classList.add("active");
    let buy_now = document.querySelector(".buttons .buy");
    console.log(buy_now.parentElement.parentElement.children[2])

    buy_now.setAttribute("href", "../html/payment-page.html?name=" + buy_now.parentElement.parentElement.children[2].innerText)
    let cart_page = document.querySelector(".buttons .cart");
    cart_page.addEventListener("click", (el) => {
      el.preventDefault();
      window.location.href = "../../html/cart.html"

    })


   
  };
});

previewBox.forEach((close) => {
  close.querySelector(".fa-times").onclick = () => {
    close.classList.remove("active");
    preveiwContainer.style.display = "none";
  };
});

let buy_now = document.querySelector(".buttons .buy");
buy_now.addEventListener("click", (e) => {
  localStorage.setItem('current_page', "buynow")
})





// search function

const search = document.getElementById("search2");





search.addEventListener("keyup", (ee) => {
  // console.log("ooksdd");

  let text = ee.target.value.toLowerCase();


  //  console.log(text);

  const product_div = document.querySelectorAll("#item-card");

  console.log(product_div);

  product_div.forEach((element) => {

    let content = element.children[2].textContent.toLowerCase();

    if (content.includes(text)) {
      element.style.display = "inline-block";
    }
    else {
      element.style.display = "none";
    }

  })

})