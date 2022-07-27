import { StatusBar } from 'expo-status-bar';
import React,{ useEffect, useState, useRef  } from 'react';
import { StyleSheet, Text, View, NativeModules, Button } from 'react-native';

// const { SharedStorage } = NativeModules;
export default function App() {
  const [data, setData] = useState({text: '리액트로 부터 전달받은 앱'});

  const _E = useRef();

  // useEffect(()=>{
    // console.log(SharedStorage);
    // SharedStorage.set(
    //   JSON.stringify(data)
    //  );
  // },[data]);

  useEffect(()=>{
  },[])

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button 
       title="Press me"
       onPress={()=>{ 
        setData({text: '변경해부리기'});
        _E.current.props.onPress()
      }}/>

    <Button 
       ref={_E}
       title="Press me"
       onPress={()=>{
         console.log("hello click");
         console.log(_E.current);
      }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
