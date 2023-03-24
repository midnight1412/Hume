import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import FastImage from "react-native-fast-image";
import Lottie from 'lottie-react-native';

import Icons from "../../constants/Icon";
import { COLORS, HEADING, SIZE } from "../../constants/Theme";
import { Animations } from "../../constants/Animation";
import { DeviceInfo } from "../../constants/DeviceInfo";

const SplashLoading = () => {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <FastImage source={ Icons.Logo } style={styles.icon} />
                <Text style={styles.appName}>
                    Hume
                </Text>
            </View>

            <View style={styles.loading}>
                <Lottie source={ Animations.Loading } style={styles.loadingIcon} autoPlay loop />
            </View>
            
        </View>
    )
}

export default SplashLoading;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    body: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loading: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: SIZE.PADDING * 3
    },
    icon: {
        width: DeviceInfo.WIDTH * 0.2,
        aspectRatio: 1,
        minWidth: 60,
        maxWidth: 80,
        marginRight: SIZE.PADDING
    },
    appName: {
        ...HEADING.H1,
        color: COLORS.GREY_SCALE_900
    },
    loadingIcon: {
        width: DeviceInfo.WIDTH * 0.4,
        aspectRatio: 1,
        minWidth: 120,
        maxWidth: 160,
    }
})