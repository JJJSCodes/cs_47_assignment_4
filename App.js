import { StyleSheet, SafeAreaView, View } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes, Images } from "./assets/Themes";
import { SpotifyAuthButton, SongList } from './components';

export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth(true);

  return (
    <SafeAreaView style={styles.container}>
      {token ? <SongList tracks={tracks} /> : (
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
