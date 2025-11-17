// ProductCard.jsx
import { primaryColor } from "@/constants/globalStyles";
import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";

export default function ProductCard({ image, title, price, rating }: { image: any, title: any, price: any, rating: any }) {
    return (
        <View style={styles.card}>
            <Image source={{ uri: image }} style={styles.image} />

            <View style={styles.infoContainer}>
                <Text numberOfLines={2} style={styles.title}>{title}</Text>

                <Text style={styles.price}>${price}</Text>

                <View style={styles.ratingRow}>
                    <Ionicons name="star" size={16} color={primaryColor} />
                    <Text style={styles.ratingText}>{rating}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",

    // iOS bottom shadow
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 6 },  // push shadow downward
    shadowRadius: 10,

    // Android bottom shadow
    elevation: 8, // gives bottom-heavy shadow
    marginBottom: 14,
    },

    image: {
        width: "100%",
        height: 120,
    },

    infoContainer: {
        padding: 10,
    },

    title: {
        fontSize: 14,
        fontWeight: "600",
        color: "#333333",
        fontFamily:"PoppinsMedium",
        marginBottom: 4,
    },

    price: {
        fontSize: 16,
        color: "#1A1F71",
        fontFamily:"PoppinsMedium",
        marginBottom: 6,
    },

    ratingRow: {
        flexDirection: "row",
        alignItems: "center",
    },

    ratingText: {
        fontSize: 14,
        marginLeft: 4,
        color: "#666",
    },
});
