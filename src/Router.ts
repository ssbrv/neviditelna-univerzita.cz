import { createRouter, createWebHistory } from 'vue-router'
import NotFound from './pages/NotFound'
import AuthenticationProvider from './providers/AuthenticationProvider'
import AppLayout from './layouts/AppLayout'
import DomainDetailsProvider from './providers/DomainDetailsProvider'
import DomainList from './pages/DomainList'
import DomainDetails from './pages/DomainList/DomainDetails'

const routes = [
  {
    path: '/',
    component: AuthenticationProvider,
    children: [
      {
        path: '',
        component: AppLayout,
        redirect: '/domain-list',
        children: [
          {
            path: 'domain-list',
            component: DomainList
          },
          {
            path: 'domain-list/:domainId',
            component: DomainDetailsProvider,
            children: [
              {
                path: 'details',
                component: DomainDetails
              }
            ]
          },
          {
            path: '/:pathMatch(.*)*',
            component: NotFound
          }
        ]
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
