<template>
    <div>
        <router-link :to="{name: 'Addcategorie'}" class="btn btn-danger">New categorie</router-link>

        <h2 class="text-center">Categories List</h2>
        <table class="table table">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Nom categories</th>
                    <th>Modifier</th>
                    <th>Supprimer</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="categorie in categories" :key="categorie.id">

                    <td>
                        <img
                            :src="categorie.imagecategorie"
                            :alt="categorie.nomcategorie"
                            width="70"
                            height="80"
                        />
                    </td>
                    <td>{{ categorie.nomcategorie }}</td>
                    <td>
                        <div class="btn-group" role="group">
                            <button
                                class="btn btn-warning" @click="modiferCategorie(categorie.id)"
                            >
                                Modifier
                            </button>
                        </div>
                    </td>
                    <td>
                        <div class="btn-group" role="group">
                            <button
                                class="btn btn-danger"
                                @click="deleteCategorie(categorie.id)"
                            >
                                Delete
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import axios from 'axios';//ijib les donner mn backend
import { ref, onMounted } from 'vue';//onMounted ki composent yeetcharjaa
const categories = ref([]);//tableau d'objet
/*
categories.value est une syntaxe spécifique à Vue.js pour accéder à la valeur
réelle stockée
dans une référence Vue. Lorsque vous utilisez ref pour créer une référence
réactive,
la valeur réelle est stockée dans la propriété .value de cette référence.
*/
const getCategories=async ()=> {
await axios
.get('http://localhost:8000/api/categories/')
.then((response)=>{
    categories.value = response.data
})//response fiha barcha hajet o5ra w ahna nhbo kn l res.data
.catch ((error) =>{
    console.log(error)
//console.error('Error fetching categories:', error);
});
}

onMounted(() => {
getCategories();
});
const deleteCategorie=async(id)=>{
await axios.delete(`http://localhost:8000/api/categories/${id}`)
.then(res=>console.log("catégorie supprimée"))
.catch(error=>{
    console.log(erreur)
})
}
</script>

<style lang="scss" scoped></style>
