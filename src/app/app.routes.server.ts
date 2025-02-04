import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'products/:category',
    renderMode: RenderMode.Client,
  },
  {
    path: 'product/:id',
    renderMode: RenderMode.Client,
  },
];
