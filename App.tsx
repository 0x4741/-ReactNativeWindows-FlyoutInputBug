/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import {Flyout, Popup} from 'react-native-windows';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {fileMapCacheDirectory} from './metro.config';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const [flyoutOpen, setFlyout] = useState(false);
  const [flyoutViewOpen, setFlyoutView] = useState(false);
  const [popupOpen, setPopup] = useState(false);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <Flyout
        isOpen={flyoutOpen}
        onDismiss={() => {
          setFlyout(false);
        }}>
        <TextInput
          style={{
            flex: 1,
            width: '80%',
          }}
          autoFocus
          value="Flyout"
        />
      </Flyout>
      <Flyout
        isOpen={flyoutViewOpen}
        onDismiss={() => {
          setFlyoutView(false);
        }}>
        <View>
          <TextInput
            style={{
              flex: 1,
              width: '80%',
            }}
            autoFocus
            value="Flyout"
          />
        </View>
      </Flyout>
      <Popup
        isOpen={popupOpen}
        onDismiss={() => {
          setPopup(false);
        }}>
        <TextInput
          style={{
            flex: 1,
            width: '80%',
          }}
          autoFocus
          value="Popup"
        />
      </Popup>
      <View
        style={{
          flex: 1,
          alignSelf: 'flex-end',
        }}>
        <Button
          title="Toggle flyout"
          onPress={() => {
            setFlyout(x => !x);
          }}
        />
        <Button
          title="Toggle flyout with view"
          onPress={() => {
            setFlyoutView(x => !x);
          }}
        />
        <Button
          title="Toggle popup"
          onPress={() => {
            setPopup(x => !x);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
