import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// this two work together
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import { ImageScreen } from "./src/screens/ImageScreen";


const navigator = createStackNavigator(
  //* all the different routes that are defined/present in our application is here 
  //* we can navigate through these 
  //! createStackNavigator will pass a large navigator object to each of this routes defined here
  //! this prop is not present in any other normal component
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    ImageScreen: ImageScreen,
  },
  {
    // config
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);

/**
 * * stack stackNavigator is the one that decides what to show on the screen at any give time
 * * basically it handles the routing for us in react native
 */