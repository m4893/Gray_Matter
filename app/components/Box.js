import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  viewContainer: {
    margin: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
    borderColor: 'blue',
    height: 50,
    borderWidth: 1,
  },
});

const Box = (props) => (
  <View style={[styles.viewContainer ]} />
);

Box.propTypes = {
    isError: PropTypes.bool,
};

Box.defaultProps = {
    isError: false,
};

export default Box;