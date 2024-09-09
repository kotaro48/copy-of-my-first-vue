<template>
    <div>
      <h1>{{ cup }}</h1>
      <h1>{{ person.name }}</h1>
      <button @click="changeCup">升cup</button>
      <button @click="changePerson">改人</button>
    </div>
  </template>
  
  <script setup lang="ts" name="Member">
  import { reactive, ref, watch } from 'vue';
  
  let cup = ref(1);
  // 对象
  let person = reactive({ name: "masai", age: 18 });
  
  function changeCup() {
    cup.value += 1;
    console.log("changeCup: ", person);
  }
  
  watch(cup, (newValue, oldValue) => {
    console.log("cup 変わった!");
  });
  
  watch(person, (newValue, oldValue) => {
    console.log("Person 変わった!");
    //随着人的变化,cup也要下降嘛
    cup.value -= 1 ;
  });
  
  function changePerson() {
    console.log("Person change!");
    //person = { name: "eriko", age: 17 };
    person.name = "eriko";
    console.log("changePerson: ", person);
  }
  </script>
  