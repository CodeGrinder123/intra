<template>
    <div v-if="form_counter == 2">
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
                    <NextBtn @click="btn_prev"/>
                    <p class="text-question">Question 2 out of 7</p>
                </div>

                <!-- Question 2 -->
                <h2 style="text-align: center;">Where do you live?</h2>
                <div class="select-container">
                    <select id="places" style="height: 60px;">
                        <option selected disabled>Choose your Region</option>
                        <option>Bangsamoro Autonomous Region</option>
                        <option>Bicol Region</option>
                        <option>Cagayan Valley</option>
                        <option>Central Luzon</option>
                        <option>Central Visayas</option>
                        <option>Cordillera Administrative Region</option>
                        <option>Davao Region</option>
                        <option>Eastern Visayas</option>
                        <option>Ilocos Region</option>
                        <option>National Capital Region</option>
                        <option>Northern Mindanao</option>
                        <option>SOCCSKARGEN</option>
                        <option>Soutwestern Tagalog Region</option>
                        <option>Western Visayas</option>
                        <option>Zamboanga Peninsula</option>
                    </select>
                </div>
                <!-- Navigation Buttons -->
                <div class="button-alignment">
                    <button class="button-pages" style="border-radius: 10px;" @click="btn_clicker">Next</button>
                </div>
            </div>
        </div>
    </div>
    <div v-else-if="form_counter == 3">
        <MainContainers_two/>
    </div>
    <div v-else-if="form_counter == 1">
        <MainContainers/>
    </div>
</template>
<script>
import MainContainers_two from './MainContainers_two.vue'
import MainContainers from './MainContainers.vue'

export default{
    components:{
        MainContainers,
        MainContainers_two,
    },

    data(){
        return{
            form_counter: 2,
        }
    },

    methods: {
        btn_clicker(){
            this.form_counter++;
            console.log(this.form_counter);
        },

        btn_prev(){
            // try{
            //     this.$router.push({name: 'one'});
            // } catch {
            //     console.log("Navigation failed");
            // }
        }
    }
}
</script>

<style>
select:focus{
    outline: 1px solid #006eff;
}

select{
    width: 50%;
    padding: 12px, 20px;
    margin: 8px, 0;
    border-radius: 4px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    margin-top: 20px;
    margin-bottom: 36px;
}
</style>