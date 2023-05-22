// let div_content;
// let h2;
// let h3;
// let h4;
// let image_flower;
// const order_list = JSON.parse(localStorage.getItem("order"));
// let order_sample=[
// {
//     image:"../../asset/IMG/anniversary bouquet/red.webp",
//     alt:"red_bouquet",
//     name:"Red Rose Bouquet",
//     order_id:"1",
//     order_date:"23/04/2023",
//     price:"2500",
//     address:"No2,Thayagi sathya moorthi street kandanchavadi"
// }
// ]
// const activeuser = JSON.parse(localStorage.getItem("active_user"));
// order_list.find((el) => {
//   if (activeuser.emailid === el.emailid) {
//     div_content = document.createElement("div");
//     div_content.setAttribute("class", "content");
//     // console.log(div_content);
//     // console.log(h2);
//     image_flower = document.createElement("img");
//     image_flower.setAttribute("id", "flower");
//     image_flower.setAttribute("src", el.img);
//     image_flower.setAttribute("alt", el.alt);
//     div_content.append(image_flower);
//     h4 = document.createElement("h3");
//     h4.setAttribute("id", "rupees");
//     h4.setAttribute("class", "rupees");
//     h4.innerText = `₹${el.price}`;
//     div_content.append(h4);
//     h6 = document.createElement("h6");
//     h6.setAttribute("id", "title");
//     h6.setAttribute("class", "title");
//     h6.innerText = el.tittle;
//     div_content.append(h6);
//     h3 = document.createElement("h3");
//     h3.setAttribute("id", "order_date");
//     h3.setAttribute("class", "orderdate");
//     h3.innerHTML = `${el.date}<br>${el.time}`;
//     div_content.append(h3);
//     h2 = document.createElement("h2");
//     // document.querySelector("div.content").append(h2);
//     h2.setAttribute("id", "orderid");
//     h2.innerText = el.order_id;
//     div_content.append(h2);
//     console.log(h2);
//     h5 = document.createElement("h5");
//     h5.setAttribute("id", "address");
//     h5.setAttribute("class", "deliaddress");
//     h5.innerHTML = `${el.firstname},<br>${el.address}<br>${el.city}&nbsp-${el.pincode}<br>${el.Phone_number}`;
//     div_content.append(h5);
//     document.querySelector("div.main_content").append(div_content);
//     // document.querySelector("div.content").append(h3);
//     // document.querySelector("div.content").append(h4);
//     // document.querySelector("div.content").append(image_flower);
//   }
// });

// const { doc } = require("prettier");




// add local Storage
const productDetails = JSON.parse(localStorage.getItem("food_details"))
// console.log(productDetails[0]["food_Name"]);


const formBtn = document.getElementById("formbtn");
formBtn.addEventListener("submit", (e) => {
    e.preventDefault();
    formSubmit();
    //   <td id="foodImg"></td>
    //             <td id="price"></td>
    //             <td id="foodName"></td>
    //             <td id="postData"></td>
    //             <td id="quantity"></td>
    // <td id="remove"></td>
    // document.querySelectorAll("#foodImg").src = productDetails[0]["food_photo"]
    // document.querySelectorAll("#price")
    // document.querySelectorAll("#foodName")
    // document.querySelectorAll("#postData")
    // document.querySelectorAll("#quantity")
    // document.querySelectorAll("#remove")
});

let tbody= document.getElementById("tbody")

for (let i = 0; i < productDetails.length; i++) {
    let seller_email = JSON.parse(localStorage.getItem("sellerlogg"))["seller_email"]
 console.log(   productDetails[i]["seller_email"],seller_email);
if(productDetails[i]["user"]==seller_email){
console.log("utyfgdxcghvnm");
    tbody.innerHTML+=`
<tr>
<td id="foodImg">
    <img src=${productDetails[i]["food_image"]} alt="" class="imgname">
</td>
<td id="price">${productDetails[i]["price"]}</td>
<td id="foodName">${productDetails[i]["food_name"]}</td>
<td id="postData">${productDetails[i]["post_date"]}</td>
<td class="disable">${productDetails[i]["status"]}</td>
</tr>`
}

}
let disable_button = document.querySelectorAll('.disable')

disable_button.forEach((e,i)=>{
    console.log("hyg");
    e.addEventListener("click",el=>{
        console.log(e.innerHTML);
const productDetails = JSON.parse(localStorage.getItem("food_details"))
if(e.innerHTML=="true"){
    productDetails[i]["status"]=false
    localStorage.setItem("food_details",JSON.stringify(productDetails))
}
else if(e.innerHTML=="false"){
    console.log("yes");
    productDetails[i]["status"]=true
    localStorage.setItem("food_details",JSON.stringify(productDetails))
}
       location.reload()
    })
})

let div = document.querySelectorAll("#remove");

div.forEach((e) => {
    e.addEventListener("click", (el) => {
            for (let i = 0; i < productDetails.length; i++) {
                if (productDetails[i]["food_Name"]=="sand") {
                    productDetails.spli
                }
                
            }
            
          
    })

})




function formSubmit() {
    let food_name = document.getElementById("food_name").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;
    let price = document.getElementById("price").value;
    let photo = document.getElementById("photo").value;

    let array = [];
    array = JSON.parse(localStorage.getItem("food_details"))
        ? JSON.parse(localStorage.getItem("food_details"))
        : [];
    if (
        array.some((y) => {
            // return y.food_Name==food_name
        })) {
        alert("this already taken");
    } else {
        let post_date=new Date().toLocaleDateString()
        let seller_email = JSON.parse(localStorage.getItem("sellerlogg"))["seller_email"]
        
        array.push({
            food_name: food_name,
            seller_address: address,
            seller_phone: phone,
            price: price,
            food_image: photo,
            status: true,
            post_date,
            user:seller_email
        });
console.log(post_date);
        alert("sucssefully  added");
    }

    localStorage.setItem("food_details", JSON.stringify(array))
    location.reload()

}

// let
function delete_obj(index) { }