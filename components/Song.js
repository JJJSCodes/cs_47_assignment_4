import { StyleSheet, Text, TouchableOpacity, Image, View, useWindowDimensions, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Themes } from '../assets/Themes';

export default function Song({ navigation, previewUrl, externalUrl, image, songTitle, songArtist, albumName, songDuration }) {
    const { height, width } = useWindowDimensions(); 

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Song details', { url: externalUrl })}  style={styles.container}>
            {/* <Text numberOfLines={1} style={[styles.text, styles.track_number]}>{trackNumber}</Text> */}
            <Pressable
                style={{ ...styles.pressable }}
                onPress={(e) => {
                    e.stopPropagation();
                    navigation.navigate('Song preview', {url: previewUrl});

                }}
            >
                <AntDesign name="play" size={16} color="#1DB954" />
            </Pressable>
            <Image style={{ ...styles.image, width: image.width, height: image.height }} source={{ uri: image.url}} />
            <View style={[styles.title_artist]}>
                <Text numberOfLines={1} style={styles.text}>{songTitle}</Text>
                <Text numberOfLines={1} style={[styles.text, styles.artist]}>{songArtist}</Text>
            </View>
            <Text numberOfLines={1} style={[styles.text, styles.album_name]}>{albumName}</Text>
            <Text numberOfLines={1} style={[styles.text, styles.song_duration]}>{songDuration}</Text>
        </TouchableOpacity>
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
    pressable: {
        flex: 2,
        alignItems: 'center',
    },  
    // track_number: {
    //     flex: 2,
    //     textAlign: 'center',
    // },
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