<template>
<section class="contact-cmp">
    <h3>
        Contact Me
    </h3>
    <form @submit.prevent="submit">
        <input type="text" placeholder="Name" v-model="name">
        <input type="email" placeholder="Email" v-model="email">
        <input type="text" placeholder="Subject" v-model="subject">
        <textarea cols="30" rows="10" placeholder="Message" v-model="message"></textarea>
        <button>Send</button>
    </form>
</section>
</template>

<script>
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
        submit() {
            console.log('test :>> ');
        }
    },
}
</script>

<style>

</style>
