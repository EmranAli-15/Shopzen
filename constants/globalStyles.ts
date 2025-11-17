import { clampFont } from "@/utils/responsiveFont";

export const primaryColor = "#FF620A";
export const primaryBg = "#F2F6FF";
export const screenBg = "#FFF"

export const TYPOGRAPHY = {
    h1: clampFont({ min: 23, percentage: 3, max: 50 }),
    h2: clampFont({ min: 20, percentage: 2.8, max: 42 }),
    body: clampFont({ min: 14, percentage: 2.2, max: 24 }),
};

export const globalStyles = {
    btn: {
        borderWidth: 1,
        borderColor: primaryColor,
        backgroundColor: screenBg,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 28
    },
    btnFilled: {
        borderWidth: 1,
        borderColor: primaryColor,
        backgroundColor: primaryColor,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 28
    },
    txt: {
        fontSize: 16,
        textAlign: "center",
        fontFamily: "PoppinsMedium",
    },
    textInput: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 28,
        marginTop: 4,
        fontWeight: "400",
        fontSize: 14,
        fontFamily: "Poppins",
    },




    h6: {
        fontSize: 16,
        fontFamily: "PoppinsRegular",
        color: "#333333"
    },

    h3: {
        fontWeight: "600",
        fontSize: 24,
        fontFamily: "PoppinsMedium",
        color: "#333333",
        textAlign: "center"
    },




    // -----------------------------
    small: {
        fontSize: 12,
        fontFamily: "PoppinsRegular",
        color: "#666666",
        textAlign: "center"
    },
    p: {
        fontSize: 15,
        fontFamily: "PoppinsRegular",
        color: "#666666",
        textAlign: "center"
    },
    h1: {
        fontSize: TYPOGRAPHY.h1,
        fontFamily: "PoppinsMedium",
        color: "#333333",
    },
    h2: {
        fontSize: TYPOGRAPHY.h2,
        fontFamily: "PoppinsMedium",
        color: "#333333",
    },
    inputTitle: {
        fontFamily: "PoppinsMedium",
        color: "#333333",
        fontSize: 16,
    },
    inputText: {
        fontFamily: "PoppinsRegular",
        color: "#333333",
        fontSize: 14,
        borderRadius: 31,
        padding: 12,
    },
    inputBlurred: {
        backgroundColor: primaryBg,
        borderWidth: 1,
        borderColor: "transparent"
    },
    inputFocused: {
        backgroundColor: screenBg,
        borderWidth: 1,
        borderColor: primaryColor,
    },
}