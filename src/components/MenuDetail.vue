<template>
<v-dialog v-model="isMenuDetail" persistent max-width="600px">
    <v-card>
        <v-card-title>
        <span class="headline">Detail Popup Menu</span>
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
    name: 'menuDetail',
    props: ['isMenuDetail'],
    data() {
        return {
            // dialog: true,
        }
    },
    computed: {

    },
    methods: {
        ...mapMutations({
            setIsMenuDetail: 'user/setIsMenuDetail'
        }),
        close: function() {
            console.log("====== menuDetail close ======")
            this.setIsMenuDetail(false);
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