<template>
    <div class="personClass">
        <h1>{{ name }}</h1>
        <h1>{{ age }}</h1>
        <h1 id="tel"></h1>
        <br>
        <h1>{{ c }}</h1>
        <button v-on:click="changeName">修改名字</button>
        <!-- <button @click="showTel">显示联系方式</button> -->
        
    </div>
  
</template>

<script lang="ts">
import { ref } from 'vue';


export default {
        name:'Person',
/*         data() {
            return {
                name:"masai",
                age:19,
                tel:"1888888888"
            }
        },  */
        /* methods:{
            showTel(){
                //alert(this.tel)
                const element = document.getElementById('tel');
                if (element) {
                    element.textContent = this.tel;    
                }
                
                
            }
        } */


        // setup存在的情况下,vue2的写法依然有效 而且可以读到setup里的数据
        data(){
            return {
                a : 100,
                c : this.name
            }
        },

        setup(){
            let name = ref("masai mayuu")
            let age = 19
            
            function changeName(){
                name.value= "masachan";
            }

            function changeAge(){
                
            }


            

            return{changeName,changeAge,name,age} // return的值是一个函数
        }
    }
</script>

<style scoped>
    .personClass{
        background-color:skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>
