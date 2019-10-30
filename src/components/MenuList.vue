<template>
<v-dialog v-model="isMenuList" persistent max-width="600px">
    <v-card>
        <v-card-title>
        <span class="headline">List Popup Menu</span>
        </v-card-title>
        <v-card-text>
            <v-container>
            </v-container>
        </v-card-text>
        <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="close()">Close</v-btn>
        </v-card-actions>
    </v-card>
</v-dialog>
</template>


<script>
import {mapState, mapActions, mapMutations, mapGetters } from 'vuex'
export default {
    name: 'menuList',
    props: ['isMenuList'],
    data() {
        return {
            // dialog: true,
        }
    },
    computed: {

    },
    methods: {
        ...mapMutations({
            setIsMenuList: 'user/setIsMenuList'
        }),
        close: function() {
            console.log("====== menuList close ======")
            this.setIsMenuList(false);
        }
    },
    mounted() {

    },
    created() {

    }
}
</script>


<style scoped>

</style>