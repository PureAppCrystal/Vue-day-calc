<template>
<div id="dayList">
    <div id="dayItem" v-for="day in dayList" :key="day.id">
        <div id="dayIcon">
            <v-icon :color="day.iconColor" class="material-icons">{{day.iconName }}</v-icon>
        </div>
        <div id="dayLeft">
            <div id="dayName">
                {{day.name}}
            </div>
            <div id="dayDate">
                {{day.date}}
            </div>
        </div>
        <div id="dayRight">
            398일
        </div>
    </div>

    <div id="btnPlus" @click="goInsert()">
        <div>
        +
        </div>
    </div>
</div>
</template>

<script>
import {mapState, mapActions, mapMutations, mapGetters } from 'vuex'
export default {
    name: 'dayCalcListView',
    components: {
    },
    data() {
        return {
            
        }
    },
    computed: {
        ...mapGetters({
            dayList: 'day/getDayList',
        })
    },
    methods: {
        goInsert: function() {
            console.log("====== goInsert ======")
            this.$router.push("/dayCalc/insert");
        }
    },
    mounted() {

    }
}
</script>

<style scoped>



#dayList {
    height: 100%;
    /* flex: 1; */
    /* padding: 1rem; */
    background-color:rgb(238, 238, 238);
    overflow: scroll;
    /* overflow: hidden; */
}

#dayItem {
    background-color: white;
    display: flex;
    
    
    height: 5rem;
    
    margin: 0.5rem;
    border-radius: 1rem;
    padding: 1rem;
}

#dayIcon {
    width: 10%;
    /* background-color: blue; */
    align-self: center;
}

#dayLeft {
    /* flex: 1; */
    width: 60%;
    text-align: left;
    padding-left: 1rem;
    padding-right: 1rem;
    align-self: center;
}

#dayName {
    font-size: 1rem;
    font-weight: 700;
    text-overflow:ellipsis;
    white-space:nowrap;
    overflow:hidden;
}

#dayDate {
    font-size: 0.6rem;
}

#dayRight {
    width: 20%;
    /* background-color: blue; */
    text-align: right;
    align-self: center;
    color:rgb(231, 68, 68);
    font-weight: 700;
}

#btnPlus {
    /* display: flex;
    justify-content: flex-end;
    align-self: flex-end;
    align-items: flex-end; */

    position: absolute; 
    right: 15px; 
    bottom: 15px;
    background-color: rgb(231, 68, 68, 0.4);
    width: 4rem;
    height: 4rem;
    border-radius: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 3.5rem;

    box-shadow: 0px 2px 2px 2px #999;
}

#btnPlus:hover{
    background-color: rgb(231, 68, 68);

}


</style>