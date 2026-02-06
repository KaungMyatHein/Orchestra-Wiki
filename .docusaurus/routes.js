import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/my/',
    component: ComponentCreator('/my/', '707'),
    routes: [
      {
        path: '/my/',
        component: ComponentCreator('/my/', 'fcf'),
        routes: [
          {
            path: '/my/',
            component: ComponentCreator('/my/', 'ce0'),
            routes: [
              {
                path: '/my/How_It_Works/',
                component: ComponentCreator('/my/How_It_Works/', '7a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my/How_To_Set_Setting_For_Figma_Plugin/',
                component: ComponentCreator('/my/How_To_Set_Setting_For_Figma_Plugin/', '209'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my/Possible_Error_You_Will_Face/',
                component: ComponentCreator('/my/Possible_Error_You_Will_Face/', '9f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my/Prerequisites/',
                component: ComponentCreator('/my/Prerequisites/', 'd10'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my/Setup_Orchestra_CLI/',
                component: ComponentCreator('/my/Setup_Orchestra_CLI/', 'd45'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my/Supported_Features/',
                component: ComponentCreator('/my/Supported_Features/', '75f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my/Syncing_Tokens_To_Github/',
                component: ComponentCreator('/my/Syncing_Tokens_To_Github/', 'd91'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my/Things_To_Take_Care/',
                component: ComponentCreator('/my/Things_To_Take_Care/', 'd20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my/Unsupported_Features/',
                component: ComponentCreator('/my/Unsupported_Features/', 'd49'),
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
