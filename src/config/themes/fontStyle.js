import { Dimensions, StyleSheet } from 'react-native';

var heightY = Dimensions.get("window").height;


const FONT_SCALE = (fontScale) => {
    return heightY * parseFloat(fontScale)
}

const INPUT_STYLE = StyleSheet.create({
    textInput: {
        fontSize: FONT_SCALE(0.016),
        color: 'black'
    }
})

export {
    FONT_SCALE,
    INPUT_STYLE
}
