<template>
  <div class="main">
    <div>
      <b-navbar fixed="top" type="dark" class="bg-pink">
        <b-navbar-nav>
          <b-nav-item>
            <router-link :to="{ name: 'CustomerDriver' }" style="color: #ffffff;">
              <i class="fa fa-2x fa-angle-left"></i>
            </router-link>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="m-auto">
          <b-nav-item>
            <h3 class="text-light">Confirm Driver</h3>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <b-img rounded="circle" width="40" height="40" src="../../assets/img2.jpg" fluid/>
          </b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <b-container>
      <b-row style="padding-top: 75px;">
        <b-col cols="12" class="pt-3">
          <b-img rounded="circle" width="115" height="115" src="../../assets/img1.jpg" alt="img" class="m-1"/>
        </b-col>
        <b-col cols="12" class="pt-2 pb-3">
          <b>Toyoda</b>
        </b-col>
        <b-col cols="12" class="pt-3 pb-3 mb-2" style="background: #FCEAE5">
          <b-row>
            <b-col cols="4">
              <div style="display: table; height: 100%;">
                <p style="display: table-cell; vertical-align: middle;">
                  <i class="fa fa-star icon" style="font-size: 12px"></i>
                  <i class="fa fa-star icon" style="font-size: 12px"></i>
                  <i class="fa fa-star icon" style="font-size: 12px"></i>
                  <i class="fa fa-star icon" style="font-size: 12px"></i>
                  <i class="fa fa-star icon" style="font-size: 12px"></i>
                </p>
              </div>
            </b-col>
            <b-col cols="8">
              <b-row>
                <b-col cols="12">
                  <b-row>
                    <b-col cols="3">Driving</b-col>
                    <b-col cols="9">
                      <b-progress :max="100" height="20px" class="mb-1 no-rad">
                        <b-progress-bar :value="80" class="bg-pink"></b-progress-bar>
                      </b-progress>
                    </b-col>
                  </b-row>
                </b-col>
                <b-col cols="12">
                  <b-row>
                    <b-col cols="3">Time</b-col>
                    <b-col cols="9">
                      <b-progress :max="100" height="20px" class="mb-1 no-rad">
                        <b-progress-bar :value="90" class="bg-pink"></b-progress-bar>
                      </b-progress>
                    </b-col>
                  </b-row>
                </b-col>
                <b-col cols="12">
                  <b-row>
                    <b-col cols="3">Route</b-col>
                    <b-col cols="9">
                      <b-progress :max="100" height="20px" class="mb-1 no-rad">
                        <b-progress-bar :value="70" class="bg-pink"></b-progress-bar>
                      </b-progress>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </b-col>
          </b-row>

        </b-col>
        <b-col cols="12" class="pt-2 pb-2">
          <b-row>
            <b-col cols="1">
              <i class="fa fa-map-marker icon"></i>
            </b-col>
            <b-col cols="4" class="text-left">
              Chiba
            </b-col>
            <b-col cols="2">
              <i class="fa fa-arrow-right icon"></i>
            </b-col>
            <b-col cols="5" class="text-left">
              Tokyo
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12" class="pt-2 pb-2">
          <b-row>
            <b-col cols="1">
              <i class="fa fa-clock icon"></i>
            </b-col>
            <b-col cols="4" class="text-left">
              07:00
            </b-col>
            <b-col cols="2">
              <i class="fa fa-arrow-right icon"></i>
            </b-col>
            <b-col cols="5" class="text-left">
              08:00
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12" class="pt-2 pb-2">
          <b-row>
            <b-col cols="1">
              <i class="fa fa-sync icon"></i>
            </b-col>
            <b-col cols="11" class="text-left">
              Weekdays
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12" class="pt-2 pb-4">
          <b-row>
            <b-col cols="1">
              <i class="fa fa-circle icon"></i>
            </b-col>
            <b-col cols="11" class="text-left">
              Car
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12" class="pb-4" style="background: #FCEAE5;">
          <b-row>
            <b-col cols="12" class="pt-3 pb-3 text-left">
              Are you sure you want this driver?
            </b-col>
            <button class="btn btn-primary w-50 m-auto no-rad"><b>OK</b></button>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: 'CustomerSelect',
    /*created: function () {
      Vue.http.get('http://5b846d5e.ngrok.io/drivers/').then(response => {
        this.drivers = response.body;
      }, response => {

      });
    },*/
    methods: {
      startTimeOpen() {
        console.log(this.$refs);
        this.$refs.picker.open();
      }
    },
    data() {
      return {
        text1: '',
        text2: '',
        text3: '',
        text4: '',
        selected: false,
        options: [
          {text: 'Yes', value: true},
          {text: 'No', value: false}
        ]
      }
    }
  }
</script>

<style scoped>
  .icon {
    color: #E55358;
    font-size: 24px;
  }

  .main {
    height: 100%;
    padding-bottom: 46px;
  }

  .map {
    margin-top: 20px;
    height: 250px;
    background: azure;
  }

  .no-rad {
    border-radius: 0 !important;
  }

</style>
