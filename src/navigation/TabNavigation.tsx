import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, LearnFeaturesScreen, } from '../screens';
import { RootStackParams } from './RootStackParams';


const Tab = createBottomTabNavigator<RootStackParams>();

const TabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="LearnFeaturesScreen" component={LearnFeaturesScreen} />
            <Tab.Screen name="Home" component={HomeScreen} />
        </Tab.Navigator>
    )
}

export default TabNavigation

