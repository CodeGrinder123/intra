<template>
    <div v-if="form_counter == 4">
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
                    <p class="text-question">Question 4 out of 7</p>
                </div>

                <!-- Question 4 -->
                <h2 style="text-align: center;" class="question-text">Which drinks do you drink regularly?</h2>
                    <div class="container">
                        <div class="custom-select">
                            <span class="placeholder" @click="toggleDropdown">
                                {{ selectedItems.length > 0 ? selectedItems.join(', ') : 'Choose your drink(s)' }}
                            </span>
                            <div class="dropdown-menu" v-show="showDropdown">
                                <label v-for="drinks in drink" :key="drinks" class="option-label">
                                <input type="checkbox" v-model="selectedItems" :value="drinks" class="checkbox" />
                                    {{ drinks }}
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
    <div v-else-if="form_counter == 5">
        <MainContainers_four/>
    </div>
    <div v-else-if="form_counter == 3">
        <MainContainers_two/>
    </div>
</template>
<script>
import MainContainers_four from './MainContainers_four.vue'
import MainContainers_two from './MainContainers_two.vue'
export default{
    components:{
        MainContainers_four,
        MainContainers_two,
    },

    data(){
        return{
            form_counter: 4,
            showDropdown: false,
            selectedItems: [],
            drink: [
                'Still or carbonated water',
                'Coffee',
                'Tea',
                'Lemonade',
                'Juice',
                'Wine',
                'Beer',
                'Sparkling wine',
                'Cider',
                'Vodka',
                'Rum',
                'Whisky',
                'Brandy',
                'Cognac',
                'Gin',
                'Tequila',
                'Liqueur',
                'Alcoholic lemonades',
                'None of the above [uncheck everything else]',
            ],
        }
    },

    methods: {
        btn_clicker(){
            this.form_counter++;
            console.log(this.form_counter);
        },

        toggleDropdown() {
            this.showDropdown = !this.showDropdown;
        },
    },

    watch:{
        selectedItems(newVal){
            if(newVal.includes('None of the above [uncheck everything else]')){
                this.selectedItems = [];
            }
        }
    }
}
</script>

<style>
.placeholder{
    display: flex;
    flex-direction: row;
    text-overflow: ellipsis;
}

.container-with-icon {
  display: flex;
  align-items: center;
}

.icon-container {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.icon-container svg {
  width: 60px;
  height: 60px;
  fill: currentColor;
}

.container {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.custom-select {
  position: relative;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 1;
}

.option-label {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.checkbox {
  margin-right: 5px;
  width: 16px;
  height: 16px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.checkbox:checked {
  background-color: #007bff;
  border-color: #007bff;
}

.show-dropdown .dropdown-menu {
  display: block;
}

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
    margin-bottom: 0px;
}


@media (max-width: 786px){
    .question-text{
        font-size: large;
    }
}

@media (max-width: 480px){
    .question-text{
        font-size: large;
    }
}

@media (max-width: 390px){
    .question-text{
        font-size: large;
    }
}
</style>