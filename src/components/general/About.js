/**
 * Placeholder Scene
 *
    <Placeholder text={"Hello World"} />
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

// Consts and Libs
import { AppStyles } from '@theme/';

// Components
import { Text } from '@ui/';

/* Component ==================================================================== */
const About = ({ text}) => (
  <View style={[AppStyles.container, AppStyles.containerCentered]}>
    <Text>{text}</Text>
  </View>
);

About.propTypes = { text: PropTypes.string };
About.defaultProps = { text: 'TMA Teams...' };
About.componentName = 'About';

/* Export Component ==================================================================== */
export default About;
