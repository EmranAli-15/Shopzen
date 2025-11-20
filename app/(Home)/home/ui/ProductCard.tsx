// ProductCard.jsx
import { globalStyles, primaryColor } from "@/constants/globalStyles";
import { useAuth } from "@/contextProvider/ContextProvider";
import { handleAddToCart } from "@/utils/asyncStorate";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProductCard({ data }: { data: any }) {
    const { showAlert } = useAuth()

    const handleCart = (data: any) => {
        showAlert({ text: "Product added to cart", type: "success" });

        handleAddToCart(data);

    }

    const {
        image1,
        name,
        original_price,
        rating_avg,
        vendor_name
    } = data;


    return (
        <View>
            <View style={styles.card}>



                <Image source={{ uri: image1 }} style={styles.image} />

                <View style={styles.infoContainer}>
                    <Text numberOfLines={2} style={styles.title}>{name}</Text>


                    <View style={{ flexDirection: "row", columnGap: 2, alignItems: "center" }}>
                        <MaterialCommunityIcons name="storefront" size={12} color="#1A1F71" />
                        <Text style={{ fontFamily: "PoppinsRegular", fontSize: 12, marginTop: 3 }}>{vendor_name}</Text>
                    </View>




                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View style={{ flexDirection: "row", columnGap: 2, alignItems: "center" }}>
                            <FontAwesome6 name="bangladeshi-taka-sign" size={12} color={primaryColor} />
                            <Text style={styles.price}>{original_price}</Text>
                        </View>
                        <View style={{ flexDirection: "row", columnGap: 1, alignItems: "center" }}>
                            <Ionicons name="star" size={12} color={primaryColor} />
                            <Text style={styles.ratingText}>{rating_avg}</Text>
                        </View>
                    </View>

                    <View style={{ marginTop: 5 }}>
                        <TouchableOpacity
                            onPress={() => handleCart(data)}
                            style={[globalStyles.btnFilled, { paddingVertical: 5, borderRadius: 5, backgroundColor: "#1A1F71", borderWidth: 0 }]}>
                            <Text style={{ alignSelf: "center", fontFamily: "PoppinsRegular", color: "#fff", fontSize: 12 }}>Add cart</Text>
                        </TouchableOpacity>
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
        fontSize: 13,
        color: "#000000",
        fontFamily: "PoppinsMedium",
        marginBottom: 4,
    },

    price: {
        fontSize: 12,
        color: primaryColor,
        fontFamily: "PoppinsSemiBold",
        marginTop: 3
    },

    ratingRow: {
        flexDirection: "row",
        alignItems: "center",
    },

    ratingText: {
        fontSize: 12,
        marginLeft: 4,
        color: "#666",
    },
});
