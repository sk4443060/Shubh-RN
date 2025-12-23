import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  priceTag: {
    display: "flex",
    alignItems: "flex-start",
  },
  priceText: {
    backgroundColor: "#000",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 25,
    paddingVertical: 3,
    borderRadius: 5,
    marginBottom: 10,
  },
  carImage: {
    height: 200,
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  cardHeader: {
    width: '100%',
    marginBottom: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center' }
});
