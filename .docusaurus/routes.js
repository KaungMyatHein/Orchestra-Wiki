import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/my/',
    component: ComponentCreator('/my/', '056'),
    routes: [
      {
        path: '/my/',
        component: ComponentCreator('/my/', '123'),
        routes: [
          {
            path: '/my/',
            component: ComponentCreator('/my/', '18f'),
            routes: [
              {
                path: '/my/Data_Storage/',
                component: ComponentCreator('/my/Data_Storage/', '749'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my/How_It_Works/',
                component: ComponentCreator('/my/How_It_Works/', '7a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my/How_To_Set_Up/',
                component: ComponentCreator('/my/How_To_Set_Up/', '8ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my/Prerequisites/',
                component: ComponentCreator('/my/Prerequisites/', '86d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my/Supported_Features/',
                component: ComponentCreator('/my/Supported_Features/', '054'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my/Things_To_Take_Care/',
                component: ComponentCreator('/my/Things_To_Take_Care/', '51f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my/Unsupported_Features/',
                component: ComponentCreator('/my/Unsupported_Features/', '56f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my/',
                component: ComponentCreator('/my/', 'd15'),
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
