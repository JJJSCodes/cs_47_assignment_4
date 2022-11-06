import { StyleSheet, Text, Image, View, useWindowDimensions, FlatList } from 'react-native';
import { Themes, Images } from '../assets/Themes';
import Song from './Song';
import { millisToMinutesAndSeconds } from '../utils';

export default function SongList({ tracks, navigation }) {
    const { height, width } = useWindowDimensions();

    const renderItem = ({ item }) => (
        <Song
            navigation={navigation}
            previewUrl={item.preview_url}
            externalUrl={item.external_urls.spotify}
            trackNumber={item.track_number}
            image={item.album.images[2]}
            songTitle={item.name}
            songArtist={item.artists[0].name}
            albumName={item.album.name}
            songDuration={millisToMinutesAndSeconds(item.duration_ms)}
        />
    )
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Image
                    source={Images.spotify}
                    style={{ ...styles.image, height: height * 0.05, width: width * 0.05 }}
                />
                <Text style={styles.text}>My Top Tracks</Text>
            </View>
            <FlatList
                testId={'SongList'}
                style={styles.flat_list}
                data={tracks}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>    
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Themes.colors.background,
        flexDirection: 'column',
    },
    title: {
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: 'row',
    },
    flat_list: {
        marginVertical: 10,
    },
    image: {
        resizeMode: 'contain',
        alignItems: "center",
    },
    text: {
        fontWeight: "bold",
        fontSize: 21,
        paddingHorizontal: 5,
        color: Themes.colors.text,
    }
  });