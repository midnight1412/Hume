import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import { BODY, COLORS, SIZE } from "../../constants/Theme";
import PressableOpacity from "../PressableOpacity/PressableOpacity";

const PlatformButton = (props) => {
    return (
        <PressableOpacity>
            <View style={styles.container}>
                <FastImage source={ props.logo } style={styles.logo} tintColor={props.tintColor} resizeMode="contain" />
                <Text style={styles.title}> {props.title} </Text>
            </View>
        </PressableOpacity>
    )
}

export default PlatformButton;

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        aspectRatio: 380 / 60,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        columnGap: SIZE.PADDING / 3,
        borderRadius: SIZE.PADDING
    },
    logo: {
        width: SIZE.PADDING * 1.5,
        aspectRatio: 1,
    },
    title: {
        ...BODY.LARGE_SEMIBOLD,
        color: COLORS.GREY_SCALE_900
    }
})