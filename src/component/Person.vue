<template>
    <div class="personClass">
        <h1>{{ name }}111</h1>
        <h1>{{ age }}</h1>
        <h1 id="tel"></h1>

        <ul>
            <li v-for="person in dataFromApp" :key="person.id"></li>
        </ul>


  <!--       <div>
            姓 : <input type="text" v-model="firstName"> <br>
            名 : <input type="text" v-model="lastName"> <br>

            全名: <span> {{ fullName }}</span>
        </div>
    
        <button v-on:click="changeName">修改名字</button>
        <button v-on:click="changeAge">修改age</button> 

        <h2>{{ car.brand }}に乗る。値段は{{ car.price }}</h2>

        <button @click="changePrice">値段を変更</button>
        <button @click="changeFirstMemCup">更改第一个成员的cup</button>

        <ul>
            <li v-for="member in members17" :key="member.name">名前: {{member.name}} , cup は{{member.cup}}Cup</li>
        </ul>
 -->
        
        

    </div>
  
</template>



<script lang="ts"  setup name="Person">
// import { computed, reactive, ref } from 'vue';
    import {type PersonInter} from '@/types';
    import { Persons } from '@/types';

    import { computed, defineProps, reactive, ref } from 'vue';

    //
    let dataFromApp =  defineProps(['personList']);




    // 计算属性的运用
    let firstName = ref("firstName");
    let lastName = ref("lastName");
    let fullName = computed(() => firstName.value.slice(0,1).toUpperCase() +
        firstName.value.slice(1) + "." + lastName.value );

    //基本类型的响应式数据
    let age = ref(18);
    let name = ref("masai");

    //对象类型的响应式数据
    let car = ref({brand:"ポルシェ",price: 10000000}) ;
    let members17 = reactive([
        {name:"恵理子", cup:"A"},
        {name:"太田有紀", cup:"B"},
        {name:"水島", cup:"B"},
        {name:"布袋", cup:"B+"},
    ]);



    // method
    function changeFirstMemCup(){
        members17[0].cup = "D";
    }

    function changeAge(){
        age.value += 1; 
    }

    function changeName() {
        name.value = "masachan";
    }

    function changePrice() {
        car.value.price += 10;
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
