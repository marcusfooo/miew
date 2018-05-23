import EntityList from '../utils/EntityList';

import cpkPalette from './palettes/cpkPalette';
import jmolPalette from './palettes/jmolPalette';
import vmdPalette from './palettes/vmdPalette';

const palettes = new EntityList([
  cpkPalette,
  jmolPalette,
  vmdPalette,
]);

/** @deprecated */
Object.defineProperty(palettes, 'list', {
  get: function() {
    return this.all;
  },
});

/** @deprecated */
Object.defineProperty(palettes, 'any', {
  get: function() {
    return this.first;
  },
});

export default palettes;
