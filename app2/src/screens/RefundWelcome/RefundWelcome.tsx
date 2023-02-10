import React, { useCallback } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Button, ScreeContainer } from '../../components';
import { H4 } from '../../theme';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { reimbursementGroup1 } from '../../svg';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AssistantHeader from '../../components/AssistantHeader';

export const assistantMessage = `Conoce cómo funcionan
  tus reembolsos`;

export const infoText =
  'Registra tus gastos médicos. Te haremos un reembolso directo a tu cuenta de banco, el porcentaje del gasto según la cobertura de tu póliza.';

const styles = StyleSheet.create({
  root: {
    padding: 20,
    flexGrow: 1,
    paddingTop: 60,
  },
  svgIcon: {
    paddingTop: 20,
    alignItems: 'center',
  },
  textContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  infoText: {
    textAlign: 'left',
  },
  separator: { flexGrow: 1, minHeight: 20 },
  separator2: { minHeight: 20 },
});

function RefundWelcome({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) {
  const handlerOnClick = useCallback(() => {
    navigation.navigate('App2', { screen: 'RefundStepTwo' });
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
            <SvgXml testID="SvgLogo" xml={reimbursementGroup1} />
          </View>
          <View style={styles.textContainer}>
            <H4 variant="secondary" testID="TxtInfo" style={styles.infoText}>
              {infoText}
            </H4>
          </View>
          <View style={styles.separator} />
          <Button title="SIGUIENTE" onPress={handlerOnClick} />
          <Button
            title="SALTAR BIENVENIDA"
            variant="differentColorWithoutBorder"
            onPress={handlerOnClick}
          />
        </ScrollView>
      </ScreeContainer>
    </SafeAreaProvider>
  );
}

export default RefundWelcome;
