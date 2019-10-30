<template>
<div id="dayDetail">
    DayDetail
</div>    
</template>

<script>
import {mapState, mapActions, mapMutations, mapGetters } from 'vuex'
export default {
    name: 'dayDetail',
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
        console.log("====== DayCalcDetailView mounted ======")
        this.setPageType("detail")
    },
    
}
</script>

<style scoped>

</style>