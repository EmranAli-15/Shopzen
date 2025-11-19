const apiKey = "AIzaSyC-XFXJALexWMzaFrjgWY7sL_Wt5cyZrfQ"
import Container from '@/components/Container';
import Header from '@/components/header/Header';
import FontAwesome from '@expo/vector-icons/FontAwesome';
// 1. Import necessary components for UI customization
import { GoogleGenAI } from '@google/genai';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Bubble, GiftedChat, InputToolbar, Send } from 'react-native-gifted-chat';

// --- Configuration ---
// ⚠️ WARNING: For practice only. Never store production API keys in source code.
const API_KEY = apiKey; // Replace with your actual key
const genAI = new GoogleGenAI({ apiKey: API_KEY });

// --- UI Constants ---
const USER_COLOR = '#E1F3F2'; // Deep Blue for user messages
const AI_COLOR = '#E1F3F2'; // Light Gray for AI messages
const INPUT_BAR_COLOR = 'black'; // White for the input bar

// --- Custom Renderer Functions ---

// Function to customize message bubbles (colors and text styles)
const renderBubble = (props: any) => {
    return (
        <Bubble
        
            {...props}
            wrapperStyle={{
                right: {
                    backgroundColor: USER_COLOR,
                    borderTopRightRadius: 0,
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30,
                    borderTopLeftRadius: 30,
                },
                left: {
                    backgroundColor: AI_COLOR,
                    borderTopRightRadius: 30,
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30,
                    borderTopLeftRadius: 0,
                },
            }}
            textStyle={{
                right: {
                    color: 'black',
                    padding: 8,
                    // Use a system font or a custom loaded font
                    fontSize: 15,
                },
                left: {
                    padding: 8,
                    color: '#333333',
                    fontSize: 15,
                },
            }}
        />
    );
};

// Function to customize the Input Toolbar (the bar at the bottom)
const renderInputToolbar = (props: any) => {
    return (
        <InputToolbar
            {...props}
            containerStyle={styles.inputToolbarContainer}
        />
    );
};

// Function to customize the Send button
const renderSend = (props: any) => {
    return (
        <Send {...props}>
            <View style={[styles.sendContainer]}>
                <FontAwesome name="send-o" size={20} color="#077E78" />
            </View>
        </Send>
    );
};


// --- Main Component ---
export default function LiveChat() {
    const [messages, setMessages] = useState<any>([]);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello! I am your simple AI assistant. How can I help you?',
                createdAt: new Date(),
                user: { _id: 2, name: 'AI Assistant' },
            },
        ]);
    }, []);

    const generateAIResponse = async (userMessage: any) => {
        try {
            setIsTyping(true);

            // The code for calling the Gemini API remains the same
            const response = await genAI.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: userMessage,
            });

            const botMessage = {
                _id: Math.random().toString(),
                text: response.text,
                createdAt: new Date(),
                user: { _id: 2, name: 'AI Assistant' },
            };

            setMessages((previousMessages: any) =>
                GiftedChat.append(previousMessages, [botMessage as any]),
            );
        } catch (error) {
            console.error("Gemini API Error:", error);
            // Error handling remains the same
            const errorMessage = {
                _id: Math.random().toString(),
                text: "Sorry, I ran into an error. Please try again.",
                createdAt: new Date(),
                user: { _id: 2, name: 'AI Assistant' },
            };
            setMessages((previousMessages: any) =>
                GiftedChat.append(previousMessages, [errorMessage]),
            );
        } finally {
            setIsTyping(false);
        }
    };

    const onSend = useCallback((newMessages: any = []) => {
        setMessages((previousMessages: any) =>
            GiftedChat.append(previousMessages, newMessages),
        );
        generateAIResponse(newMessages[0]?.text);
    }, []);

    return (
        <Container>
            <Header title='Live Chat'></Header>
            <View style={{ flex: 1 }}>
                <GiftedChat
                    messages={messages}
                    onSend={onSend}
                    user={{
                        _id: 1, // User ID
                    }}
                    renderLoading={() => <ActivityIndicator size="large" />}
                    isTyping={isTyping}

                    // --- UI Customization Props Applied Here ---
                    renderBubble={renderBubble}
                    renderInputToolbar={renderInputToolbar}
                    renderSend={renderSend}

                    // Style the text input field itself
                    // textInputStyle={styles.textInputStyle}

                    // You can customize the chat background color
                    listViewProps={{
                        style: { backgroundColor: '#F9F9F9' }
                    }}
                />
            </View>
        </Container>
    );
}


// --- Stylesheet for Customization ---
const styles = StyleSheet.create({
    inputToolbarContainer: {
        borderRadius: 28,
        borderColor: '#077E78',
        borderWidth: 1
    },
    textInputStyle: {
        color: 'red',
        // Example: Change the font size or family
        fontSize: 16,
    },
    sendContainer: {
        marginRight: 10,
        marginBottom: 5,
        justifyContent: 'center',
        alignItems: 'baseline',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    sendText: {
        color: USER_COLOR, // Matching the user's bubble color
        fontWeight: 'bold',
        fontSize: 14,
    }
});