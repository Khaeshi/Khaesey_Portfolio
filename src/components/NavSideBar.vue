<script setup lang="ts">

</script>

<template>
   <div>

   </div>
</template>

<style scoped>
.nav-sidebar {
    width: 250px;
    background-color: #f5f5f5;
    padding: 2rem;
    height: 100vh;
    border-right: 1px solid #e0e0e0;
}

.nav-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.nav-content h2 {
    margin: 0;
    color: #333;
}

.nav-content ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.nav-content li {
    margin-bottom: 1rem;
}

.nav-content a {
    color: #666;
    text-decoration: none;
    transition: color 0.3s ease;
}

.nav-content a:hover {
    color: #333;
}
</style>