import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dolar from './screens/dolar';
import Euro from './screens/euro';

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <Drawer.Navigator initialRouteName="Dólar">
      <Drawer.Screen name="Dólar" component={Dolar} options={{ title: 'Cotação do Dólar' }} />
      <Drawer.Screen name="Euro" component={Euro} options={{ title: 'Cotação do Euro' }} />
    </Drawer.Navigator>
  );
}
