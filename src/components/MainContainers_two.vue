<template>
    <div v-if="form_counter == 2">
        <MainContainers_one/>
    </div>
    <div v-else-if="form_counter == 3">
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
                    <p class="text-question">Question 3 out of 7</p>
                </div>
                <!-- End of Question counter -->

                <!-- Question 3 -->
                <h2 style="text-align: center; margin-bottom: 35px;">When were you born?</h2>
                <div class="date-container">
                    <div></div>
                    <div style="margin-bottom: 55px;">
                        <input type="date">
                    </div>
                    <div></div>
                </div>
                <!-- End of Question 3 -->
                <!-- Navigation Buttons -->
                <div class="button-alignment">
                    <button class="button-pages" style="border-radius: 10px;" @click="btn_clicker">Next</button>
                </div>
            </div>
        </div>
    </div>
    <div v-else-if="form_counter == 4">
        <MainContainers_three/>
    </div>
</template>
<script>
import MainContainers_three from './MainContainers_three.vue'
import MainContainers_one from './MainContainers_one.vue'
export default{
    components:{
        MainContainers_one,
        MainContainers_three,
    },

    data(){
        return{
            form_counter: 3,
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
<style>
.date-container{
    display: flex;
    justify-content: center;
    align-items: center;
}

input[type="date"] {
  width: 200px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
}

input[type="date"]::-webkit-datetime-edit {
  color: #444;
}

input[type="date"]:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

</style>