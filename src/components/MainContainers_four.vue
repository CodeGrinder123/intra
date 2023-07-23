<template>
    <div v-if="form_counter == 5">
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
                    <p class="text-question">Question 5 out of 7</p>
                </div>

                <!-- Question 4 -->
                <h2 style="text-align: center;" class="question-text">Please rate the work of your current president so far.</h2>
                <div class="select-container">
                    <form action="">
                        <ul class="list-container">
                            <li>
                                <input type="radio" id="one" name="radioGroup" value="1">
                                <label for="one">1</label>
                            </li>
                            <li>
                                <input type="radio" id="two" name="radioGroup" value="2">
                                <label for="two">2</label>
                            </li>
                            <li>
                                <input type="radio" id="three" name="radioGroup" value="3">
                                <label for="three">3</label>
                            </li>
                            <li>
                                <input type="radio" id="four" name="radioGroup" value="4">
                                <label for="four">4</label>
                            </li>
                            <li>
                                <input type="radio" id="five" name="radioGroup" value="5">
                                <label for="five">5</label>
                            </li>
                            <li>
                                <input type="radio" id="six" name="radioGroup" value="6">
                                <label for="six">6</label>
                            </li>
                            <li>
                                <input type="radio" id="seven" name="radioGroup" value="7">
                                <label for="seven">7</label>
                            </li>
                            <li>
                                <input type="radio" id="eight" name="radioGroup" value="8">
                                <label for="eight">8</label>
                            </li>
                            <li>
                                <input type="radio" id="nine" name="radioGroup" value="9">
                                <label for="nine">9</label>
                            </li>
                            <li>
                                <input type="radio" id="ten" name="radioGroup" value="10">
                                <label for="ten">10</label>
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
    <div v-else-if="form_counter == 6">
        <MainContainers_five/>
    </div>
    <div v-else-if="form_counter == 4">
        <MainContainers_three/>
    </div>
</template>
<script>
import MainContainers_five from './MainContainers_five.vue'
import MainContainers_three from './MainContainers_three.vue'
export default{
    components:{
        MainContainers_five,
        MainContainers_three,
    },

    data(){
        return{
            form_counter: 5,
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

.list-container input[type="radio"]:checked {
  border-color: #F0584E;
  background-color: #F0584E;
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
</style>