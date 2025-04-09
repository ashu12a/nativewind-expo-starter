import { Platform } from 'react-native';

export const fonts = {
  regular: Platform.select({
    ios: 'OpenSans-Regular',
    android: 'OpenSans-Regular',
  }),
  medium: Platform.select({
    ios: 'OpenSans-Medium',
    android: 'OpenSans-Medium',
  }),
  semiBold: Platform.select({
    ios: 'OpenSans-SemiBold',
    android: 'OpenSans-SemiBold',
  }),
  bold: Platform.select({
    ios: 'OpenSans-Bold',
    android: 'OpenSans-Bold',
  }),
}; 