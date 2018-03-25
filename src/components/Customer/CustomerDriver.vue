<template>
  <div class="main">
    <div>
      <b-navbar fixed="top" type="dark" class="bg-pink">
        <b-navbar-nav>
          <b-nav-item>
            <router-link :to="{ name: 'CustomerMain' }" style="color: #ffffff;">
              <i class="fa fa-2x fa-angle-left"></i>
            </router-link>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="m-auto">
          <b-nav-item>
            <h3 class="text-light">Choose Driver</h3>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <b-img rounded="circle" width="40" height="40" src="../../assets/img1.jpg" fluid/>
          </b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <b-container>
      <b-row style="padding-top: 75px;">
        <b-col cols="12" class="text-left pt-2 pb-2">Please choose a route.</b-col>
        <b-col cols="12" style="background: #fceae5; margin-bottom: 5px;" v-for="(driver, index) in drivers">
          <b-row>
            <b-col cols="3" class="text-center">
              <b-img rounded="circle" blank width="60" height="60" blank-color="#777" alt="img" class="m-1"/>
              <i class="fa fa-star icon" style="font-size: 10px;" v-for="n in driver.rating"></i>
            </b-col>
            <b-col cols="9">
              <b-row>
                <router-link :to="{ name: 'CustomerSelect', params: { id:driver.id }}">
                  <b-col cols="12" class="text-left">{{ driver.name }}</b-col>
                  <b-col cols="12" class="text-left">
                    <b-row>
                      <b-col cols="4">
                        <i class="fa fa-map-marker icon"></i> {{ driver.whereFrom }}
                      </b-col>
                      <b-col cols="2">
                        <i class="fa fa-arrow-right icon"></i>
                      </b-col>
                      <b-col cols="6" class="text-left">
                        <i class="fa fa-map-marker icon"></i> {{ driver.whereTo }}
                      </b-col>
                      <b-col cols="4">
                        <i class="fa fa-clock icon"></i> {{ driver.startAt }}
                      </b-col>
                      <b-col cols="2">
                        <i class="fa fa-arrow-right icon"></i>
                      </b-col>
                      <b-col cols="6" class="text-left">
                        <i class="fa fa-clock icon"></i> {{ driver.endAt }}
                      </b-col>
                      <b-col cols="6">
                        <i class="fa fa-sync icon"></i>
                        <span v-if="driver.frequency.Weekdays != null">Weekdays</span>
                        <span v-else-if="driver.frequency.Holidays != null">Holidays</span>
                        <span v-else>Other</span>
                      </b-col>
                      <b-col cols="6">
                        <i class="fa fa-circle icon"></i>
                        <span v-if="driver.commutionType.ByMotorcycle != null">Motorcycle</span>
                        <span v-else-if="driver.commutionType.ByCar != null">Car</span>
                        <span v-else>Bicycle</span>
                      </b-col>
                    </b-row>
                  </b-col>
                </router-link>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import Vue from 'vue'

  var drivers = [];

  export default {
    name: 'CustomerDriver',
    created: function () {
      Vue.http.get('http://87dff48b.ngrok.io/drivers').then(response => {
        this.drivers = response.body;
      }, response => {

      });
    },
    methods: {},
    data() {
      return {
        drivers: drivers
      }
    }
  }
</script>

<style scoped>
  .icon {
    color: #E55358;
  }

  .text-left {
    color: #000000;
  }
</style>
