import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ.js";
import { fromLonLat } from "ol/proj";
import OSM from "ol/source/OSM.js";

function createMap({ center, zoom = 10, minZoom = 6, maxZoom = 18, mapUrl }) {
  console.log(mapUrl)
  return new Map({
    target: "map",
    layers: [
      new TileLayer({
        source: mapUrl // 是否传入 XYZ 形式的链接 XYZ 源用于通过包含缩放级别和切片网格 x/y 坐标的 URL 访问的切片数据。
          ? new XYZ({
              url: mapUrl
            })
          : new OSM() // openstreetmap
      })
    ],
    view: new View({
      center: fromLonLat(
        center ? [center[1], center[0]] : [103.831788, 30.048318]
      ), // openlayers center 默认使用 经纬度 如果传递的是 [纬度，经度] 那就需要使用 fromLonLat 转换
      zoom: zoom,
      maxZoom: maxZoom,
      minZoom: minZoom
    })
  });
}
export { createMap };
