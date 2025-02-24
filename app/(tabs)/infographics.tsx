import { useContext, useMemo, useRef } from "react";
import React from "react";
import ViewShot from "react-native-view-shot";
import { TouchableOpacity, View, StyleSheet, Platform } from "react-native";

import { NO_CONTEXT } from "@/shared/definitions/sentences/global.sentences";
import { AppContext } from "../_layout";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import ShareService from "@/core/services/share.service";
import { GraphicCollage } from "@/components/dedicated/infographics/GraphicCollage";

export default function InfoGraphicScreen() {
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state } = context;
  const ref = useRef<any>(null);
  const shareService = useMemo(() => new ShareService(), []);

  const MyInfoGraphic = () => (
    <>
      {
        Platform.OS === 'web' ?
        <View ref={ref} style={styles.container}>
          <GraphicCollage></GraphicCollage>
        </View> :
        <ViewShot ref={ref} style={styles.container}>
          <GraphicCollage></GraphicCollage>
        </ViewShot>
      }
    </>
  );

  const download = async () => {
    shareService.makeInfoGraphic(ref, 'test', 0.9);
  }

  return (
    <ThemedView>
      <MyInfoGraphic></MyInfoGraphic>
      <TouchableOpacity onPress={download} style={{marginTop: 200}}>
        <ThemedText>DOWNLOAD</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 1280,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 4,
    position: 'absolute',
    left: -444,
  },
});