declare interface RouteModel {
  path: string;
  exact?: boolean;
  strict?: boolean;
  component: React.ComponentType<{ routes?: RouteModel[] }>;
  routes?: RouteModel[];
  requireLogin?: boolean;
}
