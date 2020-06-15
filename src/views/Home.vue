<template>
<section class="home">
    <nav-bar :class="scroll"></nav-bar>
    <home-cmp id="home" class="container"></home-cmp>
    <div class="about container" id="about">
        <what-offer></what-offer>
        <about-me></about-me>
    </div>
    <projects-cmp id="projects" class="container"></projects-cmp>
    <contact-cmp id="contact" class="container"></contact-cmp>
    <footer-cmp></footer-cmp>
</section>
</template>

<script>
// @ is an alias to /src
import aboutMe from '../components/about-me';
import contactCmp from '../components/contact-cmp';
import homeCmp from '../components/home-cmp';
import projectsCmp from '../components/projects-cmp';
import whatOffer from '../components/what-offer';
import navBar from '../components/nav-bar';
import footerCmp from '../components/footer-cmp';
export default {
    name: 'Home',
    data() {
        return {
            scrollPosition: false,
        }
    },
    methods: {
        handleScroll() {
            this.scrollPosition = !!window.scrollY
        },
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener("hashchange", function () {
            window.scrollTo(window.scrollX, window.scrollY - 105);
        });
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    computed: {
        scroll() {
            return {
                scroll: this.scrollPosition,
            }
        }
    },
    components: {
        homeCmp,
        projectsCmp,
        aboutMe,
        contactCmp,
        whatOffer,
        navBar,
        footerCmp
    }
}
</script>
