import React, { useCallback } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Button, CheckMarkRow, ScreeContainer } from '../../components';
import { reimbursementGroup3 } from '../../svg';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AssistantHeader from '../../components/AssistantHeader';

export const assistantMessage = `Recuerda tener a la mano
los siguientes documentos`;

export const infoText =
  'Recetas médicas con diagnóstico y facturas fiscales de medicinas, exámenes de laboratorios o rayos-x';

export const infoText2 = 'Formulario de reclamo';

const styles = StyleSheet.create({
  root: {
    padding: 20,
    paddingTop: 60,
    flexGrow: 1,
  },
  svgIcon: {
    alignItems: 'center',
  },
  buttonSeparator: {
    flexGrow: 1,
    minHeight: 20,
  },
  checkContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    maxWidth: 340,
    width: '100%',
  },
  containerCheck2: {
    flexDirection: 'row',
    paddingTop: 10,
    maxWidth: 290,
    paddingHorizontal: 15,
  },
  text: {
    flex: 1,
    marginTop: 6,
    marginLeft: 4,
  },
  redText: {
    color: '#FF7182',
    fontWeight: '700',
  },
  redUnderlineText: {
    color: '#FF7182',
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});

function RefundStepTwo({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) {
  const handlerOnClick = useCallback(() => {
    navigation.navigate('App2', { screen: 'RefundStepThree' });
  }, [navigation]);

  return (
    <SafeAreaProvider>
      <ScreeContainer useBottomInset applyGradient>
        <AssistantHeader
          backgroundColor="transparent"
          titleOverwrite={assistantMessage}
          navigation={navigation}
        />
        <ScrollView contentContainerStyle={styles.root}>
          <View style={styles.svgIcon}>
            <SvgXml testID="SvgLogo" xml={reimbursementGroup3} />
          </View>
          <View style={styles.checkContainer}>
            <CheckMarkRow text="Recetas médicas" />
            <CheckMarkRow text="Facturas fiscales" />
            <CheckMarkRow text="Formulario de reclamo" />
            <CheckMarkRow text="Las recetas y los formularios deben incluir el diagnóstico médico." />
          </View>
          <View style={styles.buttonSeparator} />
          <Button title="¡COMENCEMOS!" onPress={handlerOnClick} />
        </ScrollView>
      </ScreeContainer>
    </SafeAreaProvider>
  );
}

export default RefundStepTwo;
