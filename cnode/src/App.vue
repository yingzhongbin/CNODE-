<template>
  <div id="app">
    <top />
    <postList/>
  </div>
</template>

<script>
  import top from './components/top'
  import postList from './components/postList'
export default {
  name: 'App',
  components:{
    top,
    postList
  }
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
