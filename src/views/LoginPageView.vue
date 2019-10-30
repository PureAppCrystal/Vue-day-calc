<template>
<div id='loginPage'>
    <form @submit.prevent="handleSubmit">
        <img alt="Vue logo" src="@/assets/logo.png">
        <div id="title"> Login </div>
        <div id="row">
            <!-- <div id="label"> ID </div> -->
            <!-- <input type="text" autocomplete="off" v-model="username"/> -->
            <v-text-field label="ID" v-model="username"></v-text-field>
        </div>
        <div id="row">
            <!-- <div id="label"> PW </div> -->
            <!-- <input type="password" autocomplete="off" v-model="password"/> -->
            <v-text-field label="Password" v-model="password" type="password" autocomplete="off"></v-text-field>
        </div>
        <div id="row">
            <!-- <button type="submit"> Login </button> -->
            <v-btn type="submit" block="true" color="rgb(65,184,131,1)" :disabled="loginDisable" autocomplete="off">Login</v-btn>
        </div>
    </form>
</div>
</template>


<script>
// import {mapState, mapActions, mapMutations, mapGetters } from 'vuex'
import { mapActions, mapMutations, mapGetters } from 'vuex'
// import { userService } from '@/services';

export default {
    name: 'loginPageView',
    data() {
        return {
            username: "",
            password: "",
        }
    },
    computed: {
        ...mapGetters({
            loginInfo: 'user/getUserInfo'
        }),
        loginDisable() {

            const { username, password } = this;
            return !(username && password);
        }
    },
    methods: {
        
        ...mapActions('user', ['login']),
        
        handleSubmit: function() {
            console.log("====== login - handleSubmit ======")
            // 유효성검사
            const { username, password } = this;
            if ( username && password ) {
                // 로그인시도 
                const result = this.login({username, password })
                console.log("result : ", result)
            } else {
                // 유효성검사 실패
                console.log("invaild id&pwd")
                this.password=""
            }
        }
    },
    created() {
        console.log("====== LoginPage Created ======")
    },
    mounted() {
        
    },
    updated() {
        console.log("====== LoginPaged Udeated ======")
        console.log(" loginInfo : ", this.loginInfo)
        if ( this.loginInfo) {
            this.$router.push('/main')
        }
    }
    
}
</script>

<style scoped>
#loginPage {
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    text-align: center;
}
form {
    width: 80%;
    min-width: 228px;
    padding: 1rem;

    border-radius: 1rem;
    border-color:green;
    border-style: solid;
    border-width: 1px;
}

img {
    
}

#title {
    margin: 2rem;
    font-size: 2rem;
}
#row {
    
    display: flex;
    margin: 1rem;
}

#label {
    text-align: left;
    width: 20%;
}

input {
    flex: 1;
    min-width: 5rem;
}

button {
    /* margin-top: 1.5rem; */
    width: 50%;
}
</style>