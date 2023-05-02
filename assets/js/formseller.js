const formBtn=document.getElementById("formbtn");
formBtn.addEventListener("submit",(e)=>{
e.preventDefault();
formSubmit() 
})



function formSubmit() {
    let food_name= document.getElementById('food_name').value;
    let address= document.getElementById('address').value;
    let phone=  document.getElementById('phone').value;
    let price=  document.getElementById('price').value;
    let photo=  document.getElementById('photo').value;



    let array=[];
    array=JSON.parse(localStorage.getItem("food_details"))?
    JSON.parse(localStorage.getItem("food_details")):[];



    if(array.some((y)=>{
        // return y.food_Name==food_name
    })){
        alert("this already taken")

    }

    else{
        array.push({
            "food_Name":food_name,
            "seller_address":address,
            "seller_phone":phone,
            "food_price":price,
            "food_photo":photo,
            "status":true,
        });

    alert('sucssefully  added')
    }


    localStorage.setItem("food_details",JSON.stringify(array))
    
}


function delete_obj(index){
    
}