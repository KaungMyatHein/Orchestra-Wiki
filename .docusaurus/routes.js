import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/my/',
    component: ComponentCreator('/my/', '8c6'),
    routes: [
      {
        path: '/my/',
        component: ComponentCreator('/my/', '6da'),
        routes: [
          {
            path: '/my/',
            component: ComponentCreator('/my/', '630'),
            routes: [
              {
                path: '/my/page-1/',
                component: ComponentCreator('/my/page-1/', 'e01'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my/page-2/',
                component: ComponentCreator('/my/page-2/', '472'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my/page-3/',
                component: ComponentCreator('/my/page-3/', 'ff1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my/page-4/',
                component: ComponentCreator('/my/page-4/', '540'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my/page-5/',
                component: ComponentCreator('/my/page-5/', '71d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my/',
                component: ComponentCreator('/my/', '822'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
