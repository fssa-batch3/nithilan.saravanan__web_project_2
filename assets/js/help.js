let btn=document.getElementById("btnform");




btn.addEventListener("submit",(e)=>{


  let name1=document.getElementById("nameuser").value
// console.log(name1);
let text=document.getElementById("textcon").value
//   console.log(text);


e.preventDefault();
    Email.send({
        
        Host: "smtp.elasticemail.com", 
        Username: "freshfood@gmail.com",
        Password: "6576EFE09C14FEA42615DE67A40EA62A9BF9",
        To:"nithilan.s04@gmail.com",
        From: "nithilan.s04@gmail.com",
        Subject: ` Messaged  from  ${name1}  from the website form`,
        Body: `Name: ${name1} <br> Email: ${text} <br>`,
      }).then((success) => {
       
        alert("message sent successfully. Please check the spam folder in your mail.");
      })
})