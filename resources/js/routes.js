import Accueil from './components/accueil.vue';
import  viewCategory from './components/Categories/viewCategory.vue';
import Addcategorie from './components/Categories/Addcategorie.vue';
import Viewarticles from './components/articles/Viewarticles.vue';
import Addarticle from './components/articles/addarticle.vue';
import Editarticle from "./components/articles/Editarticle.vue"
import EditCategory from './components/categories/editCategory.vue';
import Viwearticletable from "./components/articles/Viwearticletable.vue"

export const routes=[
   {
    name: "accueil",
    path: '/',
    component: Accueil
   },
   {
      name: "categories",
      path: '/categories',
      component: viewCategory
     },
     {
      name: 'Addcategorie',
      path: '/addcategorie',
      component: Addcategorie
      },
      {
         name:"Viewarticles",
         path:"/listart",
         component:Viewarticles
         },
         {
            name:"Addarticles",
            path:"/addarticle",
            component:Addarticle
            },
            {

                name:"editarticle",
                path:"/editarticle/:id",
                component:Editarticle
                },

                {
                    name:"Viewarticletable",
                    path:"/articletable",
                    component:Viwearticletable
                    },
                    {
                        name: 'editCategory',
                        path: '/editCategory/:id',

                        component: EditCategory
                        }







]
