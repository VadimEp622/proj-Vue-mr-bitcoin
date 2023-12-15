<script>
export default {
}
</script>

<template>
    <header class="app-header flex space-between align-center">
        <section class="logo fs34">
            <RouterLink to="/" class="flex"><span class="pd-10">Mr. Bitcoin</span></RouterLink>
        </section>
        <nav class="flex fs25">
            <RouterLink to="/"><span>Home</span></RouterLink>
            <RouterLink to="/trading-data"><span>Trading</span></RouterLink>
            <!-- <RouterLink to="/about"><span>About</span></RouterLink> -->
            <RouterLink to="/my-profile"><span>Profile</span></RouterLink>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: map-get($map-clr, 'main-blue', 'blue-0');
    white-space: nowrap;

    & .logo {
        font-weight: 800;
        color: map-get($map-clr, 'main-gold', 'gold-0');
    }
}
</style>
