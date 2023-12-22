<script setup>
import TheFooter from './components/TheFooter.vue';
import TheNavbar from './components/TheNavbar.vue';
</script>

<template>
    <!-- Navbar -->
    <TheNavbar />
    <router-view />
    <!-- Footer -->
    <TheFooter />
</template>

<style scoped>
/*  */
</style>
