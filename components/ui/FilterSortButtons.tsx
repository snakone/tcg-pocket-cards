import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, StyleProp, TextStyle } from "react-native";

import { SortItem } from "@/shared/definitions/interfaces/layout.interfaces";
import { ThemedView } from "../ThemedView";
import { IconSymbol } from "./IconSymbol";

interface SortAndFilterButtonsProps {
  sort: SortItem | undefined;
  sortPress: () => void;
  filterPress: () => void;
  sortIconStyle: string;
  sortOrderIcon: any;
  filterIcon: any;
  styles: any,
}

interface SortAndFilterButtonsWithMenuProps extends SortAndFilterButtonsProps {
  menuPress: () => void;
}

export const SortAndFilterButtons: React.FC<SortAndFilterButtonsProps> = ({
  sort,
  sortPress,
  filterPress,
  sortIconStyle,
  sortOrderIcon,
  filterIcon,
  styles
}) => {
  return (
    <>
      <TouchableOpacity onPress={sortPress} style={styles.container}>
        <ThemedView>
          <MaterialIcons name={(sort?.icon as any) || 'content-paste-search'} 
                         color={'skyblue'} 
                         style={sortIconStyle as StyleProp<TextStyle>}> 
          </MaterialIcons>
          <MaterialIcons name={sortOrderIcon} style={styles.sortIcon}></MaterialIcons>
        </ThemedView>
      </TouchableOpacity>
      <TouchableOpacity onPress={filterPress} 
                        style={[styles.container, {bottom: 88}]}>
        <ThemedView>
          <IconSymbol name="cat.circle" 
                      color={'mediumaquamarine'} 
                      style={{fontSize: 32}}>
          </IconSymbol>
          <MaterialIcons name={filterIcon} style={styles.sortIcon}></MaterialIcons>
        </ThemedView>
      </TouchableOpacity>       
    </>
  );
};

export const SortAndFilterButtonsWithMenu: React.FC<SortAndFilterButtonsWithMenuProps> = ({
  sort,
  sortPress,
  filterPress,
  menuPress,
  sortIconStyle,
  sortOrderIcon,
  filterIcon,
  styles,
}) => {
  return (
    <>
      <TouchableOpacity onPress={menuPress} style={[styles.container]}>
        <ThemedView>
          <IconSymbol name="menubar.rectangle" 
                      color={'#8E8E8F'}
                      style={{fontSize: 28}} />
        </ThemedView>
      </TouchableOpacity>
      <TouchableOpacity onPress={sortPress} 
                        style={[styles.container, {bottom: 88}]}>
        <ThemedView>
          <MaterialIcons name={(sort?.icon as any) || 'content-paste-search'} 
                         color={'skyblue'} 
                         style={sortIconStyle as StyleProp<TextStyle>}> 
          </MaterialIcons>
          <MaterialIcons name={sortOrderIcon} style={styles.sortIcon}></MaterialIcons>
        </ThemedView>
      </TouchableOpacity>
      <TouchableOpacity onPress={filterPress} 
                        style={[styles.container, {bottom: 152}]}>
        <ThemedView>
          <IconSymbol name="cat.circle" 
                      color={'mediumaquamarine'} 
                      style={{fontSize: 32}}>
          </IconSymbol>
          <MaterialIcons name={filterIcon} style={styles.sortIcon}></MaterialIcons>
        </ThemedView>
      </TouchableOpacity>     
    </>
  );
};