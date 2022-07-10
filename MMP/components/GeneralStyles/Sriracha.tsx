import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { useFonts, Sriracha_400Regular } from '@expo-google-fonts/sriracha';
import { useState,useEffect,useCallback } from 'react';
import { Text } from 'react-native';



const Sriracha = ({text,fontsize,color,spacing}:{text:any,fontsize:any,color:any,spacing:any}) => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({ Sriracha_400Regular  });
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
    <Text style={{fontFamily: 'Sriracha_400Regular',fontSize:fontsize,color:color,letterSpacing:spacing}}>{text}</Text>
    );
}

export default Sriracha;