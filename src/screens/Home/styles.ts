import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },
  header: {
    height: 173,
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  logo: {
    width: 118,
    height: 32,
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  form: {
    flexDirection: 'row',
    gap: 4,
    marginTop: -27,
  },
  counters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
  },
  divider: {
    height: 1,
    backgroundColor: '#333333',
    marginTop: 20,
  },
});
