import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import {
    useFonts,
    Caveat_400Regular,
    Caveat_500Medium,
    Caveat_600SemiBold,
    Caveat_700Bold,
  } from '@expo-google-fonts/caveat';
import { useState,useEffect,useCallback } from 'react';
import { Text } from 'react-native';




const Caveat = ({text,fontsize,spacing,color}:{text:any,fontsize:any,spacing:any,color:any}) => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({ Caveat_400Regular });
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
    <Text style={{fontFamily: 'Caveat_400Regular',fontSize:fontsize,letterSpacing:spacing,color:color}}>{text}</Text>
    );
}

export default Caveat;