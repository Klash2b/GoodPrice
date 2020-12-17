import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Vibration from '@/views/_Vibration'
import Product from '@/views/Product'
// import Flash from '@/views/Flash'
// import Camera from '@/views/Camera'
// import Nfc from '@/views/Nfc'
// import Localisation from '@/views/Localisation'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
    ,{
      path: '/vibration',
      name: 'Vibration',
      component: Vibration
    }
    ,{
      path: '/product',
      name: 'Product',
      component: Product
    }
    // ,{
    //   path: '/flash',
    //   name: 'Flash',
    //   component: Flash
    // },{
    //   path: '/camera',
    //   name: 'Camera',
    //   component: Camera
    // },{
    //   path: '/nfc',
    //   name: 'Nfc',
    //   component: Nfc
    // },{
    //   path: '/localisation',
    //   name: 'Localisation',
    //   component: Localisation
    // }
  ]
})