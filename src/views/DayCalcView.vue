<template>
<div id="day-calc">
    <div id="div-header">
        <Header></Header>
    </div>
    <div id="div-content">
        <!-- <DayList></DayList> -->
        <router-view></router-view>
    </div>
</div>
</template>

<script>
// import {mapState, mapActions, mapMutations, mapGetters } from 'vuex'
import Header from '@/components/Header'
// import DayList from '@/views/DayCalcListView'
export default {
    name: 'dayCalcView',
    components: {
        Header,
        // DayList
    },
    data() {
        return {
            
        }
    },
    computed: {

    },
    methods: {

    },
    mounted() {

    }
}
</script>

<style scoped>
#day-calc {
    background-color:rgb(238, 238, 238);
    height: 100%;
    /* display: block; */
}

#div-header {
    
    
    height: 10%;
    /* height: 3rem; */
    /* display: inline-block; */
    /* position: sticky; */
    /* top: 0; */
    
    
}

#div-content {
    height: 90%;
    /* flex: 1; */
    /* padding: 1rem; */
    background-color:rgb(238, 238, 238);
    overflow: scroll;
    /* overflow: hidden; */
}

</style>