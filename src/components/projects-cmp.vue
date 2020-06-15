<template>
<section class="projects-cmp">
    <project-cmp v-for="(projectData) in projectsData" :key="projectData.title" :projectData="projectData"></project-cmp>
</section>
</template>

<script>
import projectCmp from './project-cmp';
import tashmaImg from '@/assets/imgs/tashma1.png';
import jello from '@/assets/imgs/jello.png';
import appsus from '@/assets/imgs/appsus.png';
import memegen from '@/assets/imgs/memegen.png';
import misterbitcoin from '@/assets/imgs/misterbitcoin.png';
export default {

    data() {
        return {
            projectsData: [{
                    title: 'Ta-Shma',
                    img: tashmaImg,
                    link:'tashma',
                    tecnologyList: ['C#','WPF','sqlite','VSTO','PHP','SQL','OOP'],
                    tagLine: 'A modular database, which I designed and implemented myself for about 3 years'
                },
                {
                    title: 'Jello',
                    img: jello,
                    link:'https://jello-app.herokuapp.com',
                    tecnologyList: ['VUE','SCSS','NODE.JS','mongoose'],
                    tagLine: 'Realization of Trello'
                },
                {
                    title: 'Appsus',
                    img: appsus,
                    link:'https://avrahamba.github.io/appsus/',
                    tecnologyList: ['VUE','SCSS', 'API'],
                    tagLine: 'Realization of Google Keep and Front-End Email'
                },
                {
                    title: 'Meme-generator',
                    img: memegen,
                    link:'https://avrahamba.github.io/Meme-generator/',
                    tecnologyList: ['HTML', 'CSS', 'Vanilla JavaScript','Canvas'],
                },
                {
                    title: 'Misterbitcoin',
                    img: misterbitcoin,
                    link:'https://avrahamba.github.io/mister-bitcoin-angular/',
                    tecnologyList: ['React/Angular','SCSS','PWA'],
                    tagLine: 'Front-End Bitcoin wallet'
                },
            ]
        }
    },

    components: {
        projectCmp
    }
}
</script>

<style>

</style>
