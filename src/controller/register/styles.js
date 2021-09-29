import React from 'react';
import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { COLORS } from '../../config/themes/colors';
import { FONT_SCALE } from '../../config/themes/fontStyle';


const Styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollV: {
        paddingLeft: moderateScale(10),
        paddingRight: moderateScale(10)
    },
    touchOpaBtn: {
        alignSelf: 'center',
        width: '90%',
        height: verticalScale(44),
        backgroundColor: COLORS.SECONDRY,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: moderateScale(30),
        borderRadius: moderateScale(10)
    },
    txtBtnTitle: {
        color: 'white',
        fontSize: FONT_SCALE(0.02)
    },
    txtLable: {
        paddingBottom: moderateScale(3)
    },
    txtInput: {
        marginBottom: moderateScale(10)
    }
})


export {
    Styles
}