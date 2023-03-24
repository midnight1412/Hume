import React from "react";
import { Pressable } from "react-native";


const PressableOpacity = (props) => {
    return (
        <Pressable
            onPress={props.onPress}
            style={({ pressed }) => {
                return pressed ? { ...props?.style, opacity: 0.5 } : props.style;
            }}
        >
            {props.children}    
        </Pressable>
    )
}

export default PressableOpacity;