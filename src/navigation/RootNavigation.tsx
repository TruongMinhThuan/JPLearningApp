import { createNavigationContainerRef, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, LearnStartScreen, RepetionPracticeScreen } from "../screens";
import { RootStackParams } from "./RootStackParams";
import TabNavigation from "./TabNavigation";


const RootStack = createNativeStackNavigator<RootStackParams>();
export const _refRootNavigation = createNavigationContainerRef<RootStackParams>();

const RootNavigation = () => {

    return (
        <NavigationContainer ref={_refRootNavigation}>
            <RootStack.Navigator
                initialRouteName="TabBar"
                screenOptions={{ headerShown: false }}
            >
                <RootStack.Screen name='TabBar' component={TabNavigation} />
                <RootStack.Screen name='LearnStartScreen' component={LearnStartScreen} />
                <RootStack.Screen name='RepetitionPracticeScreen' component={RepetionPracticeScreen} />


            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigation;
