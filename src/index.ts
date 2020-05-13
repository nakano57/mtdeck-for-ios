import { DisableZoom } from "./ts/disableZoom";
import { Config } from "./ts/config";

const disablezoom = new DisableZoom();
const config = new Config();

disablezoom.init();
setTimeout(() => {
  config.init();
}, 1000);
