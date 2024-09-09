<template>
    <div>
        <ul>
        <li v-for="item in personList" :key="item.id">{{ item.id }}---{{ item.name }}</li>
        </ul>
        <!-- <h2>{{ list }}</h2> -->
    </div>

</template>



<script  lang="ts" setup name="TestProp">
import { defineProps  } from 'vue';

    // 这里和<li v-for="item in personList 的 personList虽然指向同一个对象 但是标签里的名字由源头标签决定
    let pList = defineProps(['personList']);


</script>

<style scoped>

</style>