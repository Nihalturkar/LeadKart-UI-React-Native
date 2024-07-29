import { View, Text, SafeAreaView, StatusBar, ScrollView, Image, FlatList, TouchableOpacity, PanResponder, Animated, Alert, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import { COLORS, FONTS, SIZES, data, icons } from '../../../constants'
import styles from './style';
import Entypo from "react-native-vector-icons/Entypo"
import Feather from "react-native-vector-icons/Feather"
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import RBSheet from "react-native-raw-bottom-sheet";
import Modal from 'react-native-modal';
import PickerInput from '../../../components/Picker Component';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomDropdown from '../../../components/Dropdown Component';
import { Slider } from '@miblanchard/react-native-slider';

import { ColorMatrix, concatColorMatrices } from "react-native-color-matrix-image-filters";




const scrolldata = [
  { id: 1, name: "Frame", icon: icons.frame },
  { id: 2, name: "Text", icon: icons.text },
  { id: 3, name: "Image", icon: icons.picimg },
  { id: 4, name: "Adjust", icon: icons.adjust },
  // { id: 5, name: "Sticker", icon: icons.emoji },
  { id: 6, name: "Business", icon: icons.business },
];

const ImageCreate = ({ route, navigation }) => {

  const { image } = route.params;




  const [activeIndex, setActiveIndex] = useState(null);
  const [textInput, setTextInput] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [img, setImg] = useState(null);

  const handleImagePick = () => {
    ImagePicker.openPicker({
      width: SIZES.width * .2,
      height: SIZES.height * .1,
      cropping: true,
    }).then((img) => {
      let image = {
        uri: img.path,
        name: img.filename || Date.now() + '-' + img?.path?.slice(-10),
        type: img.mime,
      }
      setSelectedImage(image)
    });
  };

  const handleSubmit = () => {
    if (selectedImage) {
      setImg([...(img ? [img] : []), selectedImage]);
      closeImgModal();
    }
  };


  // Adjust the image styling 

  const [brightness, setBrightness] = useState(1);
  const [contrast, setContrast] = useState(0);
  const [hue, setHue] = useState(0);
  const [saturation, setSaturation] = useState(1);

  const Adjustdata = [
    { id: 1, name: "Brightness", icon: icons.bright, setValue: setBrightness, value: brightness, min: 0, max: 2 },
    { id: 2, name: "Contrast", icon: icons.contrast, setValue: setContrast, value: contrast, min: 0, max: 2 },
    { id: 3, name: "Hue", icon: icons.hue, setValue: setHue, value: hue, min: 0, max: 360 },
    { id: 4, name: "Saturation", icon: icons.saturation, setValue: setSaturation, value: saturation, min: 0, max: 2 },
  ];

  const brightnessMatrix = (brightness) => {
    return [
      brightness, 0, 0, 0, 0,
      0, brightness, 0, 0, 0,
      0, 0, brightness, 0, 0,
      0, 0, 0, 1, 0
    ];
  };
  // Function to create a contrast matrix
  const contrastMatrix = (contrast) => {
    const s = contrast + 1;
    const intercept = 127 * (1 - s);
    return [
      s, 0, 0, 0, intercept,
      0, s, 0, 0, intercept,
      0, 0, s, 0, intercept,
      0, 0, 0, 1, 0
    ];
  };

  // Function to create a saturation matrix
  const saturationMatrix = (saturation) => {
    const oneMinusSat = 1 - saturation;
    const rY = 0.213 * oneMinusSat;
    const gY = 0.715 * oneMinusSat;
    const bY = 0.072 * oneMinusSat;
    return [
      rY + saturation * (1 - rY), gY + saturation * (-rY), bY + saturation * (-rY), 0, 0,
      rY + saturation * (-gY), gY + saturation * (1 - gY), bY + saturation * (-gY), 0, 0,
      rY + saturation * (-bY), gY + saturation * (-bY), bY + saturation * (1 - bY), 0, 0,
      0, 0, 0, 1, 0
    ];
  };
  const hueRotationMatrix = (angleDegrees) => {
    const angleRadians = (angleDegrees % 360) * Math.PI / 180;
    const cosAngle = Math.cos(angleRadians);
    const sinAngle = Math.sin(angleRadians);

    // Approximate hue rotation matrix (not accurate for all colors)
    return [
      cosAngle, sinAngle, 0, 0, 0,
      -sinAngle, cosAngle, 0, 0, 0,
      0, 0, 1, 0, 0,
      0, 0, 0, 1, 0
    ];
  };





  // frame modal------------------------------------------
  const [isFrameModalVisible, setFrameModalVisible] = useState(false);
  const openFrameModal = () => {
    setFrameModalVisible(true);
  };
  const closeFrameModal = () => {
    setFrameModalVisible(false);
  };
  // ==-------------------------
  const [isFrameCustomModalVisible, setFrameCustomModalVisible] = useState(false);
  const openFrameCustomModal = () => {
    setFrameCustomModalVisible(true);
  };
  const closeFrameCustomModal = () => {
    setFrameCustomModalVisible(false);
  };

  // --------pre defined frame

  const [isFramePreModalVisible, setFramePreModalVisible] = useState(false);
  const openFramePreModal = () => {
    setFramePreModalVisible(true);
  };
  const closeFramePreModal = () => {
    setFramePreModalVisible(false);
  };

  // -------------------------------------------------
  const [isModalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  const [isImageModalVisible, setImageModalVisible] = useState(false);
  const openImgModal = () => {
    setImageModalVisible(true);
  };
  const closeImgModal = () => {
    setImageModalVisible(false);
  };


  // -------------------------------------------
  // Bussiness bottom sheet 

  const refRBSheet = useRef();
  const OpenBottom = () => {
    refRBSheet.current.open();
  }
  const CloseBottom = () => {
    refRBSheet.current.close();
  }
  const BusinessComponent = () => {
    const [checkedItems, setCheckedItems] = useState({});
    const handleCheck = (item) => {
      setCheckedItems((prevItems) => ({
        ...prevItems,
        [item.id]: !prevItems[item.id],
      }));
    };
    return (
      <View style={styles.bottomView}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: SIZES.width * .04 }}>
          <TouchableOpacity onPress={CloseBottom}>
            <Feather name="arrow-left" style={styles.close} />
          </TouchableOpacity>
          <Text style={styles.businessText}>Business</Text>
        </View>

        <FlatList
          data={data.businessBottom}
          numColumns={3}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity activeOpacity={.9} onPress={() => handleCheck(item)}>
                <View style={styles.componentstyle}>
                  <View style={styles.radio}>
                    {checkedItems[item.id] ? (
                      <AntDesign name="check" style={styles.check} />
                    ) : null}
                  </View>
                  <Text style={styles.businessText}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  };

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], { useNativeDriver: false }),
      onPanResponderRelease: () => {
        pan.extractOffset();
      },
    }),
  ).current;

  const prevImageViewWidth = SIZES.width * 0.8;
  const prevImageViewHeight = SIZES.height * 0.4;

  const handlePanResponderMove = (gestureState) => {
    const { dx, dy } = gestureState;
    const newX = dx;
    const newY = dy;
    if (newX < 0 || newX > prevImageViewWidth || newY < 0 || newY > prevImageViewHeight) {
      return;
    }
    else {
      setImg((prevImg) => {
        const newImg = [...prevImg];
        newImg[imageIndex] = { ...newImg[imageIndex], x: newX, y: newY };
        return newImg;
      });
    }
  };

  const [imageWidth, setImageWidth] = useState(SIZES.width * .25);
  const [imageHeight, setImageHeight] = useState(SIZES.height * .12);

  const handleResize = () => {
    setImageWidth(SIZES.width * .4);
    setImageHeight(SIZES.height * .2);
  };


  // -------------------------------------------------------

  const colors = [
    '#000000', '#FF0000', '#00FF00', '#0000FF', '#FFFF00',
    '#00FFFF', '#FF00FF', '#C0C0C0', '#808080', '#800000',
    '#808000', '#008000', '#800080', '#008080', '#000080',
    '#8B4513', '#A0522D', '#D2691E', '#DEB887', "#FFF",
    '#FF6347', '#7B68EE', '#00FF7F', '#FF1493', '#1E90FF',
    '#F5DEB3', '#FFE4B5', '#FFDAB9', '#FFDEAD', '#FAF0E6',
  ];

  const [showEditor, setShowEditor] = useState(false);
  const [submittedText, setSubmittedText] = useState('');
  const [isBold, setIsBold] = useState(false);
  const [Italic, setItalic] = useState(false);
  const [underline, setunderline] = useState(false);
  const [textColor, setTextColor] = useState('#fff');
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [isColorPickerActive, setIsColorPickerActive] = useState(false);
  const [textPosition, setTextPosition] = useState({ top: -300, left: 100 });

  const [showAdjust, setShowAdjust] = useState(false);

  const handleSubmitText = () => {
    if (textInput.trim() !== '') {
      setSubmittedText(textInput);
      setTextInput('');
      closeModal();
      setShowEditor(true)
    }
  };
  const clearSubmittedText = () => {
    setSubmittedText('');
    setShowEditor(false)
  };

  const toggleBold = () => {
    setIsBold(prevState => !prevState);
    addToHistory('bold', !isBold);
  };
  const toggleItalic = () => {
    setItalic(prevState => !prevState);
    addToHistory('italic', !Italic);
  };
  const toggleUnderline = () => {
    setunderline(prevState => !prevState);
    addToHistory('underline', !underline);
  };

  const toggleColorPicker = () => {
    setIsColorPickerActive(prevState => !prevState);
    setShowColorPicker(prevState => !prevState);
  };
  const handleColorSelect = (color) => {
    setTextColor(color);
    setShowColorPicker(false);
    addToHistory('color', color);
  };

  const moveText = (direction) => {
    const step = 10;
    switch (direction) {
      case 'up':
        setTextPosition(prev => ({ ...prev, top: prev.top - step }));
        break;
      case 'down':
        setTextPosition(prev => ({ ...prev, top: prev.top + step }));
        break;
      case 'left':
        setTextPosition(prev => ({ ...prev, left: prev.left - step }));
        break;
      case 'right':
        setTextPosition(prev => ({ ...prev, left: prev.left + step }));
        break;
    }
  };


  // const undoAll = () => {
  //   setShowColorPicker(false);
  //   setItalic(false)
  //   setIsBold(false)
  //   setunderline(false)
  //   setTextColor("#fff")
  // };


  const [textHistory, setTextHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const addToHistory = (changeType, value) => {
    const newHistory = textHistory.slice(0, historyIndex + 1);
    newHistory.push({ type: changeType, value });
    setTextHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };


  const undoAll = () => {
    if (historyIndex > 0) {
      const prevItem = textHistory[historyIndex - 1];
      switch (prevItem.type) {
        case 'color':
          setTextColor(prevItem.value);
          break;
        case 'bold':
          setIsBold(prevItem.value);
          break;
        case 'italic':
          setItalic(prevItem.value);
          break;
        case 'underline':
          setunderline(prevItem.value);
          break;
      }
      setHistoryIndex(historyIndex - 1);
    }
  };

  const redoAll = () => {
    if (historyIndex < textHistory.length - 1) {
      const nextItem = textHistory[historyIndex + 1];
      switch (nextItem.type) {
        case 'color':
          setTextColor(nextItem.value);
          break;
        case 'bold':
          setIsBold(nextItem.value);
          break;
        case 'italic':
          setItalic(nextItem.value);
          break;
        case 'underline':
          setunderline(nextItem.value);
          break;
      }
      setHistoryIndex(historyIndex + 1);
    }
  };

  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle='dark-content' />
      <View style={styles.innerContainer}>
      <View style={styles.iconView}>
          <Entypo name="share" style={styles.icon} />
          <TouchableOpacity>
            <Feather name="download" style={styles.icon} />
          </TouchableOpacity>
        </View>

        <ColorMatrix matrix={concatColorMatrices(
          brightnessMatrix(brightness),
          contrastMatrix(contrast),
          saturationMatrix(saturation),
          hueRotationMatrix(hue),
        )}>
          <Image source={{ uri: image.path }} style={styles.image} resizeMode='contain' />
        </ColorMatrix>
        {/*  Draggable Image ------------------- */}
        {img && (
          <View style={styles.imageContainer}>
            {img.map((image, index) => {
              return (
                <Animated.View
                  key={index}
                  style={{
                    transform: [{ translateX: pan.x }, { translateY: pan.y }],
                  }}
                  {...panResponder.panHandlers}
                  onPanResponderMove={(gestureState) => handlePanResponderMove(gestureState)}
                >
                  <View>
                    <Image
                      source={{ uri: image.uri }}
                      style={[
                        styles.imageContainer,
                        {
                          width: imageWidth,
                          height: imageHeight,
                        },
                      ]}
                      resizeMode='contain'
                    />
                    <TouchableOpacity onPress={() => {
                      setImg(img.filter((img, i) => i !== index));
                    }}>
                      <AntDesign name="close" style={styles.closeIcon} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleResize}>
                      <MaterialCommunityIcons name="resize" style={styles.resizeIcon} />
                    </TouchableOpacity>
                  </View>
                </Animated.View>
              )
            })}
          </View>
        )}

        {/* for Draggable  text input  */}
        <Animated.View
          style={{
            transform: [{ translateX: pan.x }, { translateY: pan.y }],
          }}
          {...panResponder.panHandlers}
          onPanResponderMove={(gestureState) => handlePanResponderMove(gestureState)}
        >
          <View style={[styles.TextContainer, { top: textPosition.top, left: textPosition.left }]}>
            <TouchableOpacity onPress={() => setShowEditor(true)}>
              {submittedText && <Text style={[styles.stext,
              isBold && { ...FONTS.eightHundred },
              Italic && { fontStyle: "italic" },
              underline && { textDecorationLine: 'underline' },
              { color: textColor }
              ]}
              >{submittedText}</Text>}
            </TouchableOpacity >
            <TouchableOpacity onPress={clearSubmittedText}>
              {submittedText && <AntDesign name="close" style={styles.closeTextIcon} />}
            </TouchableOpacity>
          </View>

        </Animated.View>

        <View style={[styles.iconView, { marginTop: SIZES.height * .005 }]}>
          <TouchableOpacity onPress={redoAll}>
            <MaterialCommunityIcons name="arrow-u-left-top" style={styles.downicon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={undoAll}>
            <MaterialCommunityIcons name="arrow-u-up-left"
              style={[styles.downicon, { transform: [{ rotate: '90deg' }], }]} />
          </TouchableOpacity>
        </View>

        {/* For adjust the image  styling  */}
        {showAdjust &&
          <View style={styles.AdjustView}>
            <TouchableOpacity onPress={() => setShowAdjust(false)}>
              <Feather name="arrow-left" style={styles.close} />
            </TouchableOpacity>
            <FlatList
              data={Adjustdata}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View>
                  <View style={[styles.textView, { borderWidth: .01 }]}>
                    <Image source={item.icon} resizeMode='contain' style={styles.stylingIcon} />
                    <Text style={styles.text}>{item.name}</Text>
                  </View>
                  <View style={styles.slider}>
                    <Slider
                      thumbTintColor={COLORS.primary}
                      minimumValue={item.min}
                      maximumValue={item.max}
                      step={(item.max - item.min) / 100}
                      value={item.value}
                      onValueChange={(value) => item.setValue(value)}
                    />
                  </View>
                </View>
              )}
            />

          </View>}

        {showColorPicker && (
          <View style={styles.colorPicker}>
            {colors.map((color, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.colorOption, { backgroundColor: color }]}
                onPress={() => handleColorSelect(color)}
              />
            ))}
          </View>
        )}

        {/* -------------------------------- */}
{/* text editor view  */}
        {showEditor ? (
          <View>
            <View style={styles.main}>
              <TouchableOpacity onPress={() => setShowEditor(false)}>
                <Feather name="arrow-left" style={styles.close} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={toggleColorPicker}
                style={[styles.formatButton, isColorPickerActive && styles.activeFormatButton]}
              >
                <MaterialCommunityIcons name="format-color-text" style={styles.icon} />
                <Text style={styles.ptext}>Text Color</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={toggleBold}
                style={[styles.formatButton, isBold && styles.activeFormatButton]}>
                <MaterialCommunityIcons name="format-bold" style={styles.icon} />
                <Text style={styles.ptext}>Bold</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={toggleItalic}
                style={[styles.formatButton, Italic && styles.activeFormatButton]}>
                <MaterialCommunityIcons name="format-italic" style={styles.icon} />
                <Text style={styles.ptext}>Italic</Text>

              </TouchableOpacity>
              <TouchableOpacity onPress={toggleUnderline}
                style={[styles.formatButton, underline && styles.activeFormatButton]}>
                <MaterialCommunityIcons name="format-underline" style={styles.icon} />
                <Text style={styles.ptext}>Underline</Text>
              </TouchableOpacity>
              <View style={styles.ArrowView}>
                <TouchableOpacity onPress={() => moveText('left')}>
                  <Entypo name="arrow-long-left" style={styles.Arrowicon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => moveText('right')}>
                  <Entypo name="arrow-long-right" style={styles.Arrowicon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => moveText('up')}>
                  <Entypo name="arrow-long-up" style={styles.Arrowicon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => moveText('down')}>
                  <Entypo name="arrow-long-down" style={styles.Arrowicon} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.scroll}>
            <FlatList
              data={scrolldata}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  onPress={() => {
                    if (item.name === 'Frame') {
                      openFrameModal();
                    }
                    if (item.name === 'Text') {
                      openModal();
                    }
                    if (item.name === 'Image') {
                      openImgModal();
                    }
                    if (item.name === 'Business') {
                      OpenBottom();
                    }
                    if (item.name === 'Adjust') {
                      setShowAdjust(true);
                    }
                    setActiveIndex(index);
                  }}

                  style={[
                    styles.textView,
                    activeIndex === index ? { backgroundColor: COLORS.primary, color: COLORS.black } : null,
                  ]} >

                  <Image source={item.icon} resizeMode='contain' style={styles.stylingIcon} />
                  <Text
                    style={styles.text}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        )}

        <RBSheet
          ref={refRBSheet}
          height={200}
          openDuration={200}
          customStyles={{
            wrapper: {
              backgroundColor: "rgba(0,0,0,0.5)",
            },
            draggableIcon: {
              backgroundColor: '#000',
            },
          }}
          onClose={CloseBottom}
        >
          <BusinessComponent />
        </RBSheet>

        {/* Modal for Frame select  */}

        <Modal
          isVisible={isFrameModalVisible}
          onBackdropPress={closeFrameModal}
          onSwipeComplete={closeFrameModal}
          swipeDirection={['down']}
        >
          <View style={styles.modalView}>
            <TouchableOpacity activeOpacity={.5} onPress={openFrameCustomModal}>
              <View style={styles.paymentAppView}>
                <View style={styles.radio}>
                  <View style={{ width: SIZES.width * 0.02, height: SIZES.height * 0.01, backgroundColor: COLORS.primary, borderRadius: 50 }}></View>
                </View>
                <Text style={styles.ptext}>Custom Frame</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.5} onPress={openFramePreModal}>
              <View style={styles.paymentAppView}>
                <View style={styles.radio}>
                  <View style={{ width: SIZES.width * 0.02, height: SIZES.height * 0.01, backgroundColor: COLORS.primary, borderRadius: 50 }}></View>
                </View>
                <Text style={styles.ptext}>Select pre-define frame</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
        {/*  custom frame */}
        <Modal
          isVisible={isFrameCustomModalVisible}
          onBackdropPress={closeFrameCustomModal}
          onSwipeComplete={closeFrameCustomModal}
          swipeDirection={['down']}
        >
          <View style={[styles.modalView, { backgroundColor: COLORS.white }]}>
            <Text style={styles.headingText}>Frame Size </Text>
            <CustomDropdown label="Frame Type"
              dropDownStyle={{ width: SIZES.width * .72 }}
            />
            <CustomDropdown label="Size in"
              dropDownStyle={{ width: SIZES.width * .72 }}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <PickerInput
                inputContainer={{ width: SIZES.width * .3 }}
                placeholder="500" />
              <PickerInput
                inputContainer={{ width: SIZES.width * .3 }}
                placeholder="500" />
            </View>
            <View style={{
              flexDirection: "row",
              marginTop: SIZES.height * .02,
              justifyContent: 'space-between'
            }}>
              <TouchableOpacity onPress={closeFrameCustomModal}>
                <Text style={[styles.modalbtn, { width: SIZES.width * .28 }]}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={closeFrameCustomModal}>
                <Text style={[styles.modalbtn, { width: SIZES.width * .28, backgroundColor: COLORS.primary }]}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        {/* Pre defined Frame */}
        <Modal
          isVisible={isFramePreModalVisible}
          onBackdropPress={closeFramePreModal}
          onSwipeComplete={closeFramePreModal}
          swipeDirection={['down']}
        >
          <View style={[styles.modalView, { backgroundColor: COLORS.white }]}>
            <Text style={styles.headingText}>Frame Size </Text>
            <CustomDropdown label="Frame Type"
              dropDownStyle={{ width: SIZES.width * .72 }}
            />
            <View style={{
              flexDirection: "row",
              marginTop: SIZES.height * .02,
              justifyContent: 'space-between'
            }}>
              <TouchableOpacity onPress={closeFramePreModal}>
                <Text style={[styles.modalbtn, { width: SIZES.width * .28 }]}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={closeFramePreModal}>
                <Text style={[styles.modalbtn, { width: SIZES.width * .28, backgroundColor: COLORS.primary }]}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Modal for Text Input */}
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={closeModal}
          onSwipeComplete={closeModal}
          swipeDirection={['down']}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.modalView}>
              <Text style={styles.headingText}>Add a Text </Text>
              <PickerInput
                placeholder="Write a heading..."
                inputContainer={styles.input}
                numberOfLines={3}
                textAlignVertical="top"
                onChangeText={setTextInput}
              />
              <View style={{
                flexDirection: "row",
                marginTop: SIZES.height * .02,
                justifyContent: 'space-between'
              }}>
                <TouchableOpacity onPress={closeModal}>
                  <Text style={[styles.modalbtn, { width: SIZES.width * .28 }]}>Close</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSubmitText}>
                  <Text style={[styles.modalbtn, { width: SIZES.width * .28, backgroundColor: COLORS.primary }]}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>


        {/* Modal for Image Pick */}
        <Modal
          isVisible={isImageModalVisible}
          onBackdropPress={closeImgModal}
          onSwipeComplete={closeImgModal}
          swipeDirection={['down']}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.ImageModalView}>
              <Text style={styles.headingImgText}>Add an Image </Text>
              {selectedImage && (
                <View>
                  <Image
                    resizeMode='contain'
                    source={{ uri: selectedImage.uri }}
                    style={styles.selectedImg}
                  />
                  <TouchableOpacity onPress={handleImagePick}><AntDesign name="retweet" style={styles.restart} /></TouchableOpacity>
                </View>
              )}
              {!selectedImage && (<TouchableOpacity onPress={handleImagePick} style={styles.imagepic}>
                <Feather name="upload-cloud" style={styles.upload} />
                <Text style={styles.pic}>Upload your own Image</Text>
              </TouchableOpacity>
              )}

              <View style={{
                flexDirection: "row",
                marginTop: SIZES.height * .05,
                justifyContent: 'space-between'
              }}>
                <TouchableOpacity onPress={closeImgModal}>
                  <Text style={[styles.modalbtn, { width: SIZES.width * .28 }]}>Close</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSubmit}>
                  <Text style={[styles.modalbtn, { width: SIZES.width * .28, backgroundColor: COLORS.primary }]}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>


      </View>
    </SafeAreaView>
  )
}

export default ImageCreate;