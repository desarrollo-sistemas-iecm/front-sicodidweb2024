import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import NotFoundView from '../views/NotFoundView.vue';

const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: NotFoundView
  },
  {
    path: '/',
    name: 'home',
    redirect: '/jg_cdmx'
  },
  {
    path: '/prueba',
    name: 'prueba',
    component: () => import('../views/Prueba.vue')
  },
  {
    path: '/jg_cdmx',
    name: 'jg_cdmx',
    component: () => import('../views/JG_cdmx.vue')
  },
  {
    path: '/map/:id',
    name: 'map',
    component: () => import('../views/MapView.vue')
  },
  {
    path: '/chart/:id',
    name: 'chart',
    component: () => import('../views/ChartView.vue')
  },
  {
    path: '/gauge',
    name: 'gauge',
    component: () => import('../views/GaugeView.vue')
  },
  {
    path: '/nivel1/:id',
    name: 'nivel1',
    component: () => import('../views/NivelUnoView.vue')
  },
  {
    path: '/nivel2/:id',
    name: 'nivel2',
    component: () => import('../views/NivelDosView.vue')
  },
  {
    path: '/nivel3/:id',
    name: 'nivel3',
    component: () => import('../views/NivelTresView.vue')
  },
  {
    path: '/partidos/:id',
    name: 'partidos',
    component: () => import('../views/VotosPartido.vue')
  },
  {
    path: '/candidatos/:id',
    name: 'cadidatos',
    component: () => import('../views/VotosCandidato.vue')
  },
  {
    path: '/casilla/:id',
    name: 'casilla',
    component: () => import('../views/VotosCasilla.vue')
  },
  {
    path: '/seccion/:id/:cas',
    name: 'seccion',
    component: () => import('../views/VotosSeccion.vue')
  },
  {
    path: '/preguntas',
    name: 'preguntas',
    component: () => import('../views/Preguntas.vue')
  },
  {
    path: '/bd',
    name: 'bd',
    component: () => import('../views/BaseDeDatos.vue')
  },
  {
    path: '/help',
    name: 'help',
    component: () => import('../views/CentroAyuda.vue')
  },
  {
    path: '/votoexten',
    name: 'votoexten',
    component: () => import('../views/VotosExten.vue')
  },
  {
    path: '/votoextranjero',
    name: 'votoextranjero',
    component: () => import('../views/VotosExtranjero.vue')
  },
  {
    path: '/votoprision',
    name: 'votoprision',
    component: () => import('../views/VotosPrision.vue')
  },
  {
    path: '/votoanticipado',
    name: 'votoanticipado',
    component: () => import('../views/VotosAnticipado.vue')
  },
  {
    path: '/actasrpe',
    name: 'actasrpe',
    component: () => import('../views/ActasRPE.vue')
  },
  {
    path: '/todo_secc',
    name: 'todo_secc',
    component: () => import('../views/VotosSeccionTODO.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  }
];

const router = createRouter({
  history: createWebHistory('/sicodid2024'),
  routes,
});

const checkAuth = async () => {
  // const urlSirec = 'http://localhost:3025/api/';
  const urlSirec = 'https://sirec.iecm.mx:3025/api/';
  const response = await fetch(urlSirec+'system');
  const data = await response.json();
  return data.proteger_rutas;
};

/* router.beforeEach(async (to, from, next) => {
  const protegerRutas = await checkAuth();
  const isAuthenticated = !!localStorage.getItem('token');

  if (protegerRutas && to.name !== 'login' && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
}); */

export default router;
