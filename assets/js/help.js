let btn=document.getElementById("btnform");
let name1=document.getElementById("nameuser").value
let text=document.getElementById("textcon").value



btn.addEventListener("submit",(e)=>{

e.preventDefault();
    Email.send({
        
        Host: "smtp.elasticemail.com", 
        Username: "nithilans2004@gmail.com",
        Password: "AC2B9280B83DCA4B147947B04F8EC91B5FCB",
        To:"nithilans2004@gmail.com",
        From: "nithilans2004@gmail.com",
        Subject: `${name1} HI  messaged  from the website form`,
        Body: `Name: ${name1} <br> Email: ${text} <br>`,
      }).then((success) => {
       
        alert("message sent successfully. Please check the spam folder in your mail.");
      })
})