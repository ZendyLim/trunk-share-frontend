<template>
  <div class="main">
    <div>
      <b-navbar fixed="top" type="dark" class="bg-pink">
        <b-navbar-nav>
          <b-nav-item>
            <i class="fa fa-2x fa-angle-left"></i>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="m-auto">
          <b-nav-item>
            <h3 class="text-light">Confirm Driver</h3>
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
        <b-col cols="12" class="pt-5">
          <b-img rounded="circle" blank width="115" height="115" blank-color="#777" alt="img" class="m-1"/>
        </b-col>
        <b-col cols="12" class="pt-2 pb-2">
          <i class="fa fa-star icon"></i>
          <i class="fa fa-star icon"></i>
          <i class="fa fa-star icon"></i>
        </b-col>
        <b-col cols="12" class="pt-2 pb-5">
          <b>Name Name</b>
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
  export default {
    name: 'CustomerSelect',
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
