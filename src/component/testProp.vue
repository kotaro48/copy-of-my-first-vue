<template>
    <div>
        <ul>
        <li v-for="item in personList" :key="item.id">{{ item.id }}---{{ item.name }}</li>
        </ul>
        <!-- <h2>{{ list }}</h2> -->
    </div>

</template>



<script  lang="ts" setup name="TestProp">
import type { Persons } from '@/types';
import { defineProps } from 'vue';
import { withDefaults } from 'vue';

    // 这里和<li v-for="item in personList 的 personList虽然指向同一个对象 但是标签里的名字由源头标签决定
    // 接受personList 不限制类型
    //let pList = defineProps(['personList']);

    // 接受personList并限制类型 
    let pList = defineProps<{personList:Persons}>();

    // 接受personList并限制类型 并限制必要性
    let list2 = defineProps<{personList?:Persons}>();

    // 接受personList并限制类型 并限制必要性 并指定默认值 但是必须是函数返回一个值
    let list3 = withDefaults(defineProps<{personList?:Persons}>(), {
        //personList:[{id:'00000',name:'staff',age:30},{id:'00001',name:'staff2',age:30},{id:'00002',name:'staff3',age:30}]
        personList:() => [{id:'00000',name:'staff',age:30},{id:'00001',name:'staff2',age:30},{id:'00002',name:'staff3',age:30}]
    });



</script>

<style scoped>

</style>