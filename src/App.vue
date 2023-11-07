<template>
  <div>
    <div id="map" style="width: 100%; height: 500px"></div>
  </div>
</template>

<script>
import "ol/ol.css";
import { createMap } from "./utils/initMap.js";

export default {
  name: "createMap",
  mounted() {
    this.map = createMap({
      center: [30.048318, 103.831788], // 中心点
      minZoom: 9, // 最小缩放
      maxZoom: 19, // 最大缩放
      zoom: 14, // 默认缩放
      mapUrl: "http://39.100.45.184:20080/map/tiles/{z}/{x}/{y}.jpg", // google xyz
    });
  },

  // Rest of the code remains the same
  // ...
};
</script>

<style>
/* Styles remain the same */
</style>
