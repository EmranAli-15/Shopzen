// ProductCard.jsx
import { primaryColor } from "@/constants/globalStyles";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Image, StyleSheet, Text, View } from "react-native";

export default function ProductCard({ image, title, price, rating, vendor }: { image: any, title: any, price: any, rating: any, vendor:any }) {
    return (
        <View style={styles.card}>
            <Image source={{ uri: image }} style={styles.image} />

            <View style={styles.infoContainer}>
                <Text numberOfLines={2} style={styles.title}>{title}</Text>


                <View style={{ flexDirection: "row", columnGap: 2, alignItems: "center" }}>
                    <MaterialCommunityIcons name="storefront" size={18} color="#1A1F71" />
                    <Text style={{fontFamily:"PoppinsRegular"}}>{vendor}</Text>
                </View>




                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <View style={{ flexDirection: "row", columnGap: 1, alignItems: "center" }}>
                        <FontAwesome6 name="bangladeshi-taka-sign" size={14} color="#1A1F71" />
                        <Text style={styles.price}>{price}</Text>
                    </View>
                    <View style={{ flexDirection: "row", columnGap: 1, alignItems: "center" }}>
                        <Ionicons name="star" size={14} color={primaryColor} />
                        <Text style={styles.ratingText}>{rating}</Text>
                    </View>
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
        fontSize: 16,
        color: "#000000",
        fontFamily: "PoppinsMedium",
        marginBottom: 4,
    },

    price: {
        fontSize: 14,
        color: "#1A1F71",
        fontFamily: "PoppinsSemiBold",
        marginTop:3
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
