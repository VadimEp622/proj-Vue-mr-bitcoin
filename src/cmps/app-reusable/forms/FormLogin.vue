<template>
    <Form class="form-login-container flex justify-center" @submit="onSubmit" :validation-schema="schema"
        :initial-values="initialValues">
        <section class="form-login flex gap-10">
            <section class="name">
                <Field name="name" placeholder="Enter name" />
                <section class="error-container">
                    <ErrorMessage class="error clr-gray-0" name="name" />
                </section>
            </section>

            <button>Login</button>
        </section>

    </Form>
</template>
  
<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'

const schema = yup.object({
    name: yup.string().required().min(1).max(20)
})
const props = defineProps({
    initialValues: Object
})
const initialValues = props.initialValues
const emit = defineEmits(['onSubmit'])

function onSubmit(params) {
    emit('onSubmit', params)
}
</script>

<style lang="scss" scoped>
.form-login-container {
    & .error-container {
        position: relative;

        & .error {
            position: absolute;
        }
    }
}
</style>