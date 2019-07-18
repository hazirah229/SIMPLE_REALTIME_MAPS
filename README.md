# Simple RealTime Maps
 - Simple Realtime Maps apps, when user join a room, and other users within the same room send a locations,
 it will appears in every users in the room. the maps on the browser will change in real time.
 - This is a basic implimentation if want to build application such as real time location tracker.
 - Super Simple demo, build using Node.js,

## Technologies Used in this Demo:
 - Node.js and Express.js as the Http Server,
 - Socket.io, as socket server for real time communication.
 - Vue.js for dynamic client-side page.

## Brief Designs:
 - this apps consist of 2 system:
    1. Back-end Express.js Server running on port 5000:
        - consist of basic HTTP server and Socket.io
        - routes are in the routes folder,
        - if want to implement other features, can checkout my [NODE_SIMPLE_AUTHENTICATION](https://github.com/nurbxfit/NODE_SIMPLE_AUTHENTICATION)
    2. Front-end Vue.js running on port 8080:
        - Vue component:
            - Map component:
                - used vue-2-leaflet and socket.io-client,
                - also used bootsrap-vue, cuz I am lazy to write the css.

    3. Maps used in this demo is leaflet.js
        - leaflet.js is free Map API check this out: [leaflet.js](https://leafletjs.com/examples/quick-start/)
        - leaflet drawbacks compare to Google Map APIs:
            - lack of prebuild routing engine API, if you want to build navigation system,
            - alternative is by using Open Source Routing Machine such as implemented in [liedman's leflet Routing Machine API](http://www.liedman.net/leaflet-routing-machine/tutorials/).
        - leaflet is a great free open source alternative to Google Maps API, for student who want to learn and implement their great ideas.
        - if wan to use Google Maps API, this source code is not for you, cuz, the implementation is slighhtly different.

## Usage:
1. git clone this repo.
2. cd into project folder : cd SIMPLEREALTIME_MAPS
3. npm install
4. start the express server using command: npm start
5. open another terminal and cd into client folder: cd SIMPLEREALTIME_MAPS/client
6. npm install
7. run Vue.js using command: npm run serve.
8. open two (2 or more) browser and navigate to localhost:8080 for vue.js client page.
9. subscribe to a room and start sending coordinates and see the changes in another browser.


## References: 
 1. [leaflet.js](https://leafletjs.com/examples/quick-start/)
 2. [vue-socket.io](https://www.npmjs.com/package/vue-socket.io)
 3. [socket.io](https://socket.io/docs/)
 4. [bootsrap-vue](https://bootstrap-vue.js.org/)
 5. Stack overflow and variaous other guides upon googling. thanks You People of net.
