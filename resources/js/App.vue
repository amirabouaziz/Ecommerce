


<script setup>
    import Menu from './components/Menu.vue';
    </script>
    <template>
        <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse">
        <div class="navbar-nav">
        
            <router-view> <Menu/></router-view>
        
     
        
        </div>
        </div>
        </nav>
        <router-view> </router-view>
        </div>
        </template>
        <script>
        export default {}
        </script>
    