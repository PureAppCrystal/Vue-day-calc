<template>
<div id="dayDetail">
    <div id="div-header">
        <ModifyHeader></ModifyHeader>
    </div>
    <div id="div-content">
        <!-- <DayList></DayList> -->
        <router-view></router-view>
    </div>
</div>    
</template>

<script>
import ModifyHeader from '@/components/ModifyHeader'
export default {
    name: 'dayDetail',
    components: {
        ModifyHeader
    },
    data()  {
        return {

        }
    },
    computed: {

    },
    methods: {

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