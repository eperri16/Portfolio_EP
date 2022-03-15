<template>
  <div id="app" style="background-color: white">
      <header>
        <div class="nav-toggle" onclick="document.documentElement.classList.toggle('menu-open')">
          <div class="nav-toggle-bar"></div>
          <nav class="menu">
            <ul>
              <li><router-link to="/">ACCUEIL</router-link></li>
              <li><router-link to="/Projets">PROJETS</router-link></li>
              <li><router-link to="/Documents">DOCUMENTS</router-link></li>
              <li><router-link to="/A-propos">A PROPOS</router-link></li>
              <li><router-link to="/Contact">CONTACT</router-link></li>
            </ul>
          </nav>
        </div>
      </header>
    <transition name="flip" mode="out-in">
    <router-view/>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>

</style>
