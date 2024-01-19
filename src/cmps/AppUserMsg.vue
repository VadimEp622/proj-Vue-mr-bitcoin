<template>
    <Transition>
        <section v-if="msg" class="user-msg" :class="msgClass">
            <p>{{ msg.txt }}</p>
        </section>
    </Transition>
</template>

<script>
import { eventBus } from '@/services/event-bus.service.js'

export default {
    data() {
        return {
            msg: null,
        }
    },
    methods: {
        showMsg(msg) {
            this.msg = msg
            setTimeout(() => (this.msg = null), msg.timeout || 1500)
        },
    },
    computed: {
        msgClass() {
            return {
                success: this.msg.type === 'success',
                fail: this.msg.type === 'fail',
            }
        },
    },
    created() {
        this.unListen = eventBus.on('userMsg', this.showMsg)
    },
    unmounted() {
        this.unListen()
    },
}
</script>

<!-- TODO: improve user-msg styling -->
<!-- TODO: make user-msg be a fixed distance from top of device viewport, and not of page -->

<style lang="scss">
.user-msg {
    transform-origin: top;
}

.v-enter-active,
.v-leave-active {
    transition: 0.8s ease;
}

.v-enter-from,
.v-leave-to {
    scale: 1 0;
    opacity: 0;
}
</style>
