<template>
  <div class="main">
    <mt-header title="New Schedules"></mt-header>
    <b-container>
      <b-row>
        <b-col cols="12">HEHEH</b-col>
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
    <!--<div class="message-container">{Placeholder text}</div>
    <div class="section">
      <div>
        <div class="label-container">From</div>
      </div>
      <div>
        <div class="form-container">
          <div class="form-input">Test</div>
          <div class="form-input">Test</div>
        </div>
      </div>
    </div>
    <div class="section">
      <div>
        <div class="label-container">To</div>
      </div>
      <div>
        <div class="form-container">
          <div class="form-input">Test</div>
          <div class="form-input">Test</div>
        </div>
      </div>
    </div>
    <div class="section">
      {Some more placeholder text}
      <div>
        <ul class="selection">
          <li class="selection-item">A</li>
          <li class="selection-item">B</li>
          <li class="selection-item">C</li>
        </ul>
      </div>
    </div>
    <div class="section">
      {Some more placeholder text}
      <div>
        <ul class="selection">
          <li class="selection-item">A</li>
          <li class="selection-item">B</li>
          <li class="selection-item">C</li>
        </ul>
      </div>
    </div>
    <div class="map">
      MAP HERE
    </div>
    <mt-button class="footer" type="primary"> Onegai</mt-button>-->
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

  .section {
    margin: 6px 0;
    height: 60px;
  }

  .message-container {
    padding: 5px;
  }

  .label-container {
    width: 30%;
    background: aqua;
    height: 60px;
    line-height: 60px;
    float: left;
  }

  .form-container {
    width: 70%;
    background: aquamarine;
    float: right;
    height: 60px;
  }

  .form-input {
    height: 24px;
    padding: 3px;
  }

  .selection {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
  }

  .selection-item {
    display: inline-block;
    padding: 6px 0;
    width: 33%;
    margin: 0;
    border: 2px black solid;
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
