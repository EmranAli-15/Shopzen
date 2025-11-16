import { RFPercentage } from "react-native-responsive-fontsize";

export const clampFont = ({ min, percentage, max }: { min: number, percentage: number, max: number }) => {
    const value = RFPercentage(percentage);
    return Math.min(Math.max(value, min), max);
};