import React, { createRef } from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { loginStackScreens, LoginStackParamList } from 'screens';
import RNBootSplash from 'react-native-bootsplash';

export const Stack = createStackNavigator<LoginStackParamList>();

export default function Router() {
  const navigationRef = createRef<NavigationContainerRef>();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        setTimeout(() => {
          RNBootSplash.hide({ fade: true }); // fade
        }, 2000);
      }}
    >
      <SafeAreaProvider>
        <Stack.Navigator>
          {Object.entries({
            ...loginStackScreens,
          }).map(([name, props]) => {
            return (
              <Stack.Screen
                key={name}
                name={name as keyof LoginStackParamList}
                {...props}
              />
            );
          })}
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
