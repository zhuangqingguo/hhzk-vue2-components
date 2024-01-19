<template>
  <menus-icon iconClass="安全管理" />
</template>

<script>
  // import { TestButton } from '../packages'
  export default {
    name: 'App',
    // components: { TestButton }

    mounted() {
      setTimeout(() => {
        this.$forceUpdate()
      }, 1000)
    }
  }
</script>
<style></style>
