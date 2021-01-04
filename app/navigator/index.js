import { createAppContainer } from 'react-navigation'
import { screenNames } from '../utils/constant';
import Login from '../screen/login';
import OTP from '../screen/otp';
import { createStackNavigator } from 'react-navigation-stack';

const MainNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      key: screenNames.LOGIN_SCREEN,
    },
    OTP: {
      screen: OTP,
      key: screenNames.OTP_SCREEN,
    },
  },
  {
    initialRouteName: screenNames.LOGIN_SCREEN,
    headerMode: 'none',
  },
);
const RootNavigator = createAppContainer(MainNavigator);

export default RootNavigator;
