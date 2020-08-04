import Vue from 'vue';
import Router from 'vue-router';
import Feartured from '../layout/Feartured';
import Bookscase from '../layout/Bookscase';
import My from '../layout/My';
import Vip from '../layout/Vip';
import BookStoreGirl from '../layout/BookStoreGirl';
import BookStoreBoy from '../layout/BookStoreBoy';
import ListenBook from '../layout/ListenBook';
import AllCategoriesSon from '../layout/AllCategoriesSon';
import BookDetails from '../layout/BookDetails';
import MyMembers from '../layout/MyMembers';
// import paginator from '../components/paginator';
import Login from '../layout/Login';
import Register from '../layout/Register';
import All from '../components/All';
import Mian from '../components/Mian';
import Mian1 from '../components/Mian1';
import Mian2 from '../components/Mian2';
import Mian3 from '../components/Mian3';
import PasswordSet from '../layout/PasswordSet';
import DetailsTop from '../components/DetailsTop';
import ReadBook from '../components/ReadBook';
import LoginOut from '../layout/LoginOut';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/LoginOut',
      name: 'LoginOut',
      component: LoginOut,
    },
    {
      path: '/',
      name: 'Feartured',
      component: Feartured
    },
    {
      path: '/Bookscase',
      name: 'Bookscase',
      component: Bookscase,
      props:true
    },
    {
      path: '/My',
      name: 'My',
      component: My
    },
    {
      path: '/Vip',
      name: 'Vip',
      component: Vip
    },
    {
      path: '/ListenBook',
      name: 'ListenBook',
      component: ListenBook
    },,
    {
      path: '/MyMembers',
      name: 'MyMembers',
      component: MyMembers
    },
    {
      path: '/All',
      redirect:'/All/Mian',
      name: 'All',
      component: All,
      meta: {
        requiresAuth: true
      },
      children: [{
          path: 'Mian',
          name: 'Mian',
          component: Mian,
          props: true
        },
        {
          path: 'Mian1/',
          name: 'Mian1',
          component: Mian1,
          props: true
        },
        {
          path: 'Mian2/',
          name: 'Mian2',
          component: Mian2,
          props: true
        },
        {
          path: 'Mian3/',
          name: 'Mian3',
          component: Mian3,
          props: true
        }
      ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      beforeEnter:(to,from,next)=>{
        if(sessionStorage.getItem("phonenum")){
          next("/LoginOut");
        }else{
          next();
        }
      }
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/PasswordSet',
      name: 'PasswordSet',
      component: PasswordSet,
    },
    {
      path: '/BookStoreGirl',
      name: 'BookStoreGirl',
      component: BookStoreGirl
    },
    {
      path: '/BookStoreBoy',
      name: 'BookStoreBoy',
      component: BookStoreBoy
    },
    {
      path: '/AllCategoriesSon',
      name: 'AllCategoriesSon',
      component: AllCategoriesSon,
      props:true
    },
    {
      path: '/BookDetails',
      name: 'BookDetails',
      component: BookDetails,
      props:true
    },
    {
      path: '/DetailsTop',
      name: 'DetailsTop',
      component: DetailsTop
    },
    {
      path: '/ReadBook',
      name: 'ReadBook',
      component: ReadBook
    }
  ]
})
