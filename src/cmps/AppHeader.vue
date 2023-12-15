<script>
export default {
}
</script>

<template>
    <header class="app-header flex space-between align-center bg-clr-blue-0 white-space-nowrap">
        <section class="logo fs34 fw800 clr-gold-0">
            <RouterLink to="/" class="flex"><span class="pd-10">Mr. Bitcoin</span></RouterLink>
        </section>
        <nav class="fs25 fw600 clr-gray-0">
            <ul class="flex">
                <li>
                    <RouterLink to="/" class="flex pos-rel"><span class="pd-in-10 pd-bl-15">Home</span></RouterLink>
                </li>
                <li>
                    <RouterLink to="/trading-data" class="flex pos-rel"><span class="pd-in-10 pd-bl-15">Trading</span>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/my-profile" class="flex pos-rel"><span class="pd-in-10 pd-bl-15">Profile</span>
                    </RouterLink>
                </li>
                <!-- <li>
                    <RouterLink to="/about" class="flex pos-rel"><span class="pd-in-10 pd-bl-15">About</span></RouterLink>
                </li> -->
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
header {
    & nav a {
        &:is(.router-link-active, .router-link-exact-active) {
            &::after {
                position: absolute;
                content: "";
                height: 3px;
                width: 100%;
                background-color: #dcdcdc;
                bottom: 0;
                left: 0;
            }
        }

        &:hover {
            background-color: #858f7e;
        }
    }
}
</style>
