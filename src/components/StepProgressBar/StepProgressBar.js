import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { COLORS, SIZE } from "../../constants/Theme";

const StepProgressBar = (props) => {
    const { stepIndex = 0, stepStyle, activeStepStyle } = props;

    return (
        <View style={styles.contentContainerStyle}>
            {
                props.numStep && Array(props.numStep).fill(0).map((_, index) => {
                    return stepIndex === index ? (
                        // <View key={"Step" + index} styles={ activeStepStyle ?? styles.defaultActiveStyle } />
                        <LinearGradient 
                            key={"Step" + index}
                            start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 0 }}
                            colors={COLORS.GRADIENT.PURPLE} 
                            style={ activeStepStyle ?? styles.defaultActiveStyle } 
                        />
                    ) : (
                        <View key={"Step" + index} style={ stepStyle ?? styles.defaultStep} />
                    )
                })
            }    
        </View>
    )
}

export default StepProgressBar;

const styles = StyleSheet.create({
    contentContainerStyle: {
        flexDirection: 'row',
        columnGap: SIZE.PADDING / 2
    },
    defaultActiveStyle: {
        width: SIZE.SPACE,
        aspectRatio: 4,
        borderRadius: SIZE.BORDER_RADIUS,
    },
    defaultStep: {
        width: SIZE.SPACE / 4,
        aspectRatio: 1,
        borderRadius: SIZE.BORDER_RADIUS,
        backgroundColor: COLORS.GREY_SCALE_300
    }
})