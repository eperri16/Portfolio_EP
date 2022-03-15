<template>
  <div id="contact">
    <img class="logo" src="../../static/images/Logo-EP.svg" alt="Logo EP">
    <div class="infos">

    <router-link to="/Projets"><img class="u-a" src="../../static/images/up-arrow.png" alt="Up-arrow"></router-link>
    <h1>CONTACT</h1>
    <p>Pour pouvoir bénéficier de mes services, si vous avez des remarques vis-à-vis de mes projets...

      <br>N’hésitez pas à laisser un message via ce formulaire de contact !
    </p>
    <div>
      <h2 style="font-size: 1.2rem; padding: 30px 10px">Mes réseaux sociaux</h2>
      <ul id="RS">
        <li><a href="https://www.facebook.com/elora.philippe.9/"><img class="RS-elmt"
                                                                      src="../../static/images/facebook.png"
                                                                      alt="Logo Facebook"></a></li>
        <li><a href="https://www.instagram.com/bakabrutie2.0/?hl=fr"><img class="RS-elmt"
                                                                          src="../../static/images/instagram.png"
                                                                          alt="Logo Instagram"></a></li>
        <li><a href="https://www.linkedin.com/in/elora-perrin-8b12511bb/"><img class="RS-elmt"
                                                                               src="../../static/images/linkedin.png"
                                                                               alt="Logo LinkedIn"></a></li>
        <li><a href="https://github.com/eperri16"><img class="RS-elmt" src="../../static/images/github.png"
                                                       alt="Logo Github"></a></li>
      </ul>
    </div>
    </div>
    <div class="info-form">
      <form action="" method="get" class="form">
        <div class="nom">
          <label for="nom">Votre nom</label>
          <br>
          <input id="nom" name="nom"
                    rows="1" cols="33" required style="font-family: 'Exo 2 SemiBold', sans-serif; text-align: center; font-size: 1rem">
            </div>
        <div class="email">
          <label for="email">Votre email</label>
          <br>
         <input id="email" name="email"
                   rows="1" cols="33" required style="font-family: 'Exo 2 SemiBold', sans-serif; text-align: center; font-size: 1rem">
           </div>
        <div class="sujet">
          <label for="sujet">Sujet de votre message</label>
          <br>
          <input id="sujet" name="sujet"
                    rows="1" cols="33" required style="font-family: 'Exo 2 SemiBold', sans-serif; text-align: center; font-size: 1rem">
            </div>
        <div class="message">
          <label for="message">Votre message</label>
          <br>
         <input type="text" id="message" name="message"
                required style="font-family: 'Exo 2 SemiBold', sans-serif; text-align: center; font-size: 1rem; height: 100px">
        </div>
        <div class="envoyer">
          <button onclick="sendMail();" value="Envoyer" style="font-size: 1.1rem">Envoyer</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"

}
</script>

<style scoped>
label {
  font-family: 'Exo 2 SemiBold', sans-serif;
  text-align: center;
  font-size: 1.1rem;
}
</style>
