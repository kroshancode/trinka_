var registerForFreeBtn = document.querySelector('#register-btn');
var popupDiv = document.querySelector('#popup');
var submitBtn = document.querySelector('#submit-btn');
var Name = document.querySelector('#name');
var error = document.querySelector('.error');
var mail = document.querySelector('#mail');
var tel = document.querySelector('#tel');
var body = document.querySelector('body');

registerForFreeBtn.addEventListener('click', () => {
    popupDiv.classList.add('active');
    body.classList.add('active');
});

function sendMail() {
    var params = {
      name: Name.value,
      reply_to: mail.value,
      fromName: 'Roshan',
    };
  
    const serviceID = "service_osb8kke";
    const templateID = "template_ojmf2ee";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
        //   document.getElementById("name").value = "";
        //   document.getElementById("email").value = "";
        //   document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }

  
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!Name.value || !mail.value || !tel.value) {
        // console.log(Name, mail, tel)
        error.classList.add('active');
    } else {
        error.classList.remove('active');
        body.classList.remove('active');
        popupDiv.classList.remove('active');
        
    sendMail();
    }
    // popupDiv.classList.remove('active');
});