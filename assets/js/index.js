const foodItem = [
  {
    id: 1,
    name: "Ambur Biryani",
    category: "biryani",
    rating: 4.3,
    price: 13,
    img: "https://iili.io/HSRLAmB.jpg",
    quantity: 1,
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

// document.querySelectorAll('.add-to-cart').forEach(item => {
//     item.addEventListener('click', addToCart)
// })

// export let cartData = [];
// function addToCart() {

//     let itemToAdd = this.parentNode.nextSibling.nextSibling.innerText;
//     let itemObj = foodItem.find(element => element.name == itemToAdd);

//     let index = cartData.indexOf(itemObj);
//     if (index === -1) {
//         document.getElementById(itemObj.id).classList.add('toggle-heart');
//         cartData = [...cartData, itemObj];
//     }
//     else if (index > -1) {
//         alert("Added to cart!");
//     }

//     document.getElementById('cart-plus').innerText =
//         ' ' + cartData.length + ' Items';
//     // document.getElementById('m-cart-plus').innerText=
//     // ' ' + cartData.length;
//     totalAmount();
//     cartItems();
// }

// function cartItems() {
//     let tableBody = document.getElementById('table-body');
//     tableBody.innerHTML = '';

//     cartData.map(item => {
//         let tableRow = document.createElement('tr');

//         let rowData1 = document.createElement('td');
//         let img = document.createElement('img');
//         img.src = item.img;
//         rowData1.appendChild(img);

//         let rowData2 = document.createElement('td');
//         rowData2.innerText = item.name;

//         let rowData3 = document.createElement('td');
//         let btn1 = document.createElement('button');
//         btn1.setAttribute('class', 'decrease-item');
//         btn1.innerText = '-';
//         let span = document.createElement('span');
//         span.innerText = item.quantity;
//         let btn2 = document.createElement('button');
//         btn2.setAttribute('class', 'increase-item');
//         btn2.innerText = '+';

//         rowData3.appendChild(btn1);
//         rowData3.appendChild(span);
//         rowData3.appendChild(btn2);

//         let rowData4 = document.createElement('td');
//         rowData4.innerText = item.price;

//         tableRow.appendChild(rowData1);
//         tableRow.appendChild(rowData2);
//         tableRow.appendChild(rowData3);
//         tableRow.appendChild(rowData4);

//         tableBody.appendChild(tableRow);
//     })
//     document.querySelectorAll('.increase-item').forEach(item => {
//         item.addEventListener('click', incrementItem)
//     })

//     document.querySelectorAll('.decrease-item').forEach(item => {
//         item.addEventListener('click', decrementItem)
//     })
// }

// function incrementItem() {
//     let itemToInc = this.parentNode.previousSibling.innerText;
//     // console.log(itemToInc)
//     let incObj = cartData.find(element => element.name == itemToInc);
//     incObj.quantity += 1;

//     currPrice = (incObj.price * incObj.quantity - incObj.price * (incObj.quantity - 1)) / (incObj.quantity - 1);
//     incObj.price = currPrice * incObj.quantity;
//     totalAmount()
//     cartItems();
// }

// let currPrice = 0;
// function decrementItem() {
//     let itemToInc = this.parentNode.previousSibling.innerText;
//     let decObj = cartData.find(element => element.name == itemToInc);
//     let ind = cartData.indexOf(decObj);
//     if (decObj.quantity > 1) {
//         currPrice = (decObj.price * decObj.quantity - decObj.price * (decObj.quantity - 1)) / (decObj.quantity);
//         decObj.quantity -= 1;
//         decObj.price = currPrice * decObj.quantity;
//     }
//     else {
//         document.getElementById(decObj.id).classList.remove('toggle-heart')
//         cartData.splice(ind, 1);
//         document.getElementById('cart-plus').innerText = ' ' + cartData.length + ' Items';
//         document.getElementById('m-cart-plus').innerText = ' ' + cartData.length;
//         if (cartData.length < 1 && flag) {
//             document.getElementById('food-items').classList.toggle('food-items');
//             document.getElementById('category-list').classList.toggle('food-items');
//             document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle')
//             document.getElementById('cart-page').classList.toggle('cart-toggle');
//             document.getElementById('category-header').classList.toggle('toggle-category');
//             document.getElementById('checkout').classList.toggle('cart-toggle');
//             flag = false;
//             alert("Currently no item in cart!");
//             // console.log(flag)
//         }
//     }
//     totalAmount()
//     cartItems()
// }

// function totalAmount() {
//     let sum = 0;
//     cartData.map(item => {
//         sum += item.price;
//     })
//     document.getElementById('total-item').innerText = 'Total Item : ' + cartData.length;
//     document.getElementById('total-price').innerText = 'Total Price : ₹ ' + sum;
//     document.getElementById('m-total-amount').innerText = 'Total Price : ₹ ' + sum;
// }

// document.getElementById('cart-plus').addEventListener('click', cartToggle);
// // document.getElementById('m-cart-plus').addEventListener('click',cartToggle);

// export let flag = false;
// window.onresize = window.onload = function () {
//     let size = window.screen.width;
//     // console.log(size)
//     if (size < 800) {
//         let cloneFoodItems = document.getElementById('food-items').cloneNode(true);
//         let cloneCartPage = document.getElementById('cart-page').cloneNode(true);
//         document.getElementById('food-items').remove();
//         document.getElementById('cart-page').remove();
//         document.getElementById('category-header').after(cloneFoodItems);
//         document.getElementById('food-items').after(cloneCartPage);
//         addEvents()
//     }
//     if (size > 800) {
//         let cloneFoodItems = document.getElementById('food-items').cloneNode(true);
//         document.getElementById('food-items').remove();
//         document.getElementById('header').after(cloneFoodItems);

//         let cloneCartPage = document.getElementById('cart-page').cloneNode(true);
//         document.getElementById('cart-page').remove();
//         document.getElementById('food-items').after(cloneCartPage);
//         addEvents()
//     }
// }

// function addEvents() {
//     document.querySelectorAll('.add-to-cart').forEach(item => {
//         item.addEventListener('click', addToCart)
//     });
//     document.querySelectorAll('.increase-item').forEach(item => {
//         item.addEventListener('click', incrementItem)
//     })

//     document.querySelectorAll('.decrease-item').forEach(item => {
//         item.addEventListener('click', decrementItem)
//     })
// }

// document.querySelector('#add-address').addEventListener('click', addAddress());

// function addAddress() {
//     let address = prompt('Enter your address', '');
//     if (address) {
//         document.getElementById('add-address').innerText = ' ' + address;
//     }
//     else {
//         alert("Address not added")
//     }

// }
// document.getElementById('cart-plus').addEventListener("click", function check() {
//     document.getElementById('cart-page').classList.toggle('cart-toggle');
//     // document.getElementById('checkout').classList.toggle('cart-toggle');
// })
// function cartToggle() {
//     if (cartData.length > 0) {
//         document.getElementById('food-items').classList.toggle('food-items');
//         document.getElementById('cart-page').classList.toggle('cart-toggle');
//         document.getElementById('checkout').classList.toggle('cart-toggle');
//         flag = true;
//         // console.log(flag);
//     }
//     else {
//         alert("Currently no item in cart!");
//     }
// }

const loginUser = localStorage.getItem("logdetails");
console.log(loginUser);
const loginbtn = document.querySelector(".login");
const loginbtn1 = document.querySelector(".login1");

// if (loginUser === null) {
  
//     loginbtn.style.display = "none";
//     loginbtn1.style.display = "none";
//     // const myprofile = document.createElement("a");
//     // myprofile.setAttribute("class", "login");
//     // myprofile.innerText = "My Account";
//     // myprofile.style.width = "0px";
//     // myprofile.style.left = "0px";
//     // myprofile.style.display="none";

// }
// else if (loginUser !== "") {
//   loginbtn.style.display = "none";
//   const myprofile = document.createElement("a");
//   myprofile.setAttribute("class", "login1");
//   myprofile.innerText = "My Account";
//   myprofile.style.width = "150px";
//   myprofile.style.left = "50px";
//   myprofile.addEventListener("click", () => {
//     window.location.href = "html/profile.html";
//   });
//   document.querySelector(".contact").append(myprofile);
// } else {
//   loginbtn.style.display = "block";
// }

function displayItems() {
  const food_detail = JSON.parse(localStorage.getItem("food_details"));
  const biriyani = document.getElementById("biriyani");

  const biriyaniData = foodItem.filter((item) => item.category == "biryani");
  // console.log(biriyaniData);

  // cards
  //   let food_detail=JSON.parse(localStorage.getItem("food_details"));
  //   food_detail.find((e)=>{
  //         if()
  //   })
  if (food_detail == null) {
  } else {

    for (let j = 0; j <= food_detail.length - 1; j++) {
      // let image = document.createElement('img')
      // image.setAttribute('src',food_detail[j]["food_photo"]);
      // // image.setAttribute("item-card")
      // document.querySelector("#south-indian").append(image)
      // console.log(food_detail[j]["food_photo"]);
      // console.log(image);
      if (food_detail[j]["status"] == true) {
        const item_card = document.createElement("div");
        item_card.setAttribute("id", "item-card");
        
        const card_top = document.createElement("div");
        card_top.setAttribute("id", "card-top");
        
        const i_tag = document.createElement("i");
        i_tag.setAttribute("class", "fa fa-star");
        i_tag.setAttribute("id", "rating");
        i_tag.innerText = "$.3";
        
        const i2_tag = document.createElement("i");
        i2_tag.setAttribute("class", "fa fa-heart-o add-to-cart");
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
        document.querySelector("#south-indian").append(item_card);
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
    heart.setAttribute("class", "fa fa-heart-o add-to-cart");
    heart.setAttribute("id", item.id);
    heart.innerText = ` ${item.rating}`;

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
    heart.setAttribute("class", "fa fa-heart-o add-to-cart");
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
    heart.setAttribute("class", "fa fa-heart-o add-to-cart");
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
    heart.setAttribute("class", "fa fa-heart-o add-to-cart");
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
    heart.setAttribute("class", "fa fa-heart-o add-to-cart");
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
    heart.setAttribute("class", "fa fa-heart-o add-to-cart");
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

//     })
// }

// let cart_btn = document.getElementById("cart");

// let display_cart_page = document.getElementById("cart-page");
// console.log(display_cart_page);

// cart_btn.addEventListener("click", function (e){
//     e.preventDefault();
//     console.log("aakash");
//     display_cart_page.style.display="none";

// } )

const login_detail = localStorage.getItem("logdetails") ?? [];
console.log(login_detail);
const item_card = document.querySelectorAll(".add-to-cart");

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
          status:"true",
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

const login_butn = document.querySelector(".login");
const account_btn = document.getElementById("account_btn");
if (login_detail !== "") {
  login_butn.style.display = "none"
  account_btn.style.display = "block";
} else {
  account_btn.style.display = "none";
}

const add_product = document.getElementById("add_product");
if (code == "user") {
  add_product.style.display = "none";
}
// else if(code === "seller"){
//     add_product.style.display = "block"
// }

// user.for()

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
    // for (let i = 0; i < hotel_image.length; i++) {//12
    //   cnt++
    previewBox[0].children[4].innerHTML =
      hotel_image[Math.floor(Math.random() * 12)].hotel_name; // 0
    // }
    // let name = product.getAttribute('data-name');
    // previewBox.forEach(preview =>{
    // //   let target = preview.getAttribute('data-target');
    // //   if(name == target){
    previewBox[0].classList.add("active");
    let buy_now=document.querySelector(".buttons .buy");
console.log(buy_now.parentElement.parentElement.children[2])

buy_now.setAttribute("href","../html/payment-page.html?name="+buy_now.parentElement.parentElement.children[2].innerText)
let cart_page=document.querySelector(".buttons .cart");
cart_page.addEventListener("click",(el)=>{
el.preventDefault();
window.location.href="../../html/cart.html"

})


    //   }
    // });
  };
});

previewBox.forEach((close) => {
  close.querySelector(".fa-times").onclick = () => {
    close.classList.remove("active");
    preveiwContainer.style.display = "none";
  };
});

let buy_now=document.querySelector(".buttons .buy");
buy_now.addEventListener("click",(e)=>{
  localStorage.setItem('current_page',"buynow")
})