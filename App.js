import { StyleSheet, SafeAreaView, View } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes, Images } from "./assets/Themes";
import { SpotifyAuthButton, SongList } from './components';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { WebView } from 'react-native-webview';

const Stack = createStackNavigator();

export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth(true);

  const SongListWrapper = ({ navigation }) => {
    return (
      <SongList tracks={tracks} navigation={navigation} />
    )
  }

  const WebPreviewWrapper = ({ navigation, route }) => {
    const { url } = route.params;
    return (
      <WebView source={{ uri: url }} />
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      {token ?
        <NavigationContainer>
          {console.log(tracks[0])}
          <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="Home" component={SongListWrapper} />
              <Stack.Screen name="Song details" component={WebPreviewWrapper} />
              <Stack.Screen name="Song preview" component={WebPreviewWrapper} />
            </Stack.Navigator>
          </NavigationContainer>
        // <SongList tracks={tracks} />
        :
      (
        <View style={styles.boxing}>
          <SpotifyAuthButton onClick={() => getSpotifyAuth()} />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  boxing: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: Themes.colors.background,
    flex: 1,
  },
});
