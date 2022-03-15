<template>
  <div id="projets">
    <div class="infos">
      <img class="logo" src="../../static/images/Logo-EP.svg" alt="Logo EP">
      <router-link to="/Projets"><img class="u-a" src="../../static/images/up-arrow.png" alt="Up-arrow"></router-link>
      <h1>DOCUMENTS <span>EN COMMUNICATION</span></h1>
      <p style="text-align: left">A travers ma formation, j’ai pu effectué différents projets, celui-ci constitue le
        quatrième. Les trois précédents sont à votre disposition ainsi que d’autres projets personnels.</p>
    </div>
    <div class="info-projets">
      <div class="projets">
        <div class="projets-elmt">
          <a  href="https://drive.google.com/file/d/1MbDcs8gCOkvMuZm2BtwCLRFy0AqrcA3o/view?usp=sharing">
          DOSSIER DE COMMUNICATION</a>
        </div>
        <div class="projets-elmt">
          <a  href="https://drive.google.com/drive/folders/1DUtV5QMNsz7XNq4H-sGkZvjiEG19sUOx?usp=sharing">
            SLIDES DE PRÉSENTATION</a>
        </div>
        <div class="projets-elmt">
          <a  href="https://drive.google.com/drive/folders/1p3hyHAFOqdtMrIZbtJIpx3rK1xXX7pEJ?usp=sharing">
            FLYERS ET AFFICHES</a>
        </div>
        <div class="projets-elmt">
          <a  href="https://drive.google.com/drive/folders/1VbZGX359VznQISByvn6upO1GrS0d1q7C?usp=sharing">
            PUBLICATIONS <br>RÉSEAUX SOCIAUX</a>
        </div>
        <div class="projets-elmt">
          <a  href="https://drive.google.com/drive/folders/1w7fE9iMTIJVtYOH3z73ZN2UABWhZGl57?usp=sharing">
            CV</a>
        </div>
        <div>
          <router-link to="" style="color: black; text-decoration: none; font-family: 'Exo 2 Black', sans-serif; float:right; margin-top: 10rem; @media (min-width:850px) {
          position:absolute; bottom: 5rem;
          right: 6rem
          } ">Voir
            plus
          </router-link>
        </div>
      </div>
      <router-link to="/A-propos"><img class="d-a" src="../../static/images/arrow-down.png" alt="Down-arrow">
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: "Projets",
  data() {
    return {
      listeProjet: []
    }
  },
  mounted() {
    axios.get('../../../static/flux.projets.json')
      .then(response => {
        this.listeProjet = response.data;
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error)
      });

  },
}
</script>

<style scoped>
@media screen {
  @media(min-width: 850px) {
    a {
      text-decoration: none;
      display: block;
      margin: auto;
      padding-top: 4rem;
      font-size: 1.2rem;
      font-family: "Exo 2 SemiBold", sans-serif;
      color: black;
      text-align: center
    }
  }
}
a {
  text-decoration: none;
  display: block;
  margin: auto;
  padding-top: 3rem;
  font-size: 1rem;
  font-family: "Exo 2 SemiBold", sans-serif;
  color: black;
  text-align: center
}
.projets-elmt:hover {
  background-color: black;
}
.projets-elmt>a:hover {
  color: white;
}
</style>
