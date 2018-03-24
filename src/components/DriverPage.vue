<template>
  <div>
    <mt-header title="Select Driver">
    </mt-header>

    <mt-button style="bottom: 0; left: 0; position: absolute; width: 100%;" type="primary">GO</mt-button>
  </div>
</template>

<script>
  export default {
    name: 'DriverPage',
    methods: {
      startTimeOpen() {
        console.log(this.$refs);
        this.$refs.picker.open();
      }
    },
    data() {
      return {
        msg: 'Chicken',
        pickUpTime: new Date().toLocaleString()
      }
    }
  }
</script>

<style scoped>
  div {
    margin: 0.5em 0;
  }

  .button-80 {
    width: 80%;
  }

  .container {
    margin: 1em 0;
  }

  .big-td {
    width: 45%;
  }

  .small-td {
    width: 10%;
  }

  .fa {
    margin-bottom: 1em;
  }

  .w-100 {
    width: 100%;
  }
</style>
