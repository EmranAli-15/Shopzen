export const primaryColor = "#FF620A";
export const primaryBg = "#F2F6FF";
export const screenBg = "#FFF"

export const globalStyles = {
    btn: {
        borderWidth: 1,
        borderColor: primaryColor,
        backgroundColor: screenBg,
        paddingHorizontal: 10,
        paddingVertical: 14,
        borderRadius: 28
    },
    btnFilled: {
        borderWidth: 1,
        borderColor: primaryColor,
        backgroundColor: primaryColor,
        paddingHorizontal: 10,
        paddingVertical: 14,
        borderRadius: 28
    },
    txt: {
        fontSize: 16,
        textAlign: "center",
        fontWeight: "600",
    },
    textInput: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 28,
        marginTop: 4,
        fontWeight: "400",
        fontFamily: "Poppins"
    },

    p: {
        fontWeight: "400",
        fontSize: 16,
        fontFamily: "Poppins",
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