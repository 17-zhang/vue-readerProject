<template>
</template>

<script type="text/ecmascript-6">
  import indexHeader from './headandfoot/header'
  import indexMale from './pages/index-male'
  import indexFemale from './pages/index-female'
  import indexNewbook from './pages/index-newbook'

  export default {
    components: {
      'm-header': indexHeader,
      indexMale,
      indexFemale,
      indexNewbook
    },
    data() {
    }
  }
</script>

<style scoped>
</style>
