import { FlatList, StyleSheet, View } from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import React, { useCallback } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faReceipt } from '@fortawesome/pro-light-svg-icons/faReceipt';
import { faHistory } from '@fortawesome/pro-light-svg-icons/faHistory';
import { faPercent } from '@fortawesome/pro-light-svg-icons/faPercent';

import { DashboardButton, ScreeContainer } from '../../components';
import { colors } from '../../theme';
import { CellWrapper } from '../../components';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AssistantHeader from '../../components/AssistantHeader';

type ButtonData = {
  title: string;
  key: string;
  subTitle: string;
  icon: IconProp;
  accessibilityLabel: string;
};

export const buttonData: ButtonData[] = [
  {
    title: 'Solicitar reembolso',
    key: 'refund',
    subTitle:
      'Solicita reembolsos de consultas, medicinas, laboratorios u otros',
    icon: faReceipt,
    accessibilityLabel: 'health_button_ask_for_reimbursement',
  },
  {
    title: 'Ver historial',
    key: 'history',
    subTitle: 'Consulta y da seguimiento a los reembolsos solicitados',
    icon: faHistory,
    accessibilityLabel: 'health_button_view_reimbursement_history',
  },
  {
    title: 'Ver deducibles',
    key: 'deductible',
    accessibilityLabel: 'health_button_attention_deductible',
    subTitle: 'Consulta el deducible acumulado de tu póliza',
    icon: faPercent,
  },
];

const Dashboard = ({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) => {
  const handlerClick = useCallback(() => {
    navigation.navigate('App2', { screen: 'RefundWelcome' });
  }, [navigation]);

  useNavigation();

  return (
    <SafeAreaProvider>
      <ScreeContainer>
        <AssistantHeader
          showMenu
          navigation={navigation}
          titleOverwrite="Mis Reembolsos"
        />
        <View style={styles.container}>
          <FlatList
            testID="buttonList"
            data={buttonData}
            keyExtractor={(item) => item.key}
            contentContainerStyle={styles.flatListContainer}
            renderItem={({ item }) => (
              <CellWrapper>
                <DashboardButton
                  title={item.title}
                  subTitle={item.subTitle}
                  icon={item.icon}
                  onPress={handlerClick}
                  variant="white"
                  imageBackgroundColor={colors.bright_turquoise}
                />
              </CellWrapper>
            )}
          />
        </View>
      </ScreeContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFF',
  },
  flatListContainer: {
    flexGrow: 1,
  },
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

export default Dashboard;
