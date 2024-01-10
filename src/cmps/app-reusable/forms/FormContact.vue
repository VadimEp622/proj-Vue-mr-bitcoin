<template>
    <Form class="form-contact-container flex justify-center" @submit="onSubmit" :validation-schema="schema"
        :initial-values="initialValues">
        <section class="form-contact">
            <section class="picture-container flex justify-center">
                <section class="picture">
                    <img v-if="initialValues?.picture" :src="initialValues.picture.large" alt="contact">
                    <IconHandler v-else :name="ICON_DEFAULT_USER" />
                </section>
            </section>
            <section class="details">
                <section class="name-container flex gap-10">
                    <label for="name" class="clr-gray-2">Name: </label>
                    <section class="full">
                        <Field class="width-100-percent" name="name" type="text" placeholder="Enter name"
                            autocomplete="off" />
                        <Transition>
                            <ErrorMessage class="error clr-gray-0 dis-block clr-red-0" name="name" />
                        </Transition>
                    </section>
                </section>
                <section class="email-container flex gap-10">
                    <label for="email" class="clr-gray-2">Email: </label>
                    <section class="full">
                        <Field class="width-100-percent" name="email" type="text" placeholder="Enter email"
                            autocomplete="off" />
                        <Transition>
                            <ErrorMessage class="error clr-gray-0 dis-block clr-red-0" name="email" />
                        </Transition>
                    </section>
                </section>
                <section class="phone-container flex gap-10">
                    <label for="phone" class="clr-gray-2">Phone: </label>
                    <section class="full">
                        <Field class="width-100-percent" name="phone" type="text" placeholder="Enter phone"
                            autocomplete="off" />
                        <Transition>
                            <ErrorMessage class="error clr-gray-0 dis-block clr-red-0" name="phone" />
                        </Transition>
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


<script setup>
import IconHandler from '@/cmps/app-reusable/IconHandler.vue'
import { ICON_DEFAULT_USER } from '@/services/icon-handler.service'
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'

const schema = yup.object({
    name: yup.string().required('required').max(20).matches(
        /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
        'name can only contain Latin letters.'
    ),
    email: yup.string().required('required').min(3).max(30).matches(
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi,
        'enter valid email'
    ),
    phone: yup.string().required('required').min(1).max(20, 'phone number must be at most 20 characters')
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


<style lang="scss">
.form-contact-container {
    & .form-contact {
        width: 300px;
        max-width: 300px;

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

            & .error-container {
                transform-origin: top;

                & .error {
                    word-break: break-all;
                }
            }
        }

        & .btn-container {
            margin-block-start: 20px;
        }

    }

    & .v-enter-active,
    & .v-leave-active {
        transition:
            scale 0.3s ease-in-out,
            opacity 0.3s ease-in-out;
    }

    & .v-enter-from,
    & .v-leave-to {
        scale: 1 0;
        opacity: 0;
    }
}
</style>