import { NativeModules } from "react-native";

const RNEmulatorCheck = NativeModules.RNDeviceType;

export function isEmulator() {
  return RNEmulatorCheck && RNEmulatorCheck.isEmulator;
}
