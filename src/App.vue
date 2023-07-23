<template>
  <div class="header">
    <img class="logo" src="./assets/logo512.png"><p>Intra Research</p>
  </div>

  <div class="main-box">
    <div class="main-text">
      <h2 class="text-intro">
          Welcome to Intra Research registration page!
      </h2>
    </div>
  </div>

  <div class="main-instructions">
    <p class="text-instructions">
      Please answer the following questions and fill out your personal details. 
      <br> Please <strong>"Save & Send"</strong> when done.
    </p>
  </div>
  
  <br>
  <div>
    <MainContainers_start/>
  </div>
  <div class="footer">
        <div class="footer-columns">
            <div class="footer-column">
                <div class="logo-left" id="logo">
                    <div class="logo-container">
                        <div class="logo-icon">
                            <img src="./assets/logo_white.png" width="36px" height="28px" style="padding-right: 5px;">
                        </div>
                        &nbsp;
                        <div class="logo-text">
                            <p style="color: white;"><strong>Intra Research</strong></p>
                        </div>
                    </div>
                </div>
                <label for="logo">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua.
                </label>
                <div class="social-media-row">
                    <a class="social-media-button" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                        </svg>
                    </a>
                    <a class="social-media-button" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg>
                    </a>
                    <a class="social-media-button" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                        </svg>
                    </a>
                    <a class="social-media-button" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div class="footer-column">
                <h3>Philippines</h3>
                <p>Cityland condominium 10 tower 1 <br> 156 H.V. Dela Costa str <br> Salcedo village Bel Air <br> 1209 Makati City</p>
            </div>
            <div class="footer-column">
                <h3>Sweden</h3>
                <p>Sollentunav 85 <br> 191 40 Sollentuna <br> Stockholm</p>
            </div>
            <div class="footer-column">
                <h3>Estonia</h3>
                <p>Tatari 64 <br> 10134 Talinn <br> Harju maakond</p>
            </div>
        </div>
        <div style="text-align: center">
            <p>&copy; 2023 Intra Research. All rights reserved.</p>
        </div>
    </div>
</template>

<script>
import MainContainers_start from './components/MainContainers_start.vue'
export default {
    name: 'App',
    components: {
        MainContainers_start,
    },

    data(){
        return{
            form_counter: 0,
        }
    },

    methods: {
        btn_clicker(){
            this.form_counter++;
        }
    }
}
</script>

<style>
body{
    background-color: #f3f3f3;
    /* font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
    /* font-family: Arial, Helvetica, sans-serif; */
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    margin: 0px;
}

.footer {
    margin-top: 70px;
    background-image: linear-gradient(to right, #38425A, #F0584E);
    color: #fff;
    padding: 20px;
    padding-bottom: 10px;
}

.footer-columns {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    /* max-width: 800px; */
    margin: 0 auto;
    text-align: left;
}

.footer-column {
    flex: 0 0 25%;
    padding: 10px;
}

.footer a {
    color: #fff;
    text-decoration: none;
}

.footer a:hover {
    text-decoration: underline;
}

.social-media-row {
    display: flex;
    justify-content: left;
    padding-top: 10px;
}

.social-media-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: #38425A;
    color: #fff;
    margin: 5px;
    text-decoration: none;
    font-size: 20px;
}

.social-media-button:hover{
    background-color: white;
    color: #38425A;
}

.header{
    background-color: white;
    padding: 20px 10px;
    border-bottom: 1px solid rgb(199, 199, 199);
    display: flex;
    align-items: center;
    font-weight: 700;
    color: #38425A;
    height: 40px;
}

.logo{
    width: 32px;
    height: 32px;
    margin-left: 16px;
    margin-right: 8px;
}

.main-box{
    background-image: linear-gradient(to right, #38425A, #F0584E);
}

.main-text{
    text-align: center;
}

.text-intro{
    margin: 0px;
    font-size: 2.5rem;
    font-weight: 700;
    color: white;
    padding-top: 40px;
    padding-bottom: 40px;
}

.text-instructions{
    color: #38425A;
    margin: 0px;
}

.main-instructions{
    margin-left: 24px;
    margin-top: 16px;
}

.main-form{
    display: block;
    align-items: center;
    margin-left: 50px;
    margin-right: 50px;
}

.main-container{
    background-color: white;
    box-shadow: 0 10px 10px 0 #eaeaea;
    border-radius: 10px;
}

.form-container{
    display: flex;
}

.form-one .form-two{
    flex-direction: row;
}

.left-wing{
    background-color: #38425A;
    width: 100%;
    height: auto;
}

.text-question{
    margin-left: 24px;
    padding-top: 20px;
    margin-top: 0px;
}

.grid-container{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    text-align: center;
}

.grid-item{
    padding: 5px;
    text-align: center;
    margin: 20px;
    margin-bottom: 36px;
}

.button-gender{
    background-color: #F0584E;
    border: none;
    color: white;
    padding: 20px;
    padding-left: 50px;
    padding-right: 50px;
    width: auto;
    border-radius: 24px;
    cursor: pointer;
    text-align: center;
}

.button-gender:hover{
    background-color: #6A0000;
}

.button-gender:active{
    background-color: #6A0000;
}

.button-alignment{
    text-align: center;
}

.button-pages{
    background-color: #38425A;
    border: none;
    color: white;
    padding: 15px;
    width: 50%;
    cursor: pointer;
    margin-top: 20px;
}

.prev-button{
    background-color: white;
    color: #38425A;
    border: none;
    border-radius: 50%;
    padding: 15px;
    cursor: pointer;
}

.button-arrangement{
    display: flex;
    align-items: center;
}

.prev-button:hover{
    background-color:#eaeaea;
}

.button-pages:hover{
    background-color: #232938;
}

.select-container{
    text-align: center;
}

select:focus{
    outline: 1px solid #006eff;
}

select{
    width: 50%;
    height: 25%;
    padding: 12px, 20px;
    margin: 8px, 0;
    border-radius: 4px;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

.date-container{
    text-align: center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.month{
    width: 20%;
    height: auto;
    padding: 12px, 20px;
    margin: 8px, 0;
    border-radius: 4px;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

.day{
    width: 20%;
    height: auto;
    padding: 12px, 20px;
    margin: 8px, 0;
    border-radius: 4px;
    border: 1px solid #ccc;
    box-sizing: border-box;
}
/* 
*{
    box-sizing: border-box;
} */

.row > * {
    box-sizing: border-box;
}

.row{
    margin-left: 25px;
    margin-right: 25px;
    display: flex;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-bottom: 25px;
}

.row:after{
    content:"";
    display: table;
    clear: both;
}

.column-left{
    float: left;
    width: 100%;
    padding: 10px;
    height: 350px; /* Should be removed. Only for demonstration */
    border-radius: 10px 0 0 10px ;
}

.column-right{
    float: left;
    width: 100%;
    padding: 10px;
    height: 350px; /* Should be removed. Only for demonstration */
    border-radius: 0 10px 10px 0;
}

.logo-container{
    display: flex;
    flex-direction: row;
}

.logo-icon{
    margin-top: 12px;
}

.logo-center{
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo-left{
    display: flex;
    justify-content: left;
    align-items: left;

}

.dot{
    height: 35px;
    width: 35px;
    background-color: #38425A;
    border-radius: 50%;
    display: inline-block;
    margin-left: 85px;
    margin-right: 85px;
    margin-bottom: 5px;
    margin-top: 5px;
    /* align-items: center; */
    /* margin: 5px; */
}

.dot-active{
    height: 25px;
    width: 25px;
    background-color: #38425A;
    border: 5px solid white;
    border-radius: 50%;
    display: inline-block;
    margin-left: 85px;
    margin-right: 85px;
    margin-bottom: 5px;
    margin-top: 5px;
    /* align-items: center; */
}

.dot-container{
    display: flex;
    justify-content: center;
    text-align: center;
}

.dot-col{
    margin-top: 50px;
}

.dot-text-container{
    display: flex;
    flex-direction: row;
    text-align: center;
}

.dot-subtext{
    flex: 1;
    padding: 10px;
    color: white;
}

@media (max-width: 768px){
    .header{
        background-color: white;
        padding: 20px 10px;
        border-bottom: 1px solid rgb(199, 199, 199);
        display: flex;
        align-items: center;
        font-weight: 700;
        color: #38425A;
        height: 40px;
    }

    .grid-container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        text-align: center;
    }
    
    .grid-item{
        padding: 5px;
        text-align: center;
        margin: 20px;
        margin-bottom: 36px;
    }

    .button-gender{
        background-color: #F0584E;
        border: none;
        color: white;
        padding: 20px;
        padding-left: 20px;
        padding-right: 20px;
        width: auto;
        border-radius: 24px;
        cursor: pointer;
        text-align: center;
    }
    
    .button-gender:hover{
        background-color: #6A0000;
    }

    .button-gender:active{
        background-color: #6A0000;
    }

    .logo-container{
        display: flex;
        flex-direction: row;
    }
    
    .logo-icon{
        margin-top: 12px;
    }
    
    .logo-center{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .row {
        flex-direction: column; /* Change to column layout on mobile */
    }

    .column-left{
        float: left;
        width: 100%;
        padding: 10px;
        height: 350px; /* Should be removed. Only for demonstration */
        border-radius: 10px 10px 0 0;
    }

    .column-right{
        float: left;
        width: 100%;
        padding: 10px;
        height: 350px; /* Should be removed. Only for demonstration */
        border-radius: 0 0 10px 10px;
    }

    .dot{
        margin: 30px;
    }

    .dot-active{
        margin: 30px;
    }

    .dot-subtext{
        flex: 1;
        padding: 0px;
        color: white;
    }

    .question-text{
        font-size: large;
    }
}

@media (max-width: 480px){
    .header{
        background-color: white;
        padding: 20px 10px;
        border-bottom: 1px solid rgb(199, 199, 199);
        display: flex;
        align-items: center;
        font-weight: 700;
        color: #38425A;
        height: 40px;
    }

    .grid-container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        text-align: center;
    }
    
    .grid-item{
        padding: 5px;
        text-align: center;
        margin: 20px;
        margin-bottom: 36px;
    }

    .button-gender{
        background-color: #F0584E;
        border: none;
        color: white;
        padding: 20px;
        padding-left: 20px;
        padding-right: 20px;
        width: auto;
        border-radius: 24px;
        cursor: pointer;
        text-align: center;
    }
    
    .button-gender:hover{
        background-color: #6A0000;
    }

    .button-gender:active{
        background-color: #6A0000;
    }

    .logo-container{
        display: flex;
        flex-direction: row;
    }
    
    .logo-icon{
        margin-top: 12px;
    }
    
    .logo-center{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .row {
        flex-direction: column; /* Change to column layout on mobile */
    }

    .column-left{
        float: left;
        width: 100%;
        padding: 10px;
        height: 350px; /* Should be removed. Only for demonstration */
        border-radius: 10px 10px 0 0;
    }

    .column-right{
        float: left;
        width: 100%;
        padding: 10px;
        height: 350px; /* Should be removed. Only for demonstration */
        border-radius: 0 0 10px 10px;
    }

    .dot{
        margin: 30px;
    }

    .dot-active{
        margin: 30px;
    }
    
    .question-text{
        font-size: large;
    }
}

@media (max-width: 390px){
    .header{
        background-color: white;
        padding: 20px 10px;
        border-bottom: 1px solid rgb(199, 199, 199);
        display: flex;
        align-items: center;
        font-weight: 700;
        color: #38425A;
        height: 40px;
    }

    .grid-container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        text-align: center;
    }
    
    .grid-item{
        padding: 5px;
        text-align: center;
        margin: 20px;
        margin-bottom: 36px;
    }

    .button-gender{
        background-color: #F0584E;
        border: none;
        color: white;
        padding: 20px;
        padding-left: 20px;
        padding-right: 20px;
        width: auto;
        border-radius: 24px;
        cursor: pointer;
        text-align: center;
    }
    
    .button-gender:hover{
        background-color: #6A0000;
    }

    .button-gender:active{
        background-color: #6A0000;
    }

    .logo-container{
        display: flex;
        flex-direction: row;
    }
    
    .logo-icon{
        margin-top: 12px;
    }
    
    .logo-center{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .row {
        flex-direction: column; /* Change to column layout on mobile */
    }

    .column-left{
        float: left;
        width: 100%;
        padding: 10px;
        height: 350px; /* Should be removed. Only for demonstration */
        border-radius: 10px 10px 0 0;
    }

    .column-right{
        float: left;
        width: 100%;
        padding: 10px;
        height: 350px; /* Should be removed. Only for demonstration */
        border-radius: 0 0 10px 10px;
    }

    .dot{
        margin: 30px;
    }

    .dot-active{
        margin: 30px;
    }

    .question-text{
        font-size: large;
    }
}
</style>
