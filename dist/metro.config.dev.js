"use strict";

/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
module.exports = {
  transformer: {
    getTransformOptions: function getTransformOptions() {
      return regeneratorRuntime.async(function getTransformOptions$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", {
                transform: {
                  experimentalImportSupport: false,
                  inlineRequires: true
                }
              });

            case 1:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  },
  resolver: {
    sourceExts: ['jsx', 'js', 'ts', 'tsx', 'cjs', '.native.js', 'json'] //add here

  }
};