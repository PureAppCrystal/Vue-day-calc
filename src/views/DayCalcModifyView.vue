<template>
<div id="dayDetail">
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
export default {
    name: 'dayDetail',
    components: {
        Header
    },
    data()  {
        return {

        }
    },
    computed: {

    },
    methods: {
        ...mapMutations({
            setPageType: 'day/setPageType'
        }),
    },
    mounted() {
        console.log("====== DayCalcModify mounted ======")
        const pageType = this.$route.params.pageType;
        if (pageType !== undefined ) {
            this.setPageType(pageType)
        } else {
            const pathList = this.$route.path.split('/');
            const lastPath = pathList[pathList.length-1];
            this.setPageType(lastPath)
            
        }
        
    },
    updated() {
        console.log("====== DayCalcDetailView updated ======")
        
    }
}
</script>

<style scoped>

#dayDetail {
    height: 100%;
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
    /* background-color:rgb(238, 238, 238); */
    overflow: scroll;
    /* overflow: hidden; */
}
</style>