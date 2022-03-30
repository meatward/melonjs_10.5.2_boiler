import { device } from 'melonjs/dist/melonjs.module.js';
import onload from './js/app.js';

      device.onReady(() => {
          onload();
      });