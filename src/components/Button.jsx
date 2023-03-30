import {Pressable, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../constants';

function Button({children, onPress, mode, style}) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => pressed && styles.pressed}>
        <View style={[styles.button, mode === 'flat' && styles.flat]}>
          <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    padding: 12,
  },
  flat: {
    backgroundColor: 'transparent',
    borderRadius: 12,
    borderColor: COLORS.headerColor,
    borderWidth: 1,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Inter-Bold',
  },
  flatText: {
    color: COLORS.headerColor,
    fontWeight: '700',
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Inter-Bold',
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: '#c6affc',
    borderRadius: 4,
  },
});
