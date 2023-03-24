import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Pressable
} from "react-native";

import FastImage from "react-native-fast-image";

import Icons from "../../constants/Icon";
import { COLORS, HEADING, SIZE } from "../../constants/Theme";
import { Animations } from "../../constants/Animation";
import { DeviceInfo } from "../../constants/DeviceInfo";
import { Image } from "../../constants/Image";
import LinearGradient from "react-native-linear-gradient";
import PressableOpacity from "../PressableOpacity/PressableOpacity";
import StepProgressBar from "../StepProgressBar/StepProgressBar";

const Walkthrought1 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <FastImage source={ Image.Walkthrought1 } style={styles.image} />
            </View>
            <View style={styles.bottom}>
                <View></View>
                <View style={styles.steps}>
                    <StepProgressBar numStep={3} />
                </View>
                <PressableOpacity 
                    onPress={() => alert(1)}
                >
                    <View style={{}}>
                        <Text>
                            Next
                        </Text>
                    </View>
                </PressableOpacity>
            </View>
        </View>
    )
}

export default Walkthrought1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        borderWidth: 1,

    },
    image: {
        width: 120,
        aspectRatio: 1
    },
    bottom: {
        borderWidth: 1,
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'

    },
    step: {
        width: 8,
        height: 8,
        borderRadius: 10,
        backgroundColor: COLORS.GREY_SCALE_300
    }    
})