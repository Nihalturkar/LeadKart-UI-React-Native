import { View, Text, StatusBar, ScrollView, Image, TouchableOpacity, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import { COLORS, FONTS, SIZES, data, icons } from '../../../constants';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Budget from '../../../components/New Leads Components/Budget Component';
import { FlatList } from 'react-native-gesture-handler';
import Plan from '../../../components/New Leads Components/PlanComponent';
import AIPackagesComp from '../../../components/New Leads Components/AI Packages';
import Collapsible from 'react-native-collapsible';
import ButtonCustom from '../../../components/mainButton/button';




const NewLeads = () => {

  const [expendId, SetExpendId] = useState(null);

  const { width } = useWindowDimensions(); // To get screen width
  const [selectedPlan, setSelectedPlan] = useState(0); // Initialize selectedPlan state with 0 (first plan)

  const toggleitem = id => {
    if (expendId == id) {
      SetExpendId(null);
    }
    else {
      SetExpendId(id);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle='dark-content' />
      <ScrollView style={styles.innerContainer} showsVerticalScrollIndicator={false}  keyboardShouldPersistTaps='handled'>
        <View style={styles.warningView}>
          <AntDesign name="infocirlceo" style={styles.icon} />
          <Text style={styles.warningText}><Text style={{ color: COLORS.black }}>Get new customers using Leads :</Text> Generate daily new leads by showing your ads to potential customers in target area.</Text>
        </View>
        <Text style={styles.headingText}>Total Budget </Text>
        <View style={{marginLeft:SIZES.width*.02}}>
          <FlatList
            data={data.budget}
            renderItem={({ item }) => {
              return (
                <Budget
                  icons={item.icon}
                />
              )
            }}
          />
        </View>
        <Text style={styles.or}>OR</Text>
        <Text style={styles.headingText}>Select a Plan</Text>

        <View>
          {/* {data.planData.plans.map((plans, index) => (
  <Plan key={index} {...plans} />
))} */}
          <FlatList
            data={data.planData}
            keyExtractor={(key)=>key.id}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity activeOpacity={.95} onPress={() => setSelectedPlan(index)} // Update selectedPlan state on press
                >
                  <Plan
                    duration={item.duration}
                    price={item.price}
                    recommandation={index === 0}
                    showRadio={index === selectedPlan} // show radio based on selectedPlan state
                    lead={item.lead}
                    reach={item.reach}
                    platform={item.platform}
                    aiImages={item.aiImages}
                    icon={item.icon}
                    icon1={item.icon1}
                    width={width} // Pass screen width to Plan component
                  />
                </TouchableOpacity>
              )
            }}
          />

        </View>
        <Text style={styles.headingText}>Package includes</Text>
        <View style={styles.package}>
          <FlatList
            data={data.AIPackages}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <AIPackagesComp
                  imagesource={item.img}
                  title={item.title}
                  desc={item.desc}
                />
              )
            }}
          />
        </View>
        <View style={styles.estimateResult}>
          <View style={styles.flexView}>
            <Text style={styles.result}>Estimate Result</Text>
            <AntDesign name="infocirlceo" style={{ color: COLORS.bottomblue, ...FONTS.sixHundred }} />
          </View>
          <View style={styles.multiView}>
            <View style={styles.flexView}>
              <AntDesign name="eye" style={styles.eye} />
              <Text style={styles.price}>28k</Text>
              <Text style={styles.view}>VIEWS</Text>
            </View>

            <View style={styles.flexView}>
              <View style={styles.leadimg}><Image source={icons.leads} style={styles.leadicon} /></View>
              <Text style={styles.price}>28k</Text>
              <Text style={styles.view}>Leads</Text>
            </View>
          </View>
          <Text style={styles.desc}>You will spend only <Text style={{ ...FONTS.sixHundred }}>₹4000</Text> in total and ad will run for <Text style={{ ...FONTS.sixHundred }}>6 days</Text></Text>

        </View>
        <Text style={styles.headingText}>Frequently asked Questions</Text>

        <View style={styles.FAQ}>
          <FlatList
            data={data.FAQ}
            keyExtractor={(item, index) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => toggleitem(item.id)} activeOpacity={.6}>
                <View style={styles.questionView}>
                  <Text style={styles.question}>{item.title}</Text>
                  <Entypo style={styles.question} name={expendId === item.id ? "chevron-up" : "chevron-down"} />
                </View>
                <Collapsible collapsed={expendId !== item.id}>
                  <Text style={styles.content}>{item.content}</Text>
                </Collapsible>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={{alignItems:'center'}}>
        <ButtonCustom children="Next" btnStyle={styles.button}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default NewLeads;