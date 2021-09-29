import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RouteList } from './routeList';
import { COLORS } from '../config/themes/colors';


const Stack = createNativeStackNavigator();


const renderAllScreen = () => {
    return RouteList.map((item, index) => <Stack.Screen
        key={index}
        options={{
            headerShown: item.isShowHeader,
            title: item.title,
            headerStyle: { backgroundColor: COLORS.PRIMARY },
            headerTintColor: COLORS.WHITE
        }}
        name={item.name}
        component={item.component}
    />)
}

export {
    renderAllScreen
}