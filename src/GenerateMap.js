import * as React from 'react';
import { WebView } from 'react-native-webview';
import { Constants } from 'expo';
//https://arcg.is/1zrbyG
export default function GenerateMap() {
    return (
      <WebView
        source={{uri: 'https://geaspoeclvheq4bv.maps.arcgis.com/apps/mapviewer/index.html?webmap=f34aa3bfc29a4574bb9cc017895c073a'}}
        style={{marginTop: 20, height: 50, width: 380}}
        UseInAppAuth={true}
      />);
}