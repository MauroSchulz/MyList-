import { View, Image } from 'react-native';

import { styles } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Counter } from '../../components/Counter';

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </View>

      <View style={styles.content}>
        <View style={styles.form}>
          <Input placeholder="Adicione algo a sua lista" />
          <Button />
        </View>

        <View style={styles.counters}>
          <Counter label="Criadas" value={5} color="#1ECAD3" />
          <Counter label="Concluídas" value={2} color="#1E9BD7" />
        </View>

        <View style={styles.divider} />
      </View>
    </View>
  );
}
