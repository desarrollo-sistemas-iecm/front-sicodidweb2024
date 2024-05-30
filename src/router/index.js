import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import NotFoundView from '../views/NotFoundView.vue';

const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: ()=>import('../views/NotFoundView.vue'),
    /*
    beforeEnter(to, from, next) {
      window.location.href = "http://localhost:5173/jg_cdmx";
    }
    */
    //component: NotFoundView
  },
  {
    path: '/',
    name: 'home',
    redirect: '/jg_cdmx'
    //component: HomeView
  },/* {
    path: '/jg/:id',
    name: 'jg',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/JefeGobierno.vue')
  },*/
  {
    path: '/prueba',
    name: 'prueba',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Prueba.vue')
  },
  /*
  {
    path: '/prueba2',
    name: 'prueba2',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/pruebaData.vue')
  },
  */
  {
    path: '/jg_cdmx',
    name: 'jg_cdmx',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/JG_cdmx.vue')
  },
  {
    path: '/map/:id',
    name: 'map',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/MapView.vue')
  },
  {
    path: '/chart/:id',
    name: 'chart',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/ChartView.vue')
  },
  {
    path: '/gauge',
    name: 'gauge',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/GaugeView.vue')
  },
  {
    path: '/nivel1/:id',
    name: 'nivel1',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/NivelUnoView.vue')
  },
  {
    path: '/nivel2/:id',
    name: 'nivel2',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/NivelDosView.vue')
  },
  {
    path: '/nivel3/:id',
    name: 'nivel3',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/NivelTresView.vue')
  },
  {
    path: '/partidos/:id',
    name: 'partidos',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/VotosPartido.vue')
  },
  {
    path: '/candidatos/:id',
    name: 'cadidatos',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/VotosCandidato.vue')
  },
  {
    path: '/casilla/:id',
    name: 'casilla',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/VotosCasilla.vue')
  },
  {
    path: '/seccion/:id/:cas',
    name: 'seccion',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/VotosSeccion.vue')
  },
  {
    path: '/preguntas',
    name: 'preguntas',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Preguntas.vue')
  },
  {
    path: '/bd',
    name: 'bd',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/BaseDeDatos.vue')
  },
  {
    path: '/help',
    name: 'help',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/CentroAyuda.vue')
  },
  {
    path: '/votoexten',
    name: 'votoexten',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/VotosExten.vue')
  },
  {
    path: '/votoextranjero',
    name: 'votoextranjero',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/VotosExtranjero.vue')
  },
  {
    path: '/votoprision',
    name: 'votoprision',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/VotosPrision.vue')
  },
  {
    path: '/votoanticipado',
    name: 'votoanticipado',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/VotosAnticipado.vue')
  },
  {
    path: '/actasrpe',
    name: 'actasrpe',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/ActasRPE.vue')
  },
  {
    path: '/todo_secc',
    name: 'todo_secc',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/VotosSeccionTODO.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  }
];

const router = createRouter({
  history: createWebHistory('/v2-sicodid-web2024'),
  routes,
});

const checkAuth = async () => {
  const response = await fetch('http://localhost:3025/api/system');
  const data = await response.json();
  return data.proteger_rutas;
};

router.beforeEach(async (to, from, next) => {
  const protegerRutas = await checkAuth();
  const isAuthenticated = !!localStorage.getItem('token');

  if (protegerRutas && to.name !== 'login' && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
