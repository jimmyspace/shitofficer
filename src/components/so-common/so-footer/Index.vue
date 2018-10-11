<template>
  <footer class="footer">
    <div class="footerContent">
      铲屎官，记录主子的日常生活
    </div>
  </footer>
</template>

<script>
export default {
  name: 'sofooter'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.footer{
  position: relative;
  width: 100%;
  height: 4.5em;
  padding: 1.2em 0;
  background: #fff;
  z-index: 2;
  .footerContent{
    margin: 0 auto;
    width: 75em;
    padding: 1em;
    font-size: .9em;
    text-align: center;
    text-transform: uppercase;
    color: #666;
  }
}
</style>
