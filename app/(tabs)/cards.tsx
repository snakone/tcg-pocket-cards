import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import React from 'react';
import { filter } from 'rxjs';

import { FilterRxjs } from '@/core/rxjs/FilterRxjs';
import { ModalRxjs } from '@/core/rxjs/ModalRxjs';
import { SortRxjs } from '@/core/rxjs/SortRxjs';

import { getFilterIcon, getSortIconStyle, getSortOrderIcon } from '@/shared/definitions/utils/functions';
import { SortItem } from '@/shared/definitions/interfaces/layout.interfaces';
import { SINGLE_SORT_DATA } from '@/shared/definitions/utils/constants';
import { FilterSearch } from '@/shared/definitions/classes/filter.class';
import { Colors } from '@/shared/definitions/utils/colors';

import ImageGridWithSearch from '@/components/ui/CardGrid';
import { CardsScreenModal } from '@/components/modals';
import { SortAndFilterButtons } from '@/components/ui/FilterSortButtons';

export default function CardsScreen() {
  console.log('Cards Screen')
  const [sort, setSort] = useState<SortItem>(SINGLE_SORT_DATA);
  const [_, setFilterSearch] = useState<FilterSearch>(new FilterSearch());
  const [sortIconStyle, setSortIconStyle] = useState<any>();
  const [sortOrderIcon, setSortOrderIcon] = useState<any>();
  const [filterIcon, setFilterIcon] = useState<any>();

  function openFilter(): void {
    ModalRxjs.setModalVisibility({key: 'cards', value: true});
  }

  function openSort(): void {
    ModalRxjs.setModalVisibility({key: 'cardsSort', value: true});
  }

  useEffect(() => {
    const sub = FilterRxjs.getFilter('cards')
      .subscribe(res => {
        const value = Object.assign(Object.create(Object.getPrototypeOf(res)), res);
        setFilterIcon(getFilterIcon(value));
        setFilterSearch(value as FilterSearch)
      });

     return (() => {
      if (sub) sub.unsubscribe();
     })
  }, []);

  useEffect(() => {
    const sub = SortRxjs.getSortActive('cards')
     .pipe(filter(Boolean)).subscribe(res => 
      (
        setSort(res), 
        setSortIconStyle(getSortIconStyle(res)),
        setSortOrderIcon(getSortOrderIcon(res))
      ));

     return (() => {
      if (sub) sub.unsubscribe();
     })
  }, []);

  return (
    <>
      <ImageGridWithSearch modal={<CardsScreenModal></CardsScreenModal>}
                           modalTitle='cards'
                           title='card_collection'
                           filterKey={"cards"}/>

      <SortAndFilterButtons sort={sort}
                            filterIcon={filterIcon}
                            filterPress={openFilter}
                            sortPress={openSort}
                            sortIconStyle={sortIconStyle}
                            sortOrderIcon={sortOrderIcon}
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


