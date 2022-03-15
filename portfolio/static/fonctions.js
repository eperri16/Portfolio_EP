function sendMail(params){
  var temParams ={
    nom:document.getElementById("nom").value,
    email:document.getElementById("email").value,
    sujet:document.getElementById("sujet").value,
    message:document.getElementById("message").value
  };


  emailjs.send('service_uyx2wjl','template_160d3d6', temParams)
    .then(function (res){
      console.log("succès", res.status);
    })
}
