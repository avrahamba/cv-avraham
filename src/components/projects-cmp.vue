<template>
<section class="projects-cmp">
    <project-cmp v-for="(projectData) in projectsData" :key="projectData.title" :projectData="projectData"></project-cmp>
</section>
</template>

<script>
import projectCmp from './project-cmp';
import tashmaImg from '@/assets/imgs/tashma1.png';
import jello from '@/assets/imgs/jello.png';
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
