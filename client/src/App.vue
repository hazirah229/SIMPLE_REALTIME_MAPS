<template>
  <div id="app">
    <Header/>
    <Map></Map>

  </div>
</template>

<script>
import Header from './components/Header'
import Map from './components/Map'

export default {
  name: 'app',
  components: {
    Header,
    Map

  },data(){
    return {

    }
  },
  methods:{

  },
  mounted(){
    
  }
}

//leaflet icon ref: https://github.com/KoRiGaN/Vue2Leaflet/issues/103
// eslint-disable-next-line  
delete L.Icon.Default.prototype._getIconUrl  
// eslint-disable-next-line  
L.Icon.Default.mergeOptions({  
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),  
  iconUrl: require('leaflet/dist/images/marker-icon.png'),  
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')  
})

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
