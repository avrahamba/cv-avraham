<template>
<div class="ta-shma">
    <nav-bar :show="false"></nav-bar>
    <div class="container">
    <h1>Ta-Shma, a Modular Torah Database</h1>

    <img src="../assets/imgs/ta-shma/auto.png">

    <h2>Includes a Microsoft Word plugin</h2>
    <img src="../assets/imgs/ta-shma/word plug-in.png">
    <p>Using the VSTO Framework to Build Office plugins for Office at C#.</p>

    <h2>Desktop Application</h2>
    <img src="../assets/imgs/tashma1.png">
    <p>The whole system is also built as a WPF desktop app. Technology very similar to web-components.</p>

    <h2>API interfacing to PHP server</h2>
    <img src="../assets/imgs/ta-shma/download-book.png">
    <p>The local repository is modular, and parts of the repository need to be downloaded.</p>

    <h2>Talk pages</h2>
    <img src="../assets/imgs/ta-shma/forum.png">
    <p>As part of the system, a stack overflow style forum is connected to each part of the repository. The API is interfaced with the PHP MYSQL server that manages user and post system.</p>

    <h2>Multiple screens</h2>
    <img src="../assets/imgs/ta-shma/molti-screen.png">
    <p>The software supports a back up display to show the base book and up to 5 sails on it.</p>

    <h2>Search Engine</h2>
    <img src="../assets/imgs/ta-shma/find.png">
    <p>Search engine with different levels of "free search".</p>

    <h2>Auto-correct</h2>
    <img src="../assets/imgs/ta-shma/find.png">
    <p>Automatic completion algorithm for direct arrival at source.</p>
    <a class="download" href="https://jewishoffice.co.il/download/tashma">
        Download 
    </a>

    <div class="imgs">
        <img src="../assets/imgs/logos/cs.png" alt />
        <img src="../assets/imgs/logos/PHP.png" alt />
        <img src="../assets/imgs/logos/wpf.jpeg" alt />
        <img src="../assets/imgs/logos/JSON.png" alt />
        <img src="../assets/imgs/logos/mysql.png" alt />
        <img src="../assets/imgs/logos/SQLite.png" alt />
    </div>
      
    </div>

    <footer-cmp></footer-cmp>
</div>
</template>

<script>
import navBar from "../components/nav-bar";
import footerCmp from '../components/footer-cmp';
export default {
    components: {
        navBar,
        footerCmp
    }
};
</script>

<style lang="scss" scoped>
</style>
