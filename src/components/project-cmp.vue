<template>
<section class="project-cmp">
    <a :href="projectData.link">
        <img :src="projectData.img">
        <div class="container">
            <h3>{{projectData.title}}</h3>
            <p>{{projectData.tagLine}}</p>
            <ul class="tecnologys">
                <li class="tecnology" v-for="(tecnology) in projectData.tecnologyList" :key="tecnology">
                    {{tecnology}}
                </li>
            </ul>
        </div>
    </a>
</section>
</template>

<script>
export default {
    props: {
        projectData: Object
    }
}
</script>

<style>

</style>
