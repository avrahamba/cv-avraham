<template>
<section class="home">
    <nav-bar :show="true"></nav-bar>
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
