import Container from '@/components/Container';
import Header from '@/components/header/Header';
import { globalStyles, primaryBg, primaryColor } from '@/constants/globalStyles';
import { useAuth } from '@/contextProvider/ContextProvider';
import { storeData } from '@/utils/asyncStorate';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';
import { CameraView, useCameraPermissions } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import React, { useRef, useState } from 'react';
import { FlatList, Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// icons...
const icon1 = require("@/assets/images/profile/profileIcons/icon1.png");
const icon2 = require("@/assets/images/profile/profileIcons/icon2.png");
const icon3 = require("@/assets/images/profile/profileIcons/icon3.png");
const icon4 = require("@/assets/images/profile/profileIcons/icon4.png");
const icon5 = require("@/assets/images/profile/profileIcons/icon5.png");
const icon6 = require("@/assets/images/profile/profileIcons/icon6.png");
const icon7 = require("@/assets/images/profile/profileIcons/icon7.png");
const icon8 = require("@/assets/images/profile/profileIcons/icon8.png");
const icon9 = require("@/assets/images/profile/profileIcons/icon9.png");
const icon10 = require("@/assets/images/profile/profileIcons/icon10.png");
const icon11 = require("@/assets/images/profile/profileIcons/icon11.png");
const icon12 = require("@/assets/images/profile/profileIcons/icon12.png");
const icon13 = require("@/assets/images/profile/profileIcons/icon13.png");
const icon14 = require("@/assets/images/profile/profileIcons/icon14.png");
const icon15 = require("@/assets/images/profile/profileIcons/icon15.png");
// ... keep your whole icon imports ...

export default function ProfilePhoto() {

    const { user, setContextLoading, showAlert } = useAuth();

    const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10, icon11, icon12, icon13, icon14, icon15];

    const [isIcon, setIsIcon] = useState(-1);
    const [profileURL, setProfileURL] = useState(user.image || "");

    // ================================
    // ✅ CAMERA STATES
    // ================================
    const [permission, requestPermission] = useCameraPermissions();
    const [cameraVisible, setCameraVisible] = useState(false);
    const cameraRef = useRef<any>(null);
    const [capturedPhoto, setCapturedPhoto] = useState<any>(null);

    // ================================
    // 📌 PICK FROM GALLERY
    // ================================
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setCapturedPhoto(null);
            setProfileURL(result.assets[0].uri);
            setIsIcon(-1);
        }
    };

    // ================================
    // 📸 OPEN CAMERA
    // ================================
    const openCamera = async () => {
        const perm = await requestPermission();
        if (!perm.granted) return;

        setCapturedPhoto(null);
        setCameraVisible(true);
    };

    // ================================
    // 📸 TAKE PHOTO
    // ================================
    const takePhoto = async () => {
        if (cameraRef.current) {
            const photo = await cameraRef.current.takePictureAsync();
            setCapturedPhoto(photo);
        }
    };

    // ================================
    // 📌 USE PHOTO
    // ================================
    const confirmPhoto = () => {
        setProfileURL(capturedPhoto.uri);
        setIsIcon(-1);
        setCameraVisible(false);
    };

    const handleSavePhoto = () => {
        user.image = profileURL;
        storeData({ key: "user", value: user });
        setContextLoading(true);
        showAlert({ text: "Profile photo updated", type: "success" });
    };

    return (
        <>
            {/* -------------------------------------------------------- */}
            {/* 📸 Camera Modal */}
            {/* -------------------------------------------------------- */}
            <Modal visible={cameraVisible} animationType="slide">
                <View style={{ flex: 1, backgroundColor: "#000" }}>
                    {capturedPhoto ? (
                        // ===== Preview Screen =====
                        <View style={{ flex: 1 }}>
                            <Image
                                source={{ uri: capturedPhoto.uri }}
                                style={{ width: "100%", height: "100%" }}
                            />

                            <View style={{ position: "absolute", bottom: 40, width: "100%", flexDirection: "row", justifyContent: "space-around" }}>
                                <TouchableOpacity onPress={() => setCapturedPhoto(null)} style={styles.previewBtn}>
                                    <Text style={{ color: "#fff" }}>Retake</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={confirmPhoto} style={[styles.previewBtn, { backgroundColor: primaryColor }]}>
                                    <Text style={{ color: "#fff" }}>Use Photo</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ) : (
                        // ===== Camera View =====
                        <CameraView ref={cameraRef} style={{ flex: 1 }}>
                            <TouchableOpacity onPress={takePhoto} style={styles.captureBtn} />
                            <TouchableOpacity onPress={() => setCameraVisible(false)} style={styles.closeBtn}>
                                <Text style={{ color: "white", fontSize: 20 }}>✕</Text>
                            </TouchableOpacity>
                        </CameraView>
                    )}
                </View>
            </Modal>

            {/* -------------------------------------------------------- */}
            {/* MAIN PROFILE UI */}
            {/* -------------------------------------------------------- */}
            <Container>
                <Header title='Upload Your Picture'></Header>
                <ScrollView>
                    <View style={{ flexDirection: "column", flex: 1, rowGap: 30 }}>
                        <Text style={[globalStyles.p as any, { textAlign: "left" }]}>
                            Add a profile picture to personalize your ShopZen experience. You can skip this for now.
                        </Text>

                        {/* PROFILE IMAGE PREVIEW */}
                        <View>
                            <View style={[styles.container, { borderRadius: "50%", overflow: "hidden" }]}>
                                {
                                    profileURL && isIcon == -1 ? (
                                        <Image style={styles.image} source={{ uri: profileURL }} />
                                    ) : isIcon >= 0 ? (
                                        <Image style={styles.image} source={icons[isIcon]} />
                                    ) : (
                                        <View style={{ borderRadius: "50%", backgroundColor: primaryBg, padding: 10, height: 150, width: 150, alignItems: "center", justifyContent: "center" }}>
                                            <FontAwesome name="user" size={130} color={primaryColor} />
                                        </View>
                                    )
                                }
                            </View>

                            {/* BUTTONS */}
                            <View style={{ marginTop: 16, flexDirection: "row", justifyContent: "center", gap: 10 }}>
                                {/* Gallery */}
                                <TouchableOpacity
                                    style={[globalStyles.btnFilled, { paddingVertical: 6, borderRadius: 8 }]}
                                    onPress={pickImage}
                                >
                                    <Text style={[globalStyles.txt as any, { color: "#fff" }]}>Gallery</Text>
                                </TouchableOpacity>

                                {/* Camera */}
                                <TouchableOpacity
                                    style={[globalStyles.btnFilled, { paddingVertical: 6, borderRadius: 8 }]}
                                    onPress={openCamera}
                                >
                                    <Fontisto name="camera" size={16} color="white" />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* AVATAR GRID */}
                        <View>
                            <Text style={globalStyles.p as any}>Or choose avatar instead</Text>
                            <FlatList
                                style={{ marginTop: 16 }}
                                numColumns={5}
                                scrollEnabled={false}
                                data={icons}
                                renderItem={({ item, index }) => (
                                    <TouchableOpacity
                                        onPress={() => setIsIcon(index)}
                                        style={{ width: "20%", alignItems: "center", height: 70 }}
                                    >
                                        <Image style={styles.icons} source={item} />
                                    </TouchableOpacity>
                                )}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>

                        <TouchableOpacity onPress={handleSavePhoto} style={globalStyles.btnFilled}>
                            <Text style={[globalStyles.txt as any, { color: "white" }]}>Update Profile</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Container>
        </>
    );
}

const styles = StyleSheet.create({
    container: { alignSelf: 'center' },
    image: { width: 150, height: 150, objectFit: "cover" },
    icons: { maxWidth: 60, maxHeight: 60 },

    // CAMERA UI
    captureBtn: {
        position: "absolute",
        bottom: 40,
        alignSelf: "center",
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "white",
    },
    closeBtn: {
        position: "absolute",
        top: 40,
        right: 20,
        backgroundColor: "rgba(0,0,0,0.6)",
        padding: 10,
        borderRadius: 30,
    },
    previewBtn: {
        padding: 12,
        backgroundColor: "#333",
        borderRadius: 8,
    }
});
