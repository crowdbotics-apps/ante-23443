import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings186577Navigator from '../features/Settings186577/navigator';
import UserProfile186570Navigator from '../features/UserProfile186570/navigator';
import Settings186569Navigator from '../features/Settings186569/navigator';
import Settings186567Navigator from '../features/Settings186567/navigator';
import SignIn2186565Navigator from '../features/SignIn2186565/navigator';
import SignUp11186563Navigator from '../features/SignUp11186563/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings186577: { screen: Settings186577Navigator },
UserProfile186570: { screen: UserProfile186570Navigator },
Settings186569: { screen: Settings186569Navigator },
Settings186567: { screen: Settings186567Navigator },
SignIn2186565: { screen: SignIn2186565Navigator },
SignUp11186563: { screen: SignUp11186563Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
