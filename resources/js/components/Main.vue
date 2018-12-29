<template>
    <div id="main">
        <div class="mb-4">
            <Header/>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Header from './Header.vue';

    export default {
        name: 'main-app',
        components: {Header}
    }
</script>
