import { registerPlugin } from '@capacitor/core';

import type { RouteNavigationTestPlugin } from './definitions';

const RouteNavigationTest = registerPlugin<RouteNavigationTestPlugin>('RouteNavigationTest', {
  web: () => import('./web').then(m => new m.RouteNavigationTestWeb()),
});

export * from './definitions';
export { RouteNavigationTest };
