import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

export default function MyModal({ modal, setModal, children }: { modal: boolean, setModal: Function, children: any }) {
    return (
        <>
            {
                modal && <View style={style.modalBox}>
                    <TouchableOpacity
                        // onPress={() => setModal(!modal)}
                        style={style.customModal}>

                    </TouchableOpacity>
                    <View style={style.insideModal}>
                        {
                            children
                        }
                    </View>
                </View>
            }
        </>
    )
}


const style = StyleSheet.create({
    customModal: {
        flex: 1,
        position: "absolute",
        top: 0,
        bottom: 0,
        width: "120%",
        height: "100%",
        right: 10,
        overflow: "visible",
        backgroundColor: "#000000dc",
    },
    insideModal: {
        backgroundColor: "#FFF",
        padding: 30,
        top: "30%",
        borderRadius: 5,
        left: "5%",
        width: "80%",
    },
    modalBox: {
        position: 'absolute',
        left: 0,
        right: 0,
        height: "100%",
        width: "110%",
        zIndex: 30,
    }
})