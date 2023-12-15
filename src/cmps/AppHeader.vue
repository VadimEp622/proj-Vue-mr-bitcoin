<script>
export default {
}
</script>

<template>
    <header class="app-header">
        <RouterLink class="logo" to="/">Mr. Bitcoin</RouterLink>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/trading-data">Trading & Data</RouterLink>
            <!-- <RouterLink to="/about">About</RouterLink> -->
            <RouterLink to="/my-profile">My Profile</RouterLink>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
.logo {
    color: map-get($map-clr, 'main-gold', 'gold-0');
}
</style>
