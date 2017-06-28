/**
 * Tabbar Icon
 *
    <TabIcon icon={'search'} selected={false} />
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

import { AppColors } from '@theme/';

/* Component ==================================================================== */
const TabIconRemix = ({ icon, source, selected }) => (
  <Icon
    name={icon}
    size={26}
    color={selected ? AppColors.tabbar.iconSelected : AppColors.tabbar.iconDefault}
    type={source}
  />
);

TabIconRemix.propTypes = { icon: PropTypes.string.isRequired, selected: PropTypes.bool, type: PropTypes.string };
TabIconRemix.defaultProps = { icon: 'search', selected: false, source: 'font-awesome' };

/* Export Component ==================================================================== */
export default TabIconRemix;
