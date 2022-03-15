<template>
  <div id="index">
    <img class="logo" src="../../static/images/Logo-EP.svg" alt="Logo EP">
    <div class="infos">
      <h1>PORTFOLIO</h1>
      <h2>Elora <span>PERRIN</span></h2>
      <p>Étudiante en DUT Métiers du Mutlimédia,
        spécialisée en <strong>communication digitale</strong>.

        <br>Venez découvrir mes dossiers et mes créations
        sur ce site web. <strong>Bonne visite !</strong>
      </p>
      <div>
        <ul id="RS">
          <li><a href="https://www.facebook.com/elora.philippe.9/"><img class="RS-elmt" src="../../static/images/facebook.png" alt="Logo Facebook"></a></li>
          <li><a href="https://www.instagram.com/bakabrutie2.0/?hl=fr"><img class="RS-elmt" src="../../static/images/instagram.png" alt="Logo Instagram"></a></li>
          <li><a href="https://www.linkedin.com/in/elora-perrin-8b12511bb/"><img class="RS-elmt" src="../../static/images/linkedin.png" alt="Logo LinkedIn"></a></li>
          <li><a href="https://github.com/eperri16"><img class="RS-elmt" src="../../static/images/github.png" alt="Logo Github"></a></li>
        </ul>
      </div>
    </div>
    <div class="info-image">
      <img class="illu-acc" src="../../static/images/illu-1.svg" style="background-size: cover" alt="Illustration">
      <router-link to="/Projets"><img class="d-a" src="../../static/images/arrow-down.png" alt="Down-arrow"></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accueil',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
