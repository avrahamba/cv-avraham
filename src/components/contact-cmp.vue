<template>
<section class="contact-cmp">
    <h3>
        CONTACT ME
    </h3>
    <form @submit.prevent="onSubmit" ref="contactForm" class="contact-form">
        <input class="name" type="text" placeholder="Name" name="name" v-model="name">
        <input class="email" type="email" placeholder="Email" name="email" v-model="email">
        <input class="subject" type="text" placeholder="Subject" name="subject" v-model="subject">
        <textarea cols="30" rows="10" placeholder="Message" name="message" v-model="message"></textarea>
        <button>Send</button>
    </form>

</section>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
export default {
    data() {
        return {
            name: '',
            email: '',
            subject: '',
            message: '',
        }
    },
    methods: {
        onSubmit() {
            var data = new FormData(this.$refs.contactForm);
            this.ajax(data, this.success, this.error);
        },
        success() {
            Swal.fire(
                'Thank You!',
                '',
                'success'
            )
        },
        error() {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        },
        ajax(data, success, error) {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://formspree.io/moqkwrde');
            xhr.setRequestHeader("Accept", "application/json");
            xhr.onreadystatechange = function () {
                if (xhr.readyState !== XMLHttpRequest.DONE) return;
                if (xhr.status === 200) {
                    success(xhr.response, xhr.responseType);
                } else {
                    error(xhr.status, xhr.response, xhr.responseType);
                }
            };
            xhr.send(data);
        }
    },
}
</script>

<style>

</style>
