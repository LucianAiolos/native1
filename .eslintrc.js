module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {'prettier/prettier': ['error', {endOfLine: 'auto'}]},
  //Above line added to remove es-lint warnings for cr (lines - aka carrige returns)
};
