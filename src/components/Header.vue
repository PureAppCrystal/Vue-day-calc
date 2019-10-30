<template>
<div id="header" :style="isModify ? modifyStyle : ''">
    <!-- back -->
    <v-btn  id="btnPlus"  @click="goList()"  v-show="btnBack"
        absolute  left  dark text icon  color="white" 
    >
        <v-icon>keyboard_arrow_left</v-icon>
    </v-btn>

    <!-- 나가기 -->
    <v-btn  id="btnPlus"  @click="goBack()"  v-show="isModify"
        absolute  left  dark text icon  color="black" 
    >
        <v-icon>close</v-icon>
    </v-btn>

    <!-- 제목 -->
    {{title}}

    <!-- 메뉴 -->
    <v-btn id="btnPlus" @click="showMenu()" v-show="btnMenu"
        absolute right text icon color="white" >
        <v-icon>more_horiz</v-icon>
    </v-btn>

    <!-- 저장 -->
    <v-btn id="btnPlus" @click="showMenu()" v-show="isModify"
        absolute right text icon color="red" >
        저장
    </v-btn>
</div>

</template>

<script>
import {mapState, mapActions, mapMutations, mapGetters } from 'vuex'
export default {
    name: 'header',
    data() {
        return {
            title: "THE DAY BEFORE",
            modifyStyle: {
                height: '100%',
                backgroundColor: 'white',
                borderBbottomSstyle: 'solid',
                borderWidth: '0.1px',
                borderColor: 'gray',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'black',
                fontWeight: '650',
                padding: '1rem'
            }
        }
    },
    computed: {
        ...mapGetters({
            pageType: 'day/getPageType',
            pageSubType: 'day/getPageSubType',
        }),
        isModify() {
            return this.pageType === "insert" || this.pageType === "update"
            //return this.pageType in ["insert", "update"]
        },
        btnBack() {
            return this.pageType === "detail"
        },
        btnMenu() {
            return !(this.isModify);
        },
        
        
    },
    methods: {
        ...mapMutations({
            setIsMenuList: 'user/setIsMenuList',
            setIsMenuDetail: 'user/setIsMenuDetail',
        }),
        goList: function() {
            console.log("====== goList ======")
            this.$router.push("/dayCalc/list")
        },
        showMenu: function() {
            console.log("====== showMenu() ======")
            const { pageType } = this;
            console.log("pageType : ", pageType)
            if ( pageType == 'list' ) {
                this.setIsMenuList(true);
            } else if ( pageType == 'detail' ) {
                this.setIsMenuDetail(true);
            }
        },
        goBack: function() {
            console.log("====== goBack ======")
            this.$router.back();
        },
        doSave: function() {
            console.log("====== doSave ======")
        }
    }
}
</script>

<style scoped>

#header {
    height: 100%;
    background-color: rgb(231, 68, 68);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 650;
}
</style>