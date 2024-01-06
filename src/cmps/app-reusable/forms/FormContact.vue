<template>
    <Form class="form-contact-container flex justify-center" @submit="onSubmit" :validation-schema="schema"
        :initial-values="initialValues">
        <section class="form-contact">
            <section class="picture-container flex justify-center">
                <section class="picture">
                    <!-- <IconHandler :name="ICON_DEFAULT_USER" /> -->
                    <img :src="initialValues.picture.large" alt="contact">
                </section>
            </section>
            <section class="details">
                <section class="name-container flex gap-10">
                    <label for="name">Name: </label>
                    <section class="full flex">
                        <Field class="width-100-percent" name="name" type="text" placeholder="Enter name"
                            autocomplete="off" />
                        <section class="error-container">
                            <ErrorMessage class="error clr-gray-0" name="name" />
                        </section>
                    </section>
                </section>
                <section class="email-container flex gap-10">
                    <label for="email">Email: </label>
                    <section class="full flex">
                        <Field class="width-100-percent" name="email" type="text" placeholder="Enter email"
                            autocomplete="off" />
                        <section class="error-container">
                            <ErrorMessage class="error clr-gray-0" name="email" />
                        </section>
                    </section>
                </section>
                <section class="phone-container flex gap-10">
                    <label for="phone">Phone: </label>
                    <section class="full flex">
                        <Field class="width-100-percent" name="phone" type="text" placeholder="Enter phone"
                            autocomplete="off" />
                        <section class="error-container">
                            <ErrorMessage class="error clr-gray-0" name="phone" />
                        </section>
                    </section>
                </section>
            </section>
            <section class="btn-container flex justify-center">
                <button class="btn-save" type="submit">Save</button>
                <!-- <button type="button">Random Button</button> -->
            </section>
        </section>
    </Form>
</template>


<!-- TODO: make form submit update the database (aka local-storage) with the new contact -->
<!-- TODO: make validation schema for email only (phone number are currently inconsistent in format) -->


<script setup>
import IconHandler from '@/cmps/app-reusable/IconHandler.vue'
import { ICON_DEFAULT_USER } from '@/services/icon-handler.service'
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'

const schema = yup.object({
    name: yup.string().required().min(1).max(20).matches(
        /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
        'Name can only contain Latin letters.'
    )
})
const props = defineProps({
    initialValues: Object
})
const initialValues = props.initialValues
const emit = defineEmits(['onSubmit'])

function onSubmit(params) {
    console.log('Hi from onSave - params', params)
    // emit('onSave', params)
}
</script>


<style lang="scss">
.form-contact-container {
    & .form-contact {
        min-width: 300px;

        & .picture-container {
            margin-block: 20px 40px;

            & .picture {
                border-radius: 50%;
                overflow: hidden;
                width: 128px;
                height: 128px;
            }
        }

        & .details {
            &>*:not(:first-child) {
                margin-block-start: 8px;
            }

            & label {
                width: 50px;
            }
        }

        & .btn-container {
            margin-block-start: 20px;
        }
    }
}
</style>