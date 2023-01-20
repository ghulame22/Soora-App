import { StatusBar } from "expo-status-bar";
import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  const [text, onChangeText] = React.useState("");

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      <ScrollView>
        <View style={styles.subScrollView}>
          <View style={styles.titleRow}>
            <Image
              style={styles.logo}
              source={require("./assets/images/logo.png")}
            />
            <View style={styles.button}>
              <Text style={{ color: "white", fontSize: 12 }}>Contact Us</Text>
              <Image
                source={require("./assets/images/contact-icon.png")}
                style={{ height: 10, width: 10, marginLeft: 5 }}
              />
            </View>
          </View>
          <View style={styles.commingSoon}>
            <Text style={{ fontFamily: "InterSemiBold", fontSize: 12 }}>
              --- Coming Soon
            </Text>
            <Text style={styles.InterBold}>Bringing</Text>
            <Text style={styles.InterBold}>Muslims Together</Text>
          </View>
          <View style={styles.appStoreContainer}>
            <Image
              style={[styles.appstore, styles.marginRight]}
              source={require("./assets/images/apple-store.png")}
            />
            <Image
              style={styles.appstore}
              source={require("./assets/images/google-play.png")}
            />
          </View>
          <Image
            style={styles.mainImage}
            source={require("./assets/images/landing-image-1.png")}
          />
          <View style={styles.commingSoon}>
            <Text style={{ fontFamily: "InterSemiBold", fontSize: 12 }}>
              --- Coming Soon
            </Text>
            <Text style={styles.InterBold}>Get Notified</Text>
            <Text style={styles.InterBold}>When we Launch</Text>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
              />
              <TouchableOpacity style={styles.roundButton1}>
                <Text style={{ color: "white" }}>Notify Me</Text>
              </TouchableOpacity>
            </View>
            <Text>Don’t worry, we won’t spam you :)</Text>
            <Image
              style={styles.mainImage}
              source={require("./assets/images/img22.png")}
            />
            <View style={styles.socialMediaContainer}>
              <View style={[styles.socialMediaIconHolder, styles.marginRight]}>
                <Image
                  style={styles.socialMediaIcon}
                  source={require("./assets/images/facebook.png")}
                />
              </View>
              <View style={[styles.socialMediaIconHolder, styles.marginRight]}>
                <Image
                  style={styles.socialMediaIcon}
                  source={require("./assets/images/twitter.png")}
                />
              </View>
              <View style={[styles.socialMediaIconHolder, styles.marginRight]}>
                <Image
                  style={styles.socialMediaIcon}
                  source={require("./assets/images/instagram.png")}
                />
              </View>
              <View style={[styles.socialMediaIconHolder, styles.marginRight]}>
                <Image
                  style={styles.socialMediaIcon}
                  source={require("./assets/images/tiktok.png")}
                />
              </View>
              <View style={styles.socialMediaIconHolder}>
                <Image
                  style={styles.socialMediaIcon}
                  source={require("./assets/images/youtube.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <Text>Copyright © 2022 Soora. All rights reserved</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    background:
      "linear-gradient(0deg, rgba(59, 89, 152, 0.1), rgba(59, 89, 152, 0.1)), rgba(255, 0, 0, 0.05)",
    marginTop: 45,
  },
  subScrollView: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  titleRow: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  logo: {
    height: 32,
    resizeMode: "contain",
  },
  button: {
    width: 100,
    height: 36,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "black",
  },
  commingSoon: {
    marginTop: 50,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  appStoreContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  appstore: {
    width: 134,
    height: 38.8,
    resizeMode: "contain",
  },
  InterBold: {
    fontFamily: "InterBold",
    fontSize: 36,
    // lineHeight: 44,
  },
  marginRight: {
    marginRight: 16,
  },
  mainImage: {
    resizeMode: "contain",
    width: 350,
    height: 406,
    marginTop: 10,
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 100,
    width: "100%",
    paddingLeft: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    padding: 5,
  },
  input: {
    width: "69%",
  },
  roundButton1: {
    width: 100,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "black",
  },
  socialMediaContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 100,
  },
  socialMediaIconHolder: {
    borderWidth: 1,
    borderRadius: 100,
    padding: 10,
  },
  socialMediaIcon: {
    height: 20,
    width: 20,
  },
  footer: {
    borderTopWidth: 1,
    marginTop: 15,
    alignItems: "center",
    padding: 17,
  },
});
