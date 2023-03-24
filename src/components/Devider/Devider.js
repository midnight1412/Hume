import React from "react";
import { 
    View,
    StyleSheet, 
    Text
} from "react-native";
import { BODY, COLORS, SIZE } from "../../constants/Theme";

const Devider = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.line} />
            <View style={styles.wrapper}>
                <Text style={styles.title}> {props.title} </Text>
            </View>
        </View>
    )
}

export default Devider;

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: SIZE.PADDING / 2
    },
    line: {
        height: 1,
        position: 'absolute',
        left: SIZE.SPACE / 4,
        right: SIZE.SPACE / 4,
        backgroundColor: COLORS.GREY_SCALE_200
    },
    wrapper: {
        paddingHorizontal: SIZE.PADDING / 3,
        backgroundColor: COLORS.WHITE
    },
    title: {
        ...BODY.EXTRA_SEMIBOLD,
        color: COLORS.GREY_SCALE_700
    }
})