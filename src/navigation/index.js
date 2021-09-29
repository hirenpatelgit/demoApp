import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/**
 * render all screen stack
 */
import { renderAllScreen } from './stackScreen';

import { SCREEN_DASHBOARD, SCREEN_LOGIN } from './screenName';
import { useSelector, useDispatch } from 'react-redux';


const Stack = createNativeStackNavigator();


/**
 * main root
 * @returns 
 */
const RootNavigation = () => {

  const isAlreadyLogin = useSelector((state) => state.rLogin.isLogin)

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isAlreadyLogin === true ? SCREEN_DASHBOARD : SCREEN_LOGIN}>
        {renderAllScreen()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
