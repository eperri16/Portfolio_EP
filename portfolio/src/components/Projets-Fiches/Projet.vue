<template>
  <div id="projet">
    <div v-for="projet in listeProjet" :key="projet.id">
      <div class="div" v-show="projet.id === projetId">
        <img class="logo" src="../../../static/images/Logo-EP.svg" alt="Logo EP">
        <div class="infos">
          <div class="titre">
          <h1>PROJET <span >{{projet.name}}</span></h1>
          <img class="logo-projet" v-bind:src="projet.logo" alt="" >
          </div>
          <p style="font-style: italic; font-family: 'Exo 2 SemiBold', sans-serif">{{projet.date}}
          </p>
          <p>{{ projet.desc }}</p>
          <div class="liens">
            <button><a v-bind:href="projet.site">Découvrir le site web</a></button>
            <button><a v-bind:href="projet.maquette">Découvrir la maquette</a></button>
          </div>
          <h3>Découvrir les slides de présentation</h3>
          <div class="liens">
            <button><a v-bind:href="projet.slidemaquette">Soutenance maquette</a></button>
            <button><a v-bind:href="projet.slidefinale">Soutenance finale</a></button>
          </div>
          <div>
            <h3>Logiciels utilisés</h3>
            <section class="icones">
              <img v-bind:src="projet.iconeun" alt="Icone photoshop">
              <img v-bind:src="projet.iconedeux" alt="Icone Illustrator">
              <img v-bind:src="projet.iconetrois" alt="Icone XD">
            </section>
          </div>
        </div>
        <div class="mockup">
          <img class="mockup-img" v-bind:src="projet.mockup" alt="Mockup Nociweb mobile">
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "Projet",
  data(){
    let projetId;
    return {
      listeProjet:[],
      projetId
    }
  },

  mounted() {
    this.projetId = this.$route.params.id
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
.logo-projet {
  width: 175px;
  display: block;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
}
p {
  font-family: "Exo 2 Light", sans-serif;
}
button {
  background-color: white;
  border: solid black 2px;
  padding: 10px;
  transition: 2s;
  width: 150px;
  display: block;
  margin: 1rem auto;
}
button > a {
  text-decoration: none;
  color: black;
}
.liens {
  display: flex;
}
.icones{
  display: flex;
  width: 300px;
  margin-top: 2rem;
  margin-left: 1.5rem;
}
.icones > img {
  width: 80px;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
h3 {
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-family: "Exo 2 ExtraBold", sans-serif;
  font-size: 1.1rem;
}
.mockup {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}
.mockup-img {
  height: auto;
}





@media screen {
  @media ( min-width: 850px) {
    .logo-projet{
      width: 15%;
      height: 15%;
      margin-left: 1rem;
    }
    button {
      background-color: white;
      border: solid black 2px;
      padding: 20px;
      transition: 2s;
      width: 18vw;
      margin-left: 3.5rem;
      margin-top: 2rem;

    }
    button:hover{
      background-color: black;
    }
    button > a {
      text-decoration: none;
      color: black;
    }
    button > a:hover {
      color: white;
    }
    #projet {
      display: flex;
    }
    h1 {
      font-family: "Exo 2 Light", sans-serif;
    }
    h1> span {
      font-family: "Exo 2 ExtraBold", sans-serif;
      position: relative;
      width: 1000px;
    }
    .infos {
      margin-top: 6rem;
    }
    p {
      width: 30vw;
    }
    .liens {
      display: flex;
    }
    h3 {
      text-align: center;
      margin-top: 2.5rem;
      font-family: "Exo 2 ExtraBold", sans-serif;
      font-size: 1.1rem;
    }
    .icones{
      display: flex;
      width: 30vw;
      margin-left: 7rem;
      margin-top: 2rem;
    }
    .icones > img {
      width: 100px;
      height: auto;
      margin-left: auto;
      margin-right: auto;
    }
    .div{
      display: flex;
    }
    .mockup {
      margin-top: 3rem;
    }
    .mockup-img {
      width: 100%;
      height: 100%;
    }
    .titre{
      display: flex;
    }
  }
  }


</style>
