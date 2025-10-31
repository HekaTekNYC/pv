// svgo.config.js
export default {
  multipass: true,
  plugins: [
    "removeDimensions",
    "removeComments",
    "removeMetadata",
    "cleanupNumericValues",
    "convertPathData",
  ],
};
