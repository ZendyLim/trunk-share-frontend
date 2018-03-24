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
            <h3 class="text-light">Find Driver</h3>
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
        <b-col cols="12">
          <b-row>
            <b-col cols="2" class="p-0">
              <b-img width="50" height="50" src="../../assets/Food.svg"/>
            </b-col>
            <b-col cols="2" class="p-0">
              <b-img width="50" height="50" src="../../assets/Liquid.svg"/>
            </b-col>
            <b-col cols="2" class="p-0">
              <b-img width="50" height="50" src="../../assets/Tableware.svg"/>
            </b-col>
            <b-col cols="2" class="p-0">
              <b-img width="50" height="50" src="../../assets/Furniture.svg"/>
            </b-col>
            <b-col cols="2" class="p-0">
              <b-img width="50" height="50" src="../../assets/Cloth.svg"/>
            </b-col>
            <b-col cols="2" class="p-0">
              <b-img width="50" height="50" src="../../assets/Other.svg"/>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12" class="pt-2 pb-2">
          <b-row>
            <b-col cols="8" class="text-left">
              * Is it fragile?
            </b-col>
            <b-col cols="4">
              <b-form-radio-group id="btnradios2"
                                  buttons
                                  size="sm"
                                  button-variant="outline-primary"
                                  v-model="selected"
                                  :options="options"
                                  name="interval"/>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12" class="text-left pt-2 pb-2">Please input expected route
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
      </b-row>
    </b-container>
    <div class="map">
      MAP HERE
    </div>
    <button class="btn btn-primary btn-block no-rad"><b>Search</b></button>
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
