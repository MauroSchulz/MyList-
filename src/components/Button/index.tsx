import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';

export function Button(props: TouchableOpacityProps) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7} {...props}>
      <Feather name="plus-circle" size={18} color="#F2F2F2" />
    </TouchableOpacity>
  );
}
