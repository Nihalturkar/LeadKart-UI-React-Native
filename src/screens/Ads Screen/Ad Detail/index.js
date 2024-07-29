import { View, Text, SafeAreaView, StatusBar, ScrollView, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES, data, icons, images } from '../../../constants'
import styles from './style'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { BarChart } from 'react-native-gifted-charts'
import { PieChart } from "react-native-gifted-charts";

const pieData = [
    { value: 25, color: 'rgb(255, 137, 97)', shiftX: 10, shiftY: -10 },
    { value: 30, color: 'rgb(156, 223, 109)' },
    { value: 45, color: 'rgb(89, 175, 246)' }
];

const PlacementData = [

    { value: 5, color: 'rgb(1, 162, 230)', shiftX: 1, shiftY: -5, text: "Feed" },
    { value: 5, color: 'rgb(41, 214, 210)', shiftX: 6, shiftY: -15 },
    { value: 25, color: 'rgb(251, 118, 139)', text: 'Video feeds' },
    { value: 25, color: 'rgb(156, 106, 221)', text: "feed" },
    { value: 35, color: 'rgb(0, 192, 115)', text: 'Instagram video' },
];

const AdDetail = ({navigation}) => {
    const [fbColor, setFbColor] = useState(true)
    const [instaColor, setInstaColor] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={COLORS.primary} barStyle='dark-content' />
            <ScrollView style={styles.innerContainer}>
                <View style={styles.fcard}>
                    <Image source={images.texture} style={styles.textureimg} />
                    <View>
                        <Text style={styles.title}>Lead Generation</Text>
                        <Text style={styles.work}>Finished</Text>
                        <Text style={styles.date}>1 May - 10 May</Text>
                    </View>
                    <TouchableOpacity onPress={()=>navigation.navigate("SelectPlan")}>
                        <Text style={styles.see}> See Detail <AntDesign name="right" style={styles.see} /> </Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.heading}>Yay, Your ad reached to 211109 people</Text>
                <Text style={styles.subheading}>Congratulations, in just 10 days your ad has reached to 211109 people and got 191 leads.</Text>

                <TouchableOpacity>
                    <Text style={styles.blueheading}>See All Leads</Text>
                </TouchableOpacity>

                <View style={styles.reportView}>
                    <View style={{ marginTop: SIZES.height * .025, gap: SIZES.width * .01 }}>
                        <Text style={styles.key}>Ad Views</Text>
                        <Text style={styles.key}>Click</Text>
                        <Text style={styles.key}>Leads</Text>
                        <Text style={styles.key}>Budget Used</Text>
                    </View>
                    <View style={{ gap: SIZES.width * .01 }}>
                        <Image source={images.facebook} resizeMode='contain' style={styles.socialimg} />
                        <Text style={styles.key}>1183798</Text>
                        <Text style={styles.key}>1183798</Text>
                        <Text style={styles.key}>866</Text>
                        <Text style={[styles.key, { color: COLORS.gray60 }]}>₹5000</Text>
                    </View>
                    <View style={{ gap: SIZES.width * .01 }}>
                        <Image source={images.instagram} resizeMode='contain' style={styles.socialimg} />
                        <Text style={styles.key}>99799</Text>
                        <Text style={styles.key}>99799</Text>
                        <Text style={styles.key}>566</Text>
                        <Text style={[styles.key, { color: COLORS.gray60 }]}>₹5000</Text>
                    </View>
                </View>
                {/* ---------------------------------- */}
                <View style={styles.socialbtn}>
                    <TouchableOpacity style={[styles.btn, fbColor ? { backgroundColor: "rgb(200, 220, 240)" } : null]} onPress={() => {
                        setFbColor(!fbColor)
                        setInstaColor(false)
                    }}>
                        <Text style={styles.btnname}>Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, instaColor ? { backgroundColor: "rgb(200, 220, 240)" } : null]} onPress={() => {
                        setInstaColor(!instaColor)
                        setFbColor(false)
                    }}>
                        <Text style={styles.btnname}>Instagram</Text>
                    </TouchableOpacity>
                </View>
                {/* ------------------------------- */}
                <View style={styles.headingView}>
                    <Text style={styles.headingText}>Device</Text>
                    <TouchableOpacity>
                        <Text style={styles.View}>View</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.Sectionview}>
                    <Image source={images.mobile1} style={styles.mobile} />
                    <Text style={styles.subheading}>Mobiles</Text>
                    <Text style={styles.headingText}>3.08 Lacs</Text>
                </View>

                {/* -------------------------------------- */}

                <View style={styles.headingView}>
                    <Text style={styles.headingText}>Age</Text>
                    <TouchableOpacity>
                        <Text style={styles.View}>View</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.Sectionview}>
                    <BarChart
                        height={SIZES.height * .25}
                        width={SIZES.width * .8}
                        barWidth={SIZES.width * .06}
                        noOfSections={10}
                        barBorderRadius={1}
                        frontColor="rgb(94, 85, 164)"
                        data={data.barData}
                        yAxisThickness={.5}
                        xAxisThickness={1}
                        labelWidth={12}
                        showYAxisIndices
                        xAxisLabelTextStyle={styles.barlabel}
                        hideRules
                        yAxisTextStyle={styles.yaxis}
                        spacing={SIZES.width * .042}
                        isAnimated
                    />
                    <Text style={styles.agegroup}>Age Group</Text>
                </View>

                {/* -------------------------------- */}
                <View style={styles.headingView}>
                    <Text style={styles.headingText}>Post Engagement</Text>
                    <TouchableOpacity>
                        <Text style={styles.View}>4322</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.Sectionview}>
                    {data.postEngagement?.map((item, index) => {
                        return (
                            <View style={styles.postView}>
                                <View style={{ flexDirection: 'row', gap: SIZES.width * .02, alignItems: 'center' }}>
                                    <Image source={item.icon} style={styles.posticons} />
                                    <Text style={styles.key}>{item.title}</Text>
                                </View>
                                <Text style={styles.key}>{item.number}</Text>
                            </View>
                        )
                    })}
                </View>
                {/* -------------------------------- */}

                <View style={styles.headingView}>
                    <Text style={styles.headingText}>Gender</Text>
                    <TouchableOpacity>
                        <Text style={styles.View}>Views(CTR)</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.Sectionview}>
                    <View style={{ transform: [{ rotate: '40deg' }] }}>
                        <PieChart
                            data={pieData}
                            // isThreeD
                            shiftInnerCenterX={-15}
                            shiftInnerCenterY={-15}
                            radius={110}
                        />
                    </View>
                    <View style={styles.section1}>
                        <Text style={styles.gen}>Male</Text>
                        <Text style={styles.pop}>2.43 Lacs</Text>
                        <Text style={styles.per}>(2.28%)</Text>
                    </View>
                    <View style={styles.section2}>
                        <Text style={styles.gen}>Other</Text>
                        <Text style={styles.pop}>4 k</Text>
                        <Text style={styles.per}>(0.23%)</Text>
                    </View>
                    <View style={styles.section3}>
                        <Text style={styles.gen}>Female</Text>
                        <Text style={styles.pop}>58 k</Text>
                        <Text style={styles.per}>(1.68%)</Text>
                    </View>

                </View>
                {/* ----------------------------- */}
                <View style={styles.headingView}>
                    <Text style={styles.headingText}>Top Placements</Text>
                    <TouchableOpacity>
                        <Text style={styles.View}>Views</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.Sectionview}>
                    <View>
                        <PieChart
                            data={PlacementData}
                            shiftInnerCenterX={-15}
                            shiftInnerCenterY={-15}
                            radius={110}
                            showText
                            textColor="white"
                            textSize={8}
                        />
                    </View>
                    <View style={styles.section1}>
                        <Text style={styles.gen}>Instagram Video</Text>
                        <Text style={[styles.pop, { color: COLORS.gray20 }]}>1104025</Text>
                        <Text style={styles.per}>(2.28%)</Text>
                    </View>
                    <View style={styles.section2}>
                        <Text style={styles.gen}>Video Feeds</Text>
                        <Text style={[styles.pop, { color: COLORS.gray20 }]}>4 k</Text>
                        <Text style={styles.per}>(0.23%)</Text>
                    </View>
                    <View style={styles.section3}>
                        <Text style={styles.gen}>Feed</Text>
                        <Text style={[styles.pop, { color: COLORS.gray20 }]}>58 k</Text>
                        <Text style={styles.per}>(1.68%)</Text>
                    </View>

                </View>

                {/* ---------------------------------------- */}
                <View style={styles.headingView}>
                    <Text style={styles.headingText}>Top Performing State</Text>
                </View>

                <View style={styles.tableView}>
                    <View style={styles.stateTable}>
                        <Text style={[styles.row, { color: COLORS.white }]}>City</Text>
                        <Text style={[styles.row, { color: COLORS.white }]}>Views</Text>
                        <Text style={[styles.row, { color: COLORS.white }]}>Clicks</Text>
                        <Text style={[styles.row, { color: COLORS.white }]}>Ctr</Text>
                    </View>
                    <FlatList
                        data={data.stateData}
                        keyExtractor={(key) => key.id}
                        renderItem={({ item }) => {
                            return (
                                <View style={[styles.column, { backgroundColor: "rgb(156, 194, 233)" }]}>
                                    <Text style={styles.row}>{item.name}</Text>
                                    <Text style={[styles.row,{backgroundColor:"rgb(231, 239, 250)"}]}>{item.view}</Text>
                                    <Text style={[styles.row,{backgroundColor:"rgb(231, 239, 250)"}]}>{item.view}</Text>
                                    <Text style={[styles.row,{backgroundColor:"rgb(231, 239, 250)"}]}>{item.ctr}</Text>
                                </View>
                            )
                        }} />
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default AdDetail