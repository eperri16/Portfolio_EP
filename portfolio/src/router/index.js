import Vue from 'vue'
import Router from 'vue-router'
import Accueil from "../components/Accueil";
import Propos from "../components/A-propos";
import Projets from "../components/Projets.vue";
import Contact from "../components/Contact.vue";
import Documents from "../components/Documents.vue";
import Projet from "../components/Projets-Fiches/Projet.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/A-propos',
      name: 'A-propos',
      component: Propos
    },
    {
      path: '/Projets',
      name: 'Projets',
      component: Projets
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },{
      path: '/Documents',
      name: 'Documents',
      component: Documents,
    },
    {
      path: '/Projet/:id',
      name: 'Projet',
      component: Projet,
    }
  ]
})
