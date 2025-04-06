import React, { useEffect, useMemo, useState } from 'react';
import { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';
import { Portal } from 'react-native-paper';

import { ModalRxjs } from '@/core/rxjs/ModalRxjs';
import TabsMenu from '@/components/shared/TabsMenu';

const MENU_WIDTH = 250;

export const MenuOverlay = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRight = useSharedValue(MENU_WIDTH);

  useEffect(() => {
    const sub = ModalRxjs.getMenu().subscribe(setIsMenuVisible);
    return () => sub.unsubscribe();
  }, []);

  const menuAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: menuRight.value }]
    };
  });

  useEffect(() => {
    menuRight.value = isMenuVisible ? withTiming(0, { duration: 150 }) : withTiming(MENU_WIDTH);
  }, [isMenuVisible]);

  const memoizedMenu = useMemo(() => {
    return <TabsMenu isVisible={isMenuVisible} 
                     animatedStyle={menuAnimatedStyle} 
                     onClose={() => setIsMenuVisible(false)} />;
  }, [isMenuVisible]);

  return (
    <Portal>
        {isMenuVisible && memoizedMenu}
    </Portal>
  );
};