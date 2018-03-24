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
            <h3 class="text-light">Input Route</h3>
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
        <b-col cols="12" class="text-left pt-2 pb-2">Please input the
          route
        </b-col>
        <b-col cols="12" style="background: #fceae5; margin-bottom: 5px;">
          <b-row>
            <b-col cols="3" style="background: #E55358;">
              <div style="display: table; height: 100%; width: 100%;">
                <p class="text-center"
                   style="
                    font-weight: bold;
                    color: #ffffff;
                    display: table-cell; vertical-align:middle;">
                  From
                </p>
              </div>
            </b-col>
            <b-col cols="9">
              <b-row>
                <b-col cols="12" style="margin: 5px 0;">
                  <b-row>
                    <b-col cols="2" class="p-0">
                      <i class="fa fa-map-marker icon"></i>
                    </b-col>
                    <b-col cols="10" class="pl-0">
                      <b-form-input v-model="text1"
                                    size="sm"
                                    type="text"
                                    placeholder="Where From"></b-form-input>
                    </b-col>
                  </b-row>
                </b-col>
                <b-col cols="12" style="margin: 5px 0;">
                  <b-row>
                    <b-col cols="2" class="p-0">
                      <i class="fa fa-clock icon"></i>
                    </b-col>
                    <b-col cols="10" class="pl-0">
                      <b-form-input v-model="text2"
                                    size="sm"
                                    type="text"
                                    placeholder="Time"></b-form-input>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </b-col>

          </b-row>
        </b-col>
        <b-col cols="12" style="background: #fceae5; margin-bottom: 5px;">
          <b-row>
            <b-col cols="3" style="background: #E55358;">
              <div style="display: table; height: 100%; width: 100%;">
                <p class="text-center"
                   style="
                    font-weight: bold;
                    color: #ffffff;
                    display: table-cell; vertical-align:middle;">
                  To
                </p>
              </div>
            </b-col>
            <b-col cols="9">
              <b-row>
                <b-col cols="12" style="margin: 5px 0;">
                  <b-row>
                    <b-col cols="2" class="p-0">
                      <i class="fa fa-map-marker icon"></i>
                    </b-col>
                    <b-col cols="10" class="pl-0">
                      <b-form-input v-model="text3"
                                    size="sm"
                                    type="text"
                                    placeholder="Where To"></b-form-input>
                    </b-col>
                  </b-row>
                </b-col>
                <b-col cols="12" style="margin: 5px 0;">
                  <b-row>
                    <b-col cols="2" class="p-0">
                      <i class="fa fa-clock icon"></i>
                    </b-col>
                    <b-col cols="10" class="pl-0">
                      <b-form-input v-model="text4"
                                    size="sm"
                                    type="text"
                                    placeholder="Time"></b-form-input>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </b-col>

          </b-row>
        </b-col>
        <b-col cols="12" class="text-left pt-2 pb-2">Please choose the transportation type.</b-col>
        <b-col cols="12">
          <b-form-radio-group id="btnradios1"
                              buttons
                              button-variant="outline-primary"
                              v-model="selectedTransport"
                              :options="optionsTransport"
                              name="transportation"/>
        </b-col>
        <b-col cols="12" class="text-left pt-2 pb-2">Please choose the interval.</b-col>
        <b-col cols="12">
          <b-form-radio-group id="btnradios2"
                              buttons
                              button-variant="outline-primary"
                              v-model="selectedInterval"
                              :options="optionsInterval"
                              name="interval"/>
        </b-col>
      </b-row>
    </b-container>
    <div class="map">
      MAP HERE
    </div>
    <button class="btn btn-primary btn-block no-rad"><b>Register</b></button>
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
        text1: '',
        text2: '',
        text3: '',
        text4: '',
        selectedTransport: '1',
        selectedInterval: 'W',
        optionsTransport: [
          {text: 'Car', value: '1'},
          {text: 'Motorcycle', value: '2'},
          {text: 'Bicycle', value: '3'}
        ],
        optionsInterval: [
          {text: 'Weekdays', value: 'W'},
          {text: 'Holidays', value: 'H'},
          {text: 'Others', value: 'O'}
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
