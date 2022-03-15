<template>
  <div id="propos">
    <div class="infos">
      <img class="logo" src="../../static/images/Logo-EP.svg" alt="Logo EP">
      <router-link to="/"><img class="u-a" src="../../static/images/up-arrow.png" alt="Up-arrow"></router-link>
      <h1>A PROPOS</h1>
      <p style="text-align: left">Je m’appelle Elora PERRIN, j’ai 19 ans et je suis en deuxième année du DUT Métiers du
        Multimédia et de l’Internet. J’ai eu un baccalauréat Économique et Social, j’ai découvert en faisant cette
        formation l’envie d’aider des particuliers et entreprises à développer leur activité et visibilité sur le
        web.</p>
      <p style="text-align: left">Lors de ma formation, j’ai pu découvrir les différents débouchés très différents les
        uns des autres. J’ai pu me spécialiser lors de mon dernier semestre en communication. Mes différentes missions
        pour les entreprises et les particuliers sont : créer une visibilité sur les navigateurs et les réseaux sociaux,
        créer des sites web et applications, gérer une communauté et faire prospérer l’entreprise à travers la
        communication.</p>
    </div>
    <div class="info-image">
      <img class="p-perso" src="../../static/images/photo-perso.jpg" alt="Photo-personnelle">
        <router-link to="/Contact"><img class="d-a" src="../../static/images/arrow-down.png" alt="Down-arrow">
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "A-propos"
}
</script>

<style scoped>

</style>
