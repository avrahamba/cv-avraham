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
                    title: 'תא-שמע',
                    img: tashmaImg,
                    link:'aa',
                    tecnologyList: ['C#','WPF','sqlite','VSTO','PHP','SQL','OOP'],
                    tagLine: 'מאגר מידע מודולרי, שתכננתי וממשתי בעצמי במשך כ-3 שנות עבודה'
                },
                {
                    title: 'Jello',
                    img: jello,
                    link:'https://jello-app.herokuapp.com/5e819edc67a5a42c344b3e61',
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
