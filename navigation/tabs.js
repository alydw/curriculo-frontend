import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../pages/HomeScreen"
import DetailsScreen from "../pages/Details"
import More from "../pages/More"
import { StyleSheet } from "react-native"
import Query from "../pages/Query"

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
            <Tab.Screen name="Details" component={DetailsScreen}></Tab.Screen>
            <Tab.Screen name="More" component={More}></Tab.Screen>
            <Tab.Screen name="Query" component={Query}></Tab.Screen>
        </Tab.Navigator>
    )
}

export default Tabs;