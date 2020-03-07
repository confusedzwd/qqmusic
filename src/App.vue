<template>
    <div id="app">
        <m-header></m-header>
        <tab></tab>
        <router-view></router-view>
        <player></player>
    </div>
</template>

<script>
    import Mheader from "./components/m-header/m-header.vue"
    import tab from "./components/tab/tab";
    import player from "./components/player/player";
    export default {
        name: 'app',
        components: {
            "m-header":Mheader,
            tab,
            player
        }
    }
</script>

<style lang="stylus" scoped>
    @import "./common/stylus/variable.styl"

    #app
        color: $color-theme

</style>