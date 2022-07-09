import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import {
    useFonts,
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  } from '@expo-google-fonts/quicksand';
import { useState,useEffect,useCallback } from 'react';
import { Text } from 'react-native';



const QuickSand =  ({text,fontsize,color}:{text:any,fontsize:any,color:any}) => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({ Quicksand_700Bold});
      }
      catch {
        // handle error
      }
      finally {
        setAppIsReady(true);
      }
    })();
  }, []);

  const onLayout = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <Text style={{fontFamily: 'Quicksand_700Bold',fontSize:fontsize, color:color}}>{text}</Text>
    );
}

export default QuickSand;