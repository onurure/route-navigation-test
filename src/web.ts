import { WebPlugin } from '@capacitor/core';

import type { RouteNavigationTestPlugin } from './definitions';

export class RouteNavigationTestWeb extends WebPlugin implements RouteNavigationTestPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
