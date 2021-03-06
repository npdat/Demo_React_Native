/**
 * Tabs Scenes
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import { Scene } from 'react-native-router-flux';

// Consts and Libs
import { AppConfig } from '@constants/';
import { AppStyles, AppSizes } from '@theme/';

// Components
import { TabIcon } from '@ui/';
import { TabIconRemix } from '@ui/';
import { NavbarMenuButton } from '@containers/ui/NavbarMenuButton/NavbarMenuButtonContainer';

// Scenes
import Placeholder from '@components/general/Placeholder';
import About from '@components/general/About';
import Error from '@components/general/Error';
import StyleGuide from '@containers/StyleGuideView';
import Recipes from '@containers/recipes/Browse/BrowseContainer';
import RecipeView from '@containers/recipes/RecipeView';

const navbarPropsTabs = {
  ...AppConfig.navbarProps,
  renderLeftButton: () => <NavbarMenuButton />,
  sceneStyle: {
    ...AppConfig.navbarProps.sceneStyle,
    paddingBottom: AppSizes.tabbarHeight,
  },
};

/* Routes ==================================================================== */
const scenes = (
  <Scene
    {...navbarPropsTabs}
    key={'recipes'}
    title={'Recipes'}
    icon={props => TabIcon({ ...props, icon: 'search' })}
  >
    <Scene
      {...navbarPropsTabs}
      key={'recipesListing'}
      component={Recipes}
      title={'Recipes'}
      analyticsDesc={'Recipes: Browse Recipes'}
    />
    <Scene
      {...AppConfig.navbarProps}
      key={'recipeView'}
      component={RecipeView}
      getTitle={props => ((props.title) ? props.title : 'View Recipe')}
      analyticsDesc={'RecipeView: View Recipe'}
    />
  </Scene>

);

export default scenes;
