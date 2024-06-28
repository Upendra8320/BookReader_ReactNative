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
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
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
    borderWidth: 2,
    borderColor: '#7776b3',
    margin: 2,
    borderRadius: 10,
  },

  mainContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 12,
    marginVertical: 16,
  },
  bookContainer: {
    width: '36%', // Adjust based on your preference for spacing
    marginBottom: 16,
  },
  book: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    overflow: 'hidden',
  },
  bookCover: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#f0f0f0',
    height: 200,
    resizeMode: 'cover',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  bookDetails: {
    padding: 12,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export const examples = [
  {
    title: 'Basic',
    description: 'The minimum to work.',
    route: 'Basic',
    image: require('./src/assets/inland.png'),
    component: Basic,
  },
  {
    title: 'Bookmarks',
    description: 'Using bookmarks in the book',
    route: 'Bookmarks',
    image: require('./src/assets/inland.png'),
    component: Bookmarks,
  },
  {
    title: 'Full Example',
    description: 'A complete reader using library resources',
    route: 'FullExample',
    image: require('./src/assets/inland.png'),
    component: FullExample,
  },
  // {
  //   title: 'Full Example',
  //   description: 'A complete reader using library resources',
  //   route: 'FullExample1',
  //   image: require('./src/assets/inland.png'),
  //   component: FullExample,
  // },
  // {
  //   title: 'Full Example',
  //   description: 'A complete reader using library resources',
  //   route: 'FullExample2',
  //   image: require('./src/assets/inland.png'),
  //   component: FullExample,
  // },
  // {
  //   title: 'Full Example',
  //   description: 'A complete reader using library resources',
  //   route: 'FullExample3',
  //   image: require('./src/assets/inland.png'),
  //   component: FullExample,
  // },
  // {
  //   title: 'Full Example',
  //   description: 'A complete reader using library resources',
  //   route: 'FullExample4',
  //   image: require('./src/assets/inland.png'),
  //   component: FullExample,
  // },
  // {
  //   title: 'Full Example',
  //   description: 'A complete reader using library resources',
  //   route: 'FullExample5',
  //   image: require('./src/assets/inland.png'),
  //   component: FullExample,
  // },
  // {
  //   title: 'Full Example',
  //   description: 'A complete reader using library resources',
  //   route: 'FullExampl6',
  //   image: require('./src/assets/inland.png'),
  //   component: FullExample,
  // },
  // {
  //   title: 'Full Example',
  //   description: 'A complete reader using library resources',
  //   route: 'FullExampl7',
  //   image: require('./src/assets/inland.png'),
  //   component: FullExample,
  // },
  // {
  //   title: 'Full Example',
  //   description: 'A complete reader using library resources',
  //   route: 'FullExample8',
  //   image: require('./src/assets/inland.png'),
  //   component: FullExample,
  // },
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
      {/* {examples.map(({title, description, route, image}, index) => (
        // <TouchableOpacity
        //   style={styles.button}
        //   key={route}
        //   onPress={() => navigate(route as never)}>
        //   <Text style={{color: 'black'}}>{title}</Text>
        //   <Text style={{color: 'black'}}>{description}</Text>
        // </TouchableOpacity>
      ))} */}
      <View style={styles.mainContainer}>
        {examples.map(({title, route, image}, index) => (
          <TouchableOpacity
            style={styles.bookContainer}
            key={index}
            onPress={() => navigate(route as never)}>
            <View style={styles.book}>
              <Image source={image} style={styles.bookCover} />
              <View style={styles.bookDetails}>
                <Text style={styles.bookTitle}>{title}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
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
