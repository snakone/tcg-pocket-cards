import { TouchableOpacity } from "react-native";

import { CardGridStyles } from "@/shared/styles/component.styles";
import { IconSymbol } from "./IconSymbol";

interface ResetFilterButtonProps {
  left: number;
  onPress: () => void;
}

export const ResetFilterButton: React.FC<ResetFilterButtonProps> = ({ left, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[CardGridStyles.clearInput, { left }]}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
      <IconSymbol name="clear" size={20} color="gray" />
    </TouchableOpacity>
  );
};