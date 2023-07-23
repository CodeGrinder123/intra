<template>
    <div v-if="form_counter == 6">
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
                            <span class="dot"></span>
                            <span class="dot-active"></span>
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
                    <p class="text-question">Question 6 out of 7</p>
                </div>

                <!-- Question 4 -->
                <h2 style="text-align: center;" class="question-text">Should Philippines invest rather more into education or military?</h2>
                <div class="select-container">
                    <form action="">
                        <ul class="list-container">
                            <li>
                                Education
                            </li>
                            <li>
                                <input type="radio" id="one" name="radioGroup" value="-3">
                                <label for="one">-3</label>
                            </li>
                            <li>
                                <input type="radio" id="two" name="radioGroup" value="-2">
                                <label for="two">-2</label>
                            </li>
                            <li>
                                <input type="radio" id="three" name="radioGroup" value="-1">
                                <label for="three">-1</label>
                            </li>
                            <li>
                                <input type="radio" id="four" name="radioGroup" value="0">
                                <label for="four">0</label>
                            </li>
                            <li>
                                <input type="radio" id="five" name="radioGroup" value="+1">
                                <label for="five">+1</label>
                            </li>
                            <li>
                                <input type="radio" id="six" name="radioGroup" value="+2">
                                <label for="six">+2</label>
                            </li>
                            <li>
                                <input type="radio" id="seven" name="radioGroup" value="+3">
                                <label for="seven">+3</label>
                            </li>
                            <li>
                                Military
                            </li>
                        </ul>
                    </form>
                </div>
                <!-- Navigation Buttons -->
                <div class="button-alignment">
                    <button class="button-pages" style="border-radius: 10px;" @click="btn_clicker">Next</button>
                </div>
            </div>
        </div>
    </div>
    <div v-else-if="form_counter == 7">
        <MainContainers_six/>
    </div>
    <div v-else-if="form_counter == 5">
        <MainContainers_four/>
    </div>
</template>
<script>
import MainContainers_six from './MainContainers_six.vue'
import MainContainers_four from './MainContainers_four.vue'
export default{
    components:{
        MainContainers_six,
        MainContainers_four,
    },

    data(){
        return{
            form_counter: 6,
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

.list-container {
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
}

.list-container li {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8px;
}

.list-container label {
  margin-top: 5px;
}

.list-container input[type="radio"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 22px;
  height: 22px;
  border: 2px solid #ccc;
  border-radius: 50%;
  margin-right: 5px;
  margin-top: 0px;
  outline: none;
  cursor: pointer;
}

/* Custom radio button style when checked */
.list-container input[type="radio"]:checked {
  border-color: #F0584E; /* Change the color when the radio button is checked */
  background-color: #F0584E; /* Change the background color when the radio button is checked */
}

@media (max-width: 786px){
    .list-container li {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 4px;
    }

    .list-container input[type="radio"] {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        width: 14px;
        height: 14px;
        border: 2px solid #ccc;
        border-radius: 50%;
        margin-right: 5px;
        margin-top: 0px;
        outline: none;
        cursor: pointer;
    }
}

@media (max-width: 480px){
    .list-container li {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 4px;
    }

    .list-container input[type="radio"] {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        width: 14px;
        height: 14px;
        border: 2px solid #ccc;
        border-radius: 50%;
        margin-right: 5px;
        margin-top: 0px;
        outline: none;
        cursor: pointer;
    }
}

@media (max-width: 390px){
    .list-container li {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 2px;
    }
    
    .list-container input[type="radio"] {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        width: 14px;
        height: 14px;
        border: 2px solid #ccc;
        border-radius: 50%;
        margin-right: 5px;
        margin-top: 0px;
        outline: none;
        cursor: pointer;
    }
}
</style>