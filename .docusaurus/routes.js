import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/my/',
    component: ComponentCreator('/my/', '16b'),
    routes: [
      {
        path: '/my/',
        component: ComponentCreator('/my/', '3e0'),
        routes: [
          {
            path: '/my/',
            component: ComponentCreator('/my/', '44a'),
            routes: [
              {
                path: '/my/build-js-translation-engine/',
                component: ComponentCreator('/my/build-js-translation-engine/', '945'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my/Data_Storage/',
                component: ComponentCreator('/my/Data_Storage/', '749'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my/Design_Syncs.YAML_Bridge_Between_Figma_And_Code/',
                component: ComponentCreator('/my/Design_Syncs.YAML_Bridge_Between_Figma_And_Code/', 'f3e'),
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
                path: '/my/How_To_Set_Setting_For_Figma_Plugin/',
                component: ComponentCreator('/my/How_To_Set_Setting_For_Figma_Plugin/', '1dc'),
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
                path: '/my/Package_JSON/',
                component: ComponentCreator('/my/Package_JSON/', '3dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my/Possible_Error_You_Will_Face/',
                component: ComponentCreator('/my/Possible_Error_You_Will_Face/', '1d7'),
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
                path: '/my/Syncing_Tokens_To_Github/',
                component: ComponentCreator('/my/Syncing_Tokens_To_Github/', '30c'),
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
