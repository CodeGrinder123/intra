<template>
    <div v-if="form_counter == 8">
        <div class="row">
            <div class="column-left" style="background-image: linear-gradient(to bottom right, #38425A, #F0584E); height: 500px;">
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

                <div style="margin-top: 125px">
                    <div class="dot-container">
                        <div class="dot-col">
                            <span class="dot"></span>
                            <span class="dot"></span>
                            <span class="dot-active"></span>
                        </div>
                    </div>

                    <div class="dot-text-container">
                        <p class="dot-subtext">Basic Information</p>
                        <p class="dot-subtext">Survey</p>
                        <p class="dot-subtext">Personal Information</p>
                    </div>
                </div>
            </div>

            <div class="column-right" style="background-color: white; height: 500px;">
                <!-- Question counter -->
                <div class="button-arrangement">
                    <p class="text-question" style="margin-left: 10px">And finally, please fill out your personal details in order to register to our portal.</p>
                </div>

                <!-- Question 4 -->
                <div class="form-container">
                    <div class="form-column">
                        <div class="form-row">
                            <label for="first-name">First name:</label>
                            <input type="text" id="first-name" name="first-name" placeholder="Enter your first name" required>
                        </div>
                        <div class="form-row">
                            <label for="last-name">Last name:</label>
                            <input type="text" id="last-name" name="last-name" placeholder="Enter your last name" required>
                        </div>
                    </div>
                    <br>
                    <div class="form-column">
                        <div class="form-row">
                            <label for="middle-name">Middle name:</label>
                            <input type="text" id="middle-name" name="middle-name" placeholder="Enter your middle name">
                        </div>
                        <div class="form-row">
                            <label for="mobile">Mobile phone:</label>
                            <input type="tel" id="mobile" name="mobile" placeholder="Enter your mobile phone number" required>
                        </div>
                    </div>
                </div>
                <br>
                <div class="form-container-1">
                    <div class="form-row">
                        <label for="email">Email (will be your username):</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email address" required>
                    </div>
                    <br>
                    <div class="form-row">
                        <label for="address">Address:</label><br>
                        <input type="text" id="address" name="address" placeholder="Enter your address" required>
                    </div>
                </div>

                <!-- Navigation Buttons -->
                <div class="button-alignment">
                    <button class="button-pages" style="border-radius: 10px;" @click="btn_clicker">Save and Send</button>
                </div>
            </div>
        </div>
    </div>
    <div v-else-if="form_counter == 9">
        <MainContainers_end/>
    </div>
    <div v-else-if="form_counter == 7">
        <MainContainers_six/>
    </div>
</template>
<script>
import MainContainers_end from './MainContainers_end.vue'
import MainContainers_six from './MainContainers_six.vue'
export default{
    components:{
        MainContainers_end,
        MainContainers_six,
    },

    data(){
        return{
            form_counter: 8,
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
.form-container {
  gap: 20px;
  max-width: 550px;
  margin: auto;
  margin-left: 25px;
}

.form-container-1 {
  max-width: 550px;
  margin: auto;
  margin-left: 25px;
}

.form-column {
  gap: 15px;
}

.form-row {
    margin-bottom: 10px;
    align-items: center;
}

.form-row input{
    margin-top: 5px;
}

.form-row label {
  text-align: right;
  padding-right: 5px;
  color: #444;
}

input[type="text"],
input[type="email"],
input[type="tel"] {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="tel"]:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

input[type="submit"] {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #0056b3;
}

@media (max-width: 786px){
    .form-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        max-width: 550px;
        margin: auto;
    }

    .form-container-1 {
        max-width: 550px;
        margin: auto;
    }
}

@media (max-width: 480px){
    .form-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        max-width: 550px;
        margin: auto;
    }

    .form-container-1 {
        max-width: 550px;
        margin: auto;
    }
}

@media (max-width: 390px){
    input[type="text"],
    input[type="email"],
    input[type="tel"] {
        width: 70%;
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    .form-row{
        margin-bottom: 5px;
    }

    .form-container{
        margin-left: 20px;
    }

    .form-container-1{
        margin-left: 60px;
    }
}
</style>