<template>
  <div class="main">
    <mt-header title="New Schedules"></mt-header>
    <b-container>
      <b-row>
        <b-col cols="12">HEHEH</b-col>
        <b-col cols="2">Food</b-col>
        <b-col cols="2">Liquid</b-col>
        <b-col cols="2">Tableware</b-col>
        <b-col cols="2">Furniture</b-col>
        <b-col cols="2">Cloth</b-col>
        <b-col cols="2">Other</b-col>
        <b-col cols="12">SSSSSSSSSS<mt-switch style="float: right;" v-model="value"></mt-switch></b-col>
        <b-col cols="3">
          FROM
        </b-col>
        <b-col cols="9">
          <b-row>
            <b-col cols="12">Something</b-col>
            <b-col cols="12">Something</b-col>
          </b-row>
        </b-col>
        <b-col cols="3">
          TO
        </b-col>
        <b-col cols="9">
          <b-row>
            <b-col cols="12">Something</b-col>
            <b-col cols="12">Something</b-col>
          </b-row>
        </b-col>
        <b-col cols="12">
          <b-form-group label="Something">
            <b-form-radio-group id="btnradios1"
                                buttons
                                v-model="selected"
                                :options="options"
                                name="radiosBtnDefault" />
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group label="Something">
            <b-form-radio-group id="btnradios1"
                                buttons
                                v-model="selected"
                                :options="options"
                                name="radiosBtnDefault" />
          </b-form-group>
        </b-col>
      </b-row>
    </b-container>
    <div class="map">
      MAP HERE
    </div>
    <mt-button class="footer" type="primary"> Onegai</mt-button>
  </div>
</template>

<script>
  export default {
    name: 'CustomerMain',
    methods: {
      startTimeOpen() {
        console.log(this.$refs);
        this.$refs.picker.open();
      }
    },
    data() {
      return {
        value: false,
        selected: 'radio1',
        options: [
          { text: 'Radio 1', value: 'radio1' },
          { text: 'Radio 3', value: 'radio2' },
          { text: 'Radio 4', value: 'radio4' }
        ]
      }
    }
  }
</script>

<style scoped>
  .main {
    height: 100%;
    padding-bottom: 46px;
  }

  .map {
    height: 250px;
    background: azure;
  }

  .footer {
    height: 46px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
</style>
