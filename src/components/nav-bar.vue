<template>
<section class="nav-bar" :class="scroll">
    <router-link to="/">
        <h2 class="logo">Avraham</h2>
    </router-link>
    <ul class="link-ul" v-if="show">
        <a href="#home">
            <li class="link-li">
                Home
            </li>
        </a>
        <a href="#about">
            <li class="link-li">
                About
            </li>
        </a>
        <a href="#projects">
            <li class="link-li">
                Projects
            </li>
        </a>
        <a href="#contact">
            <li class="link-li">
                Contact
            </li>
        </a>
    </ul>
</section>
</template>

<script>
export default {
    props: {
        show: Boolean,
    },
    data() {
        return {
            scrollPosition: false
        };
    },
    methods: {
        handleScroll() {
            this.scrollPosition = !!window.scrollY;
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('hashchange', function () {
            window.scrollTo(window.scrollX, window.scrollY - 105);
        });
    },
    computed: {
        scroll() {
            return {
                scroll: this.scrollPosition
            };
        }
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
}
</script>

<style>

</style>
