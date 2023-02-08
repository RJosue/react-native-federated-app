import React, { useCallback } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Button, ScreeContainer } from '../../components';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { requestConfirmation } from '../../svg';
import { H6, H4 } from '../../theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AssistantHeader from '../../components/AssistantHeader';

const styles = StyleSheet.create({
  container: { flexGrow: 1 },
  secondText: { textAlign: 'center', paddingTop: 20 },
  center: { textAlign: 'center' },
  infoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 90,
  },
  buttonContainer: {
    padding: 20,
  },
  buttonPadding: {
    marginBottom: 15,
  },
  buttonSeparator: {
    flexGrow: 1,
    minHeight: 20,
  },
});

function RefundStepThree({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) {
  const handlerOnClick = useCallback(() => {
    navigation.reset({
      routes: [{ name: 'App2' }],
      index: 0,
    });
  }, [navigation]);

  return (
    <SafeAreaProvider>
      <ScreeContainer useBottomInset>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.infoContainer}>
            <View style={{}}>
              <SvgXml
                testID="svgRequestConfirmation"
                xml={requestConfirmation}
              />
            </View>
            <H6 variant="primary" style={styles.secondText}>
              {'Tu solicitud será atendida \nen un máximo 7 días hábiles\n'}
            </H6>
            <H4 variant="secondary" style={styles.center}>
              Se le asignará un número a tu solicitud y recibirás un correo
              electrónico con el resumen de la información enviada.
            </H4>
          </View>
          <View style={styles.buttonSeparator} />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonPadding}>
              <Button title="Hacer nueva solicitud" onPress={handlerOnClick} />
            </View>
            <View>
              <Button
                title="Volver Al Inicio"
                variant="outlinedWhite"
                onPress={handlerOnClick}
              />
            </View>
          </View>
        </ScrollView>
      </ScreeContainer>
    </SafeAreaProvider>
  );
}

export default RefundStepThree;
