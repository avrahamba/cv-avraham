<template>
<section class="home-cmp">
    <div class="txt">
        <h2>
            Hey, I am
        </h2>
        <h1>
            Avaraham Ben-Arosh
        </h1>
        <h2>
            Fullstack / Front End Developer
        </h2>
        <p>
            Passionate about solving problems and overcoming challenges, with experience in building single page applications using the latest web technologies.
        </p>
    </div>
    <img :src="img" alt="">
</section>
</template>

<script>
import moduleName from '../../src/assets/imgs/avraham.jpg';
export default {
    data() {
        return {
            img: moduleName
        }
    },
}
</script>

<style>

</style>
