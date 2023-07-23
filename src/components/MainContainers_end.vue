<template>
    <div v-if="this.form_counter == 0">
        <div class="row">
            <div class="column-left" style="background-image: linear-gradient(to bottom right, #38425A, #F0584E); border-radius: 10px;">
                <div class="logo-center">
                    <div class="logo-container">
                        <div class="logo-icon">
                            <img src="../assets/logo_white.png" width="36px" height="28px" style="padding-right: 5px;">
                        </div>
                        &nbsp;
                        <div class="logo-text">
                            <p style="color: white;"><strong>Intra Research</strong></p>
                        </div>
                    </div>
                </div>

                <div style="margin-top: 80px; margin-bottom: 100px">
                    <div class="dot-container">
                        <div class="dot-col" style="margin-top: 0px">
                            <div>
                                <h1 style="color: white;">
                                    <strong>
                                        Great job! You're all set!
                                    </strong>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else-if="this.form_counter == 1">
        <MainContainers/>
    </div>
</template>
<script>
import MainContainers from './MainContainers.vue'
export default{
    components:{
        MainContainers,
    },

    data(){
        return{
            form_counter: 0,
        }
    },

    methods: {
        btn_clicker(){
            this.form_counter++;
            console.log(this.form_counter);
        }
    }
}

</script>

<style>
.btn-center{
    display: flex;
    justify-content: center;
    align-items: center;
}

.start-btn{
    background-color: #38425A;
    border: none;
    color: white;
    padding: 15px;
    width: 40%;
    cursor: pointer;
    margin-top: 20px;
    border-radius: 30px;
}

.start-btn:hover{
    background-color: #232938;
}

</style>