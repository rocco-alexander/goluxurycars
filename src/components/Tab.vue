<template>
  <div class="container">
    <div class="tab-group">
      <div class="tab"> {{ tabName }} </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['tabName'],
  setup(props){
    console.log(props)
  }
};
</script>
