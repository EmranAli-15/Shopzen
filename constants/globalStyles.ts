export const primaryColor = "#FF620A";
export const primaryBg = "#F2F6FF";
export const screenBg = "#FFF"

export const globalStyles = {
    btn: {
        borderWidth: 1,
        borderColor: primaryColor,
        backgroundColor: screenBg,
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderRadius: 28
    },
    btnFilled: {
        borderWidth: 1,
        borderColor: primaryColor,
        backgroundColor: primaryColor,
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderRadius: 28
    },
    txt: {
        fontSize: 16,
        textAlign: "center",
        fontFamily: "PoppinsSemiBold",
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

    p: {
        fontSize: 16,
        fontFamily: "PoppinsRegular",
        color: "#666666",
        textAlign: "center"
    },


    h6: {
        fontWeight: "500",
        fontSize: 16,
        fontFamily: "Poppins",
        color: "#333333"
    },

    h3: {
        fontWeight: "600",
        fontSize: 24,
        fontFamily: "Poppins",
        color: "#333333",
        textAlign: "center"
    },




    // -----------------------------
    h1: {
        fontSize: 24,
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
        padding: 16,
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