import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  badge: {
    backgroundColor: '#333333',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
    minWidth: 25,
    alignItems: 'center',
  },
  badgeText: {
    color: '#D9D9D9',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
