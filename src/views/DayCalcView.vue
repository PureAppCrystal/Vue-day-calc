<template>
<div id="day-calc">
    <MenuList :isMenuList="isMenuList"></MenuList>
    <MenuDetail :isMenuDetail="isMenuDetail"></MenuDetail>
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
import {mapState, mapActions, mapMutations, mapGetters } from 'vuex'
import Header from '@/components/Header'
import MenuList from '@/components/MenuList'
import MenuDetail from '@/components/MenuDetail'
// import DayList from '@/views/DayCalcListView'
export default {
    name: 'dayCalcView',
    components: {
        Header,
        MenuList,
        MenuDetail,
        // DayList
    },
    data() {
        return {
            // isMenuList: true,
        }
    },
    computed: {
        ...mapGetters({
            isMenuList: 'user/getIsMenuList',
            isMenuDetail: 'user/getIsMenuDetail',
        })

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