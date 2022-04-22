
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './rootNavigation';

import Login from '../pages/Login/LoginScreen'
import Type from "../pages/Steps/type";
import Car from "../pages/Steps/car";
import User from "../pages/Steps/user";
import Home from "../pages/Home";

const Stack = createStackNavigator();

function Routes() {
     return (
       <NavigationContainer>
         <Stack.Navigator>

          <Stack.Screen 
           options={{headerShown:false}}
           name="Car" 
           component={Car} 
           />

          <Stack.Screen 
           options={{headerShown:false}}
           name="User" 
           component={User} 
           />

          <Stack.Screen 
           options={{headerShown:false}}
           name="Home" 
           component={Home} 
           />
         </Stack.Navigator>
       </NavigationContainer>
     );
   }
   
   export default Routes;