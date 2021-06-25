import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Linking, Dimensions } from 'react-native';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import { LinearGradient } from 'expo-linear-gradient';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)
const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get('window')

export default function App() {
  const [showTime, setShowTime] = useState(false)

  setTimeout(() => {
    setShowTime(prev => !prev)
  }, (5000));

  return (
    <View style={styles.container}>
      <ShimmerPlaceHolder
        autoRun={true}
        visible={showTime}
        style={{...styles.image, marginTop: 50}}
      >
        <Image style={styles.image} source={{ uri: 'https://avatars.githubusercontent.com/u/44972197?v=4' }} />
      </ShimmerPlaceHolder>

      <ShimmerPlaceHolder
        autoRun={true}
        visible={showTime}
        style={{...styles.textSkeleton, marginTop: 20}}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff', marginTop: -3, alignSelf: 'center' }}>Perfil: Jardel Lins</Text>
      </ShimmerPlaceHolder>

      <ShimmerPlaceHolder
        autoRun={true}
        visible={showTime}
        style={{ ...styles.textSkeleton, marginTop: 10}}
      >
        <Text style={{ fontSize: 15, fontWeight: 'normal', color: '#fff', alignSelf: 'center' }} onPress={() => Linking.openURL('https://github.com/jardellins')}>GitHub: https://github.com/jardellins</Text>
      </ShimmerPlaceHolder>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  textSkeleton: {
    width: ScreenWidth - 100,
    height: 20,
  }
});
