<template>
    <div id="mymap">
        <l-map :zoom=15 :center="coord" >
            <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" > </l-tile-layer>
            <l-marker :latLng="coord"></l-marker>
        </l-map>
        <div class="card-footer">
          <form @submit.prevent="subscribe">
              <div class="gorm-group">
                  <label for="user">ROOM:</label>
                  <input type="text" v-model="room" class="form-control">
              </div>
              <button type="submit" class="btn btn-success">Subscribe</button>
          </form>
      </div>
      <h1>Room: {{room}}</h1>
        <div class="card-footer">
          <form @submit.prevent="sendLocation">
              <div class="gorm-group">
                  <label for="lat">Lat:</label>
                  <input type="text" v-model="coord[0]" class="form-control">
              </div>
              <div class="gorm-group pb-3">
                  <label for="long">Long:</label>
                  <input type="text" v-model="coord[1]" class="form-control">
              </div>
              <button type="submit" class="btn btn-success">Send</button>
          </form>
      </div>
      <h1>coordinate: {{coord}}</h1>
    </div>

</template>

<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import io from 'socket.io-client';
//import { Icon } from 'leaflet'

export default {
  name: 'mymap',
  components:{
      LMap,
      LTileLayer,
      LMarker
  },
  data(){
      return {
          room:'none',
          coord:['5.3559', '100.3025'],
          socket: io('localhost:5000'),
          //socket2: io('localhost:5000/new-namespace')
      }
  },
  methods:{
      sendLocation(e){
          e.preventDefault();
          
          //send coord
          this.socket.emit('send:coords',{
              user: this.user,
              room: this.room,
              coord: this.coord,
          });
      },
      subscribe(e){
          e.preventDefault();
          this.socket.emit('subscribe',{
              room:this.room,
          })
      }
  },
  mounted : function(){
      //create socket 
      
      this.socket.on('message',(msg)=>{
          console.log('msg:',msg);
          console.log(this.coord);

      })

        //load coordinate from server
      this.socket.on('load:coords',(data)=>{
          this.coord = data.coord; 
          console.log('msg=load:',data);
          console.log("Coord=>",this.coord);
      })
  }
}
</script>

<style>
#mymap{
    width: 80vw;
    height: 80vh;
}
</style>