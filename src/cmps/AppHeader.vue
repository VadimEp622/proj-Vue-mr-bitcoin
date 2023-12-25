<template>
    <header class="app-header flex space-between align-center bg-clr-blue-0 white-space-nowrap">
        <section class="logo fs34 fw800 clr-gold-0 flex height-100-percent">
            <RouterLink to="/" class="flex align-center pd-10"><span>Mr. Bitcoin</span></RouterLink>
        </section>
        <nav class="fs25 fw600 clr-gray-0 height-100-percent">
            <ul class="flex height-100-percent">
                <li class="flex">
                    <RouterLink to="/" class="flex align-center pos-rel pd-in-10 pd-bl-15">
                        <span>Home</span>
                    </RouterLink>
                </li>
                <li class="flex">
                    <RouterLink to="/trading-data" class="flex align-center pos-rel pd-in-10 pd-bl-15">
                        <span>Trading</span>
                    </RouterLink>
                </li>
                <li class="flex">
                    <RouterLink to="/my-profile" class="flex align-center pos-rel pd-in-10 pd-bl-15">
                        <span>Profile</span>
                    </RouterLink>
                </li>
                <!-- <li class="flex"><RouterLink to="/about" class="flex align-center pos-rel pd-in-10 pd-bl-15"><span>About</span></RouterLink></li> -->
            </ul>
        </nav>
    </header>
</template>


<script>
export default {
}
</script>


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
