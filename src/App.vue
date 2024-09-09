

<template>
    <!-- -->

    

    <div class="app">

        <div>
        <ul>
        <!-- <li v-for="p in personList" :key="p.id">
            {{ p.id }} --- {{ p.name }} -- {{p.id}}
        </li> -->
        </ul>
        </div>
        <h1>こんにちは</h1>
        <!-- 给子组件传值-->
        <TestProp :personList="personList" />

        

        <!-- <Person personList="personList" /> -->
        
        <Member/>
        
    </div>
</template>


<script lang="ts" setup name="App">

    import Person from './component/Person.vue'
    import TestProp from './component/testProp.vue'
    import Member from './component/Member.vue'
    import { reactive } from 'vue';
    import { type Persons } from '@/types';

    


    let personList:Persons = reactive([
        {id:'111',name:'masa',age:19},
        {id:'222',name:'hashimoto',age:19},
        {id:'333',name:'akiyama',age:19}
    ])
    
    let person:Persons = [{id:'19999',name:'masa',age:19}]



</script>

<style>
    .app{
        background-color:#ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>