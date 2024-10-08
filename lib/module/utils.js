import React, { Children } from 'react';
import { StyleSheet, View } from 'react-native';
export const LEGACY_childrenWithOverriddenStyle = children => {
  return Children.map(children, child => {
    const element = child;
    return (
      /*#__PURE__*/
      // Add a wrapper to ensure layout is calculated correctly
      React.createElement(View, {
        style: StyleSheet.absoluteFill,
        collapsable: false
      }, /*#__PURE__*/React.cloneElement(element, {
        ...element.props,
        // Override styles so that each page will fill the parent.
        style: [element.props.style, StyleSheet.absoluteFill]
      }))
    );
  });
};
export const childrenWithOverriddenStyle = function (children) {
  let pageMargin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return Children.map(children, child => {
    return /*#__PURE__*/React.createElement(View, {
      style: {
        height: '100%',
        width: '100%',
        paddingHorizontal: pageMargin / 2
      },
      collapsable: false
    }, child);
  });
};
//# sourceMappingURL=utils.js.map