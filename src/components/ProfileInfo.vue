<template>
  <div>
    <h1>{{info.name}}</h1>
    <p>{{info.idType}}: {{info.id}}</p>
    <p>{{info.birthDate.toLocaleDateString()}}</p>
  </div>
</template>

<script>
export default {
  props: ['info'],
};
</script>
