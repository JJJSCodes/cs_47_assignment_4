import { StyleSheet, Text, Image, View, useWindowDimensions } from 'react-native';
import { Themes } from '../assets/Themes';

export default function Song({ trackNumber, image, songTitle, songArtist, albumName, songDuration }) {
    const { height, width } = useWindowDimensions(); 

    return (
        <View style={styles.container}>
            <Text numberOfLines={1} style={[styles.text, styles.track_number]}>{trackNumber}</Text>
            <Image style={{ ...styles.image, width: image.width, height: image.height }} source={{ uri: image.url}} />
            <View style={[styles.title_artist]}>
                <Text numberOfLines={1} style={styles.text}>{songTitle}</Text>
                <Text numberOfLines={1} style={[styles.text, styles.artist]}>{songArtist}</Text>
            </View>
            <Text numberOfLines={1} style={[styles.text, styles.album_name]}>{albumName}</Text>
            <Text numberOfLines={1} style={[styles.text, styles.song_duration]}>{songDuration}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 10,
    },
    track_number: {
        flex: 2,
        textAlign: 'center',
    },
    title_artist: {
        flex: 4.5,
        marginRight: 15,
        marginLeft: 15,
    },
    album_name: {
        flex: 4,
        marginRight: 5,
    },
    song_duration: {
        flex: 3,
    },
    image: {
        resizeMode: 'contain',
    },
    artist: {
        color: Themes.colors.gray,
    },
    text: {
        fontSize: 12,
        color: Themes.colors.text,
    }
  });