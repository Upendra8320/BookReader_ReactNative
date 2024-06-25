/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import {MD3DarkTheme, MD3LightTheme, PaperProvider} from 'react-native-paper';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {Basic} from './src/components/Basic';
import {Bookmarks} from './src/components/Bookmarks';
import {FullExample} from './src/components/FullExample';

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    padding: 8,
    width: '90%',
    borderBottomColor: '#c0c0c0',
    borderBottomWidth: 2,
  },
});

export const examples = [
  {
    title: 'Basic',
    description: 'The minimum to work.',
    route: 'Basic',
    component: Basic,
  },
  {
    title: 'Bookmarks',
    description: 'Using bookmarks in the book',
    route: 'Bookmarks',
    component: Bookmarks,
  },
  {
    title: 'Full Example',
    description: 'A complete reader using library resources',
    route: 'FullExample',
    component: FullExample,
  },
];

function Examples() {
  const {navigate} = useNavigation();
  const insets = useSafeAreaInsets();
  return (
    <ScrollView
      contentContainerStyle={{
        ...styles.container,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
      showsVerticalScrollIndicator={false}>
      {examples.map(({title, description, route}) => (
        <TouchableOpacity
          style={styles.button}
          key={route}
          onPress={() => navigate(route as never)}>
          <Text>{title}</Text>
          <Text>{description}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

function App(): React.JSX.Element {
  const colorScheme = useColorScheme();

  return (
    <PaperProvider
      theme={colorScheme === 'dark' ? MD3DarkTheme : MD3LightTheme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Examples">
            <Stack.Screen
              name="Examples"
              options={{title: 'Examples'}}
              component={Examples}
            />

            {examples.map(({title, route, component: Example}) => (
              <Stack.Screen
                key={route}
                name={route}
                options={{
                  title,
                  headerShown: ![
                    'Bookmarks',
                    'TableOfContents',
                    'JavascriptInjection',
                    'Search',
                    'CustomThemes',
                    'FullExample',
                  ].includes(route),
                }}
                component={Example}
              />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

export default App;
