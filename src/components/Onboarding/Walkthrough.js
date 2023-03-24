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
import StepProgressBar from "../StepProgressBar/StepProgressBar";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const Walkthrought = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <FastImage source={ props.imageURL } style={ styles.image } resizeMode="contain" />
            </View>
            <View style={styles.bottom}>
                <View style={styles.intro}>
                    <Text style={styles.textIntro}>
                        {props.message}
                    </Text>
                </View>
                <StepProgressBar numStep={props.numberStep} stepIndex={props.stepIndex} />

                <ButtonComponent 
                    title="Next"
                    onPress={props.onPressButton}
                />
            </View>
        </View>
    )
}

export default Walkthrought;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: SIZE.PADDING,
        paddingVertical: SIZE.PADDING * 2
    },
    body: {
    },
    bottom: {
        flex: 1,
        paddingTop: SIZE.PADDING * 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'stretch'
    },
    image: {
        width: DeviceInfo.WIDTH - (SIZE.PADDING * 2),
        maxWidth: 365,
        aspectRatio: 365 / 379,
    },
    textIntro: {
        ...HEADING.H2,
        color: COLORS.GREY_SCALE_900,
        textAlign: 'center'
    }
})