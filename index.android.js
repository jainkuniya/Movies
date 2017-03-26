import { AppRegistry, UIManager } from 'react-native';
import App from './src/app';

//Setting UIManager Flag in order to get LayoutAnimation work on android.
UIManager.setLayoutAnimationEnabledExperimental && 
UIManager.setLayoutAnimationEnabledExperimental(true);

AppRegistry.registerComponent('Movies', () => App);
