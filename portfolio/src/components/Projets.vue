<template>
  <div id="projets">
    <div class="infos">
      <img class="logo" src="../../static/images/Logo-EP.svg" alt="Logo EP">
      <router-link to="/"><img class="u-a" src="../../static/images/up-arrow.png" alt="Up-arrow"></router-link>
      <h1>PROJETS</h1>
      <p style="text-align: left">A travers ma formation, j’ai pu effectué différents projets, celui-ci constitue le
        quatrième. Les trois précédents sont à votre disposition ainsi que d’autres projets personnels.</p>
    </div>
    <div class="info-projets">
      <div class="projets">
        <div class="projets-elmt" v-for="projet in listeProjet" :key="projet.id">
          <router-link :to="{name:'Projet', params:{id:projet.id}}">
            <img class="p-el" v-bind:src="projet.logo" alt="">
          </router-link>
        </div>
<!--        <div class="projets-elmt">-->
<!--          <router-link to=""><img class="p-el"  style="padding-top: 5rem" src="../../static/images/logo-ludifinder.png" alt="Logo Ludifinder">-->
<!--          </router-link>-->
<!--        </div>-->
<!--        <div class="projets-elmt">-->
<!--          <router-link to=""><img class="p-el" src="../../static/images/LOGO-MMI-noir.png" alt="Logo MMI"></router-link>-->
<!--        </div>-->
<!--        <div class="projets-elmt">-->
<!--          <router-link to=""><img class="p-el" src="../../static/images/Logo-casa-mila.svg" alt="Logo Casa Milà">-->
<!--          </router-link>-->
<!--        </div>-->
<!--        <div class="projets-elmt">-->
<!--          <router-link to=""><img class="p-el" src="../../static/images/Logo-colorée_SVG_BUGDAYS.svg"-->
<!--                                  alt="Logo BUG DAYS"></router-link>-->
<!--        </div>-->
        <div>
          <router-link to="" style="color: black; text-decoration: none; font-family: 'Exo 2 Black', sans-serif; float:right; margin-top: 10rem; @media (min-width:850px) {
          position:absolute; bottom: 5rem;
          right: 6rem
          } ">Voir
            plus
          </router-link>
        </div>
      </div>
      <router-link to="/Documents"><img class="d-a" src="../../static/images/arrow-down.png" alt="Down-arrow">
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

</style>
