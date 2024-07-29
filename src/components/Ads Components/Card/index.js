import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, icons, images } from '../../../constants'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Card = ({ date, view, title, lead, spent, click, onPress, onPress1 }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.ad}>Demo Ad</Text>
            <Text style={styles.date}>{date}</Text>
            <View style={styles.new}>
                <TouchableOpacity onPress={onPress1}>
                    <Text style={styles.color}>
                        {title}
                    </Text>
                </TouchableOpacity>
                <View style={styles.social}>
                    <TouchableOpacity>
                    <Image source={icons.insta} style={styles.socialicon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image source={icons.fb1} style={styles.socialicon2} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.detail}>
                <Image source={images.nature} resizeMode='contain' style={styles.img} />
                <View>
                    <View style={styles.pnView}>
                        <Text style={styles.quantity}>{view}</Text>
                        <Text style={styles.name}>Ad Views</Text>
                    </View>
                    <View style={styles.pnView}>
                        <Text style={styles.quantity}>{lead}</Text>
                        <Text style={styles.name}>Leads</Text>
                    </View>
                    <View style={styles.pnView}>
                        <Text style={styles.quantity}>{spent}</Text>
                        <Text style={styles.name}>Spent</Text>
                    </View><View style={styles.pnView}>
                        <Text style={styles.quantity}>{click}</Text>
                        <Text style={styles.name}>Clicks</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.touch} onPress={onPress}>
                <Text style={styles.view}>View reports</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: SIZES.width * .9,
        alignSelf: 'center',
        elevation: 2,
        backgroundColor: COLORS.white,
        marginBottom: SIZES.height * 0.01,
        marginTop: SIZES.height * 0.02,
        borderRadius: 8,
        paddingHorizontal: SIZES.width * .04,
        padding: SIZES.height * .02
    },
    date: {
        color: COLORS.black,
        fontSize: SIZES.width * .035,
        ...FONTS.fiveHundred

    },
    new: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SIZES.width * .2,
        marginTop: SIZES.height * .005
    },

    color: {
        color: COLORS.primary,
        ...FONTS.fiveHundred,

    },
    social: {
        flexDirection: 'row',
        gap: SIZES.width * .03,
        marginTop: SIZES.width * .01,
        alignItems: 'center'
    },
    socialicon: {
        width: SIZES.width * .05,
        height: SIZES.height * .023,
    },
    socialicon2: {
        width: SIZES.width * .02,
        height: SIZES.height * .02,
        // backgroundColor:"red"
    },
    detail: {
        flexDirection: 'row',
        gap: SIZES.width * .1,
        alignItems: 'center'
    },
    pnView: {
        flexDirection: 'row',
        gap: SIZES.width * .04,
        alignItems: 'center'
    },

    img: {
        width: SIZES.width * .28,
        height: SIZES.height * .15,
    },
    quantity: {
        color: COLORS.black,
        ...FONTS.sixHundred,
        fontSize: SIZES.width * .04
    },
    name: {
        color: COLORS.gray80,
        ...FONTS.fiveHundred,
    },

    ad: {
        width: SIZES.width * .2,
        textAlign: 'center',
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 8,
        color: COLORS.gray30,
        position: "absolute",
        right: 0,
        top: 0,
        backgroundColor: COLORS.gray20
    },
    view: {
        fontSize: SIZES.width * .04,
        color: COLORS.primary,
        ...FONTS.sixHundred,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.primary,
    },
    touch: {
        alignSelf: 'flex-end',
        width: SIZES.width * .26,
    }
})

export default Card