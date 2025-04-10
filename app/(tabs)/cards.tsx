import { useEffect, useState } from 'react';
import React from 'react';
import { filter } from 'rxjs';
import { Portal } from 'react-native-paper';

import SoundService from '@/core/services/sounds.service';
import { FilterRxjs } from '@/core/rxjs/FilterRxjs';
import { SortRxjs } from '@/core/rxjs/SortRxjs';

import { getFilterIcon, getSortIconStyle, getSortOrderIcon } from '@/shared/definitions/utils/functions';
import { SortData } from '@/shared/definitions/interfaces/global.interfaces';
import { FilterSearch } from '@/shared/definitions/classes/filter.class';
import { ModalType } from '@/shared/definitions/types/global.types';
import { cardStyles } from '@/shared/styles/component.styles';

import ImageGridWithSearch from '@/components/ui/CardGrid';
import { CardsScreenModal } from '@/components/modals';
import { SortAndFilterButtons } from '@/components/ui/FilterSortButtons';
import FilterCardMenu from '@/components/shared/cards/FilterCardMenu';
import SortCardMenu from '@/components/shared/cards/SortCardMenu';


export default function CardsScreen() {
  console.log('Cards Screen')
  const [sortData, setSortData] = useState<SortData>();

  const [modalVisibility, setModalVisivility] = useState<Partial<Record<ModalType, boolean>>>({
    cards: false,
    cardsSort: false,
  });

  function handleModalVisibility(key: ModalType, value: boolean): void {
    setModalVisivility(prev => ({...prev, [key]: value}));
    value ? SoundService.play('AUDIO_MENU_OPEN') :
      SoundService.play('AUDIO_MENU_CLOSE');
  }

  function handleClose(key: ModalType): void {
    handleModalVisibility(key, false);
  }

  useEffect(() => {
    const sub = FilterRxjs.getFilter<FilterSearch>('cards')
      .subscribe(res => setSortData((prev: any) => {
        return {
          ...prev,
          filterIcon: getFilterIcon(res)
        }
      }));

    return () => sub.unsubscribe();
  }, []);

  useEffect(() => {
    const sub = SortRxjs.getSortActive('cards')
     .pipe(filter(Boolean)).subscribe(res => 
      (
        setSortData(_ => {
          return {
            sort: res,
            iconStyle: getSortIconStyle(res),
            orderIcon: getSortOrderIcon(res),
            filterIcon: _?.filterIcon
          }
        })
      ));

    return () => sub.unsubscribe();
  }, []);

  return (
    <>
      <ImageGridWithSearch modal={<CardsScreenModal></CardsScreenModal>}
                           modalTitle='cards'
                           title='card_collection'/>

      <SortAndFilterButtons sort={sortData?.sort}
                            filterIcon={sortData?.filterIcon}
                            filterPress={() => handleModalVisibility('cards', true)}
                            sortPress={() => handleModalVisibility('cardsSort', true)}
                            sortIconStyle={sortData?.iconStyle}
                            sortOrderIcon={sortData?.orderIcon}
                            styles={cardStyles}/>
                          
      <Portal>
       {modalVisibility.cards &&
        <FilterCardMenu animatedStyle={{}} 
                        filterKey={"cards"}
                        isVisible={modalVisibility.cards}
                        onClose={() => handleClose('cards')}/>}
      </Portal>
      <Portal>
        {modalVisibility.cardsSort && 
          <SortCardMenu animatedStyle={{}} 
                        filterKey={"cards"}
                        isVisible={modalVisibility.cardsSort}
                        onClose={() => handleClose('cardsSort')}/>}
      </Portal>
    </>
  );
}


