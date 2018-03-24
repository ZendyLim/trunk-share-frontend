<template>
  <div>
    <mt-header title="New Schedules">
    </mt-header>
    <div class="container">
      <div>Pick Up Address</div>
      <div>{PLACEHOLDER HERE}</div>
      <div>
        <mt-button class="button-80" size="small" type="primary">Choose Address</mt-button>
      </div>
    </div>
    <i class="fa fa-arrow-down"></i>
    <div class="container">
      <div>Drop Off Address</div>
      <div>{PLACEHOLDER HERE}</div>
      <div>
        <mt-button class="button-80" size="small" type="primary">Choose Address</mt-button>
      </div>
    </div>
    <hr/>
    <table class="w-100">
      <tr>
        <td class="big-td">
          <div>
            Pick Up Time
          </div>
          <div>
            {PLACEHOLDER HERE}
          </div>
          <div>
            <mt-button class="button" v-on:click="startTimeOpen" type="primary" size="small">Set Time</mt-button>
          </div>
          <mt-datetime-picker
            ref="picker"
            type="datetime"
            v-model="pickUpTime">
          </mt-datetime-picker>
        </td>
        <td class="small-td">
          ~
        </td>
        <td class="big-td">
          <div>
            Drop Off Time
          </div>
          <div>
            {PLACEHOLDER HERE}
          </div>
          <div>
            <mt-button class="button" type="primary" size="small">Set Time</mt-button>
          </div>
          <mt-datetime-picker
            ref="picker2"
            type="datetime"
            v-model="pickUpTime">
          </mt-datetime-picker>
        </td>
      </tr>
    </table>
    <mt-button style="bottom: 0; left: 0; position: absolute; width: 100%;" type="primary">GO</mt-button>
  </div>
</template>

<script>
  export default {
    name: 'DriverMain',
    methods: {
      startTimeOpen() {
        console.log(this.$refs);
        this.$refs.picker.open();
      }
    },
    data() {
      return {
        msg: 'Chicken',
        pickUpTime: ''
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
