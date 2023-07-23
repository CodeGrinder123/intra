<template>
    <div v-if="form_counter == 7">
        <div class="row">
            <div class="column-left" style="background-image: linear-gradient(to bottom right, #38425A, #F0584E); height: 450px;">
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

                <div style="margin-top: 90px">
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

            <div class="column-right" style="background-color: white; height: 450px;">
                <!-- Question counter -->
                <div class="button-arrangement">
                    <p class="text-question">Question 7 out of 7</p>
                </div>

                <!-- Question 4 -->
                <h2 style="text-align: center;" class="question-text">Here are 10 brands. Please select the one you know and trust most.</h2>
                <p style="text-align: center; margin-bottom: 0px; margin-top: 0px;"><small>You can select up to 3 brands.</small></p>
                <div class="img-row">
                    <div class="img-col">
                        <div class="image-container">
                            <label v-for="image in img_arr1" :key="image">
                                <input type="checkbox" v-model="selectedImages" :value="image.name" @change="checkSelection" class="img_selector"/>
                                <img :src="image.src" :class="{ 'selected-image': selectedImages.includes(image.name) }">
                            </label>
                        </div>
                    </div>
                    <br>
                    <div class="img-col">
                        <div class="image-container">
                            <label v-for="image in img_arr2" :key="image">
                                <input type="checkbox" v-model="selectedImages" :value="image.name" @change="checkSelection" class="img_selector"/>
                                <img :src="image.src" :class="{ 'selected-image': selectedImages.includes(image.name) }">
                            </label>
                        </div>
                    </div>
                </div>
                <!-- Navigation Buttons -->
                <div class="button-alignment">
                    <button class="button-pages" style="border-radius: 10px;" @click="btn_clicker">Next</button>
                </div>
            </div>
        </div>
    </div>
    <div v-else-if="form_counter == 8">
        <MainContainers_last/>
    </div>
    <div v-else-if="form_counter == 6">
        <MainContainers_five/>
    </div>
</template>
<script>
import MainContainers_last from './MainContainers_last.vue'
import MainContainers_five from './MainContainers_five.vue'
export default{
    components:{
        MainContainers_last,
        MainContainers_five,
    },

    data(){
        return{
            form_counter: 7,
            img_arr1: [
                { name: 'BMW', src: require("../assets/bmw.jpg")},
                { name: 'FB', src: require("../assets/FB_logo.jpg")},
                { name: 'Estravel', src: require("../assets/estravel_logo_2.gif")},
                { name: 'ForumCinemas', src: require("../assets/ForumCinemas_logo_3.jpg")},
                { name: 'Spin', src: require("../assets/spin_logo.jpg")},
            ],
            img_arr2: [
                { name: 'Husqvarna', src: require("../assets/husqvarna.jpg")},
                { name: 'IKEA', src: require("../assets/ikea.png")},
                { name: 'Luminor', src: require("../assets/luminor_logo_s.png")},
                { name: 'Rahvaraamat', src: require("../assets/rahvaraamat_logo.jpg")},
                { name: 'Redcross', src: require("../assets/redcross_logo_s.png")},
            ],
            selectedImages: [],
        }
    },

    methods: {
        btn_clicker(){
            this.form_counter++;
            console.log(this.form_counter);
        },

        checkSelection() {
            if (this.selectedImages.length > 3) {
                this.selectedImages.pop();
            }
        },
    },

    watch:{
        selectedImages(newVal){
            console.log(newVal);
        }
    }
}
</script>
<style>
.img-row{
    display: grid;
    grid-template-rows: auto auto;
    margin: 115px;
    margin-top: 0px;
    margin-bottom: 60px;
}

.img-col{
    width: 10px;
    height: 10px;
}

.img-selection{
    display: flex;
    justify-content: center;
    align-items: center;
}

.image-container{
    display: grid;
    grid-template-columns: repeat(5, 2fr);
    gap: 10px;
}

.image-container img {
  width: 50px; /* Set the desired width */
  height: 50px; /* Set the desired height */
  object-fit: cover; /* Maintain aspect ratio and crop if needed */
  margin: 10px; /* Optional margin for spacing between images */
  cursor: pointer;
}

.image-container img:hover{
    filter: brightness(1.2) saturate(5);
}

.img-row div {
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 20px 0;
}

.selected-image {
    filter: brightness(1.2) saturate(5);
    border: 0.5px solid #F0584E;
}

.img_selector{
    display: none;
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

    .img-row{
        margin: 55px;
        margin-top: 0px;
        margin-bottom: 80px;
    }

    .image-container img {
        width: 25px; /* Set the desired width */
        height: 25px; /* Set the desired height */
        object-fit: cover; /* Maintain aspect ratio and crop if needed */
        margin: 5px; /* Optional margin for spacing between images */
    }

}
</style>