import React from "react";
import { 
    View,
    Text, 
    StyleSheet
} from "react-native";
import PressableOpacity from "../PressableOpacity/PressableOpacity";
import { BODY, COLORS, SIZE } from "../../constants/Theme";

const ButtonComponent = (props) => {
    return (
        <PressableOpacity onPress={props.onPress} style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.title}>
                    {props.title}
                </Text>
            </View>
        </PressableOpacity>
    )
}

export default ButtonComponent;

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        flexDirection: 'row'
    },
    body: {
        flex: 1,
        aspectRatio: 380 / 58,
        maxWidth: 380,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.PRIMARY_500,
        borderRadius: SIZE.BORDER_RADIUS * 2,
    },
    title: {
        ...BODY.LARGE_SEMIBOLD,
        color: COLORS.WHITE
    }
})