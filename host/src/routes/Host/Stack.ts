import { NavigatorScreenParams } from '@react-navigation/native';
import { App2Stack } from '../App2';

type Stack = {
  Host: undefined;
  App1: undefined;
  App2: NavigatorScreenParams<App2Stack>;
};

export default Stack;
