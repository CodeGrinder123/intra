<template>
    <div v-if="form_counter == 1">
        <div class="row">
            <div class="column-left" style="background-image: linear-gradient(to bottom right, #38425A, #F0584E);">
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

                <div style="margin-top: 40px">
                    <div class="dot-container">
                        <div class="dot-col">
                            <span class="dot-active"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                        </div>
                    </div>

                    <div class="dot-text-container">
                        <p class="dot-subtext">Basic Information</p>
                        <p class="dot-subtext">Survey</p>
                        <p class="dot-subtext">Personal Information</p>
                    </div>
                </div>
            </div>

            <div class="column-right" style="background-color: white;">
                <!-- Question counter -->
                <div class="button-arrangement">
                    <p class="text-question">Question 1 out of 7</p>
                </div>
                <!-- End of Question counter -->

                <!-- Question 1 -->
                <h2 style="text-align: center;">Are you a ...</h2>
                <div class="grid-container">
                    <div class="grid-item">
                        <button class="button-gender" @click="btn_clicker">Man</button>
                    </div>
                    <div class="grid-item">
                        <button class="button-gender" @click="btn_clicker">Woman</button>
                    </div>
                </div>
                <!-- End of Question 1 -->

                <!-- Navigation Buttons -->
                <div class="button-alignment">
                    <button class="button-pages" style="border-radius: 10px;" @click="btn_clicker">Next</button>
                </div>
            </div>
        </div>
    </div>
    <div v-else-if="form_counter == 2">
        <MainContainers_one/>
    </div>
</template>
<script>
import MainContainers_one from './MainContainers_one.vue'
export default{
    components:{
        MainContainers_one,
    },

    data(){
        return{
            form_counter: 1,
        }
    },

    methods: {
        btn_clicker(){
            this.form_counter++;
            console.log(this.form_counter);
        },
    }
}
</script>