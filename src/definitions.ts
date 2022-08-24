export interface RouteNavigationTestPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
