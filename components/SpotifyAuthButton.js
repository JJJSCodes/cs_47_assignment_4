import { StyleSheet, Text, View, Pressable, Image, useWindowDimensions } from 'react-native';
import { Themes, Images } from '../assets/Themes'

export default function Button({ onClick }) {
    const { height, width } = useWindowDimensions();
    return (
        <Pressable testID={'AuthButton'} style={styles.button} onPress={onClick}>
            <Image
                source={Images.spotify}
                style={{ ...styles.image, height: height * 0.03, width: width * 0.03 }}
            />
            <Text style={styles.text}>CONNECT WITH SPOTIFY</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 999999,
        backgroundColor: Themes.colors.spotify,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 10,
    },
    image: {
        resizeMode: 'contain',
        alignItems: "center",
    },
    text: {
        textAlign: 'center',
        fontSize: 13,
        paddingHorizontal: 5,
        paddingVertical: 5,
        color: Themes.colors.white,
    }
  });