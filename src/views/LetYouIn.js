import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Pressable
} from "react-native";
import FastImage from "react-native-fast-image";
import ButtonComponent from "../components/ButtonComponent/ButtonComponent";
import PlatformButton from "../components/ButtonComponent/PlatformButton";
import OptionLine from "../components/Devider/Devider";
import PressableOpacity from "../components/PressableOpacity/PressableOpacity";
import { DeviceInfo } from "../constants/DeviceInfo";
import Icon from "../constants/Icon";
import { Image } from "../constants/Image";
import { BODY, COLORS, HEADING, SIZE } from "../constants/Theme";

const LetYouIn = () => {
    return (
        <View style={styles.container} >
            <View style={styles.controlBar}>
                <PressableOpacity
                    onPress={() => alert("1")}
                >
                    <FastImage source={ Icon.LIGHT_BORDER.ARROW_LEFT } style={styles.arrowLeft} />
                </PressableOpacity>
            </View>

            <View style={styles.logoWrapper}>
                <FastImage source={ Image.LetYouIn } style={ styles.logo } resizeMode="contain" />
            </View>

            <View style={styles.titleWrapper}>
                <Text style={styles.title}> Let's you in </Text>
            </View>

            <View style={styles.buttonGroup}>
                <PlatformButton logo={ Image.Google } title="Continue with Google" />
                <PlatformButton logo={ Image.Facebook } title="Continue with Facebook" />
                <PlatformButton logo={ Image.Apple } title="Continue with Apple" tintColor={COLORS.BLACK}/>
                <OptionLine title="or" />
                <ButtonComponent 
                    title="Sign in with password"
                />
            </View>

            <View style={styles.signUpRecommend}> 
                <Text style={styles.recommendText}>
                    Don't have an account? 
                </Text>
                <Pressable
                    onPress={() => alert("sign up")}
                >
                    <Text style={styles.signUpText}>
                        Sign up
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

export default LetYouIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red',
        paddingHorizontal: SIZE.PADDING,
        paddingTop: SIZE.PADDING / 2,
        paddingBottom: SIZE.PADDING * 2,
        backgroundColor: COLORS.WHITE,
        justifyContent: 'space-between'
    },
    controlBar: {
    },
    arrowLeft: {
        width: SIZE.SPACE * 0.9,
        aspectRatio: 1
    },
    logoWrapper: {
        alignItems: 'center'
    },
    logo: {
        width: DeviceInfo.WIDTH * 0.6,
        maxWidth: 250,
        aspectRatio: 237 / 200
    },
    titleWrapper: {
        alignItems: 'center'
    },
    title: {
        color: COLORS.GREY_SCALE_900,
        ...HEADING.H1
    },
    buttonGroup: {
        gap: SIZE.PADDING
    },
    signUpRecommend: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    recommendText: {
        color: COLORS.GREY_SCALE_500,
        ...BODY.MEDIUM_REGULAR,
        marginRight: SIZE.PADDING / 3
    },
    signUpText: {
        color: COLORS.PRIMARY_500,
        ...BODY.MEDIUM_SEMIBOLD
    }
})