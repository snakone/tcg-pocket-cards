import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import React from 'react';
import { filter } from 'rxjs';

import { FilterRxjs } from '@/core/rxjs/FilterRxjs';
import { ModalRxjs } from '@/core/rxjs/ModalRxjs';
import { SortRxjs } from '@/core/rxjs/SortRxjs';

import { getFilterIcon, getSortIconStyle, getSortOrderIcon } from '@/shared/definitions/utils/functions';
import { SortData } from '@/shared/definitions/interfaces/global.interfaces';
import { FilterSearch } from '@/shared/definitions/classes/filter.class';
import { Colors } from '@/shared/definitions/utils/colors';

import ImageGridWithSearch from '@/components/ui/CardGrid';
import { CardsScreenModal } from '@/components/modals';
import { SortAndFilterButtons } from '@/components/ui/FilterSortButtons';

export default function CardsScreen() {
  console.log('Cards Screen')
  const [sortData, setSortData] = useState<SortData>();

  function openFilter(): void {
    ModalRxjs.setModalVisibility({key: 'cards', value: true});
  }

  function openSort(): void {
    ModalRxjs.setModalVisibility({key: 'cardsSort', value: true});
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
                            filterPress={openFilter}
                            sortPress={openSort}
                            sortIconStyle={sortData?.iconStyle}
                            sortOrderIcon={sortData?.orderIcon}
                            styles={cardStyles}/>
    </>
  );
}

export const cardStyles = StyleSheet.create({
  container: {
    position: 'absolute', 
    right: 24, 
    bottom: 24,
    width: 50,
    height: 50,
    borderRadius: 48,
    backgroundColor: 'white',
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)',
    opacity: 0.8
  },
  sortIcon: {
    position: 'absolute',
    fontSize: 16,
    backgroundColor: 'rgba(120, 120, 120, .8)',
    borderRadius: 20,
    color: 'white',
    right: -16,
    top: 8.5
  },
  sortIconList: {
    position: 'absolute',
    fontSize: 20,
    borderRadius: 20,
    right: -30,
    top: 9,
    color: Colors.light.text,
  }
});


