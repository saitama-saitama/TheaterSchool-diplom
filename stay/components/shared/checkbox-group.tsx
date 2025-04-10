'use client';

import React from 'react';
import { FilterCheckboxProps, FilterCheckbox } from '@/components/shared/filters-checkbox';
import { Input } from '@/components/ui/input';
import "/styles/filters.scss";
import { Skeleton } from '../ui/skeleton';

type Item = FilterCheckboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  loading?: boolean; 
  searchInputPlaceholder?: string;
  onClickCheckbox?: (id: string) => void;
  defaultValue?: string[];
  selectedIds?: Set<string>;
  className?: string;
  name?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems = [], 
  limit = 6,
  searchInputPlaceholder = 'Поиск...',   
  className,
  loading,
  onClickCheckbox,
  selectedIds,
  name,
}) => {
  const [showAll, setShowAll] = React.useState(false);

  const combinedItems = React.useMemo(() => {
    const allItems = [...defaultItems, ...items];
    const uniqueItems = allItems.filter((item, index, self) =>
      index === self.findIndex((i) => i.value === item.value)
    );
    return uniqueItems;
  }, [defaultItems, items]);

  const listRef = React.useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = React.useState<string>('auto');
  const [searchValue, setSearchValue] = React.useState("");

  const onChangeSearchInput = (value: string) => {
    setSearchValue(value);
  };

  React.useEffect(() => {
    if (listRef.current) {
      if (showAll) {
        setMaxHeight(`${listRef.current.scrollHeight}px`);
      } else {
        const defaultItemsHeight = Array.from(listRef.current.children)
          .slice(0, limit)
          .reduce((acc, child) => acc + (child as HTMLElement).offsetHeight, 0);
        setMaxHeight(`${defaultItemsHeight}px`);
      }
    }
  }, [showAll, items, defaultItems, limit]);

  if (loading) {
    return (
      <div className={className}>
        <p className='text-[24px] mb-5 text-white'>{title}</p>
        {...Array(limit).fill(0).map((_, index) => (
          <Skeleton key={index} className='h-6 mb-[7px] bg-white rounded-[5px]'/>
        ))}
      </div>
    );
  }

  const list = showAll
    ? combinedItems.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase()))
    : (defaultItems.length > 0 ? defaultItems : items).slice(0, limit);

  return (
    <div className={className}>
      <p className='text-[24px] mb-5 text-white'>{title}</p>

      {showAll && (
        <div className='mb-5'>
          <Input
            onChange={(e) => onChangeSearchInput(e.target.value)}
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
          />
        </div>
      )}

      <div
        ref={listRef}
        style={{ maxHeight }}
        className='flex flex-col pr-2 overflow-hidden transition-all duration-1000 ease-in-out mb-[8px]'
      >
        {list.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={selectedIds?.has(item.value)}
            onCheckedChange={() => onClickCheckbox?.(item.value)}
            name={name}
          />
        ))}
      </div>

      {defaultItems.length > 0 && (
        <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
          <button onClick={() => setShowAll(!showAll)} className='filters-btn pt-3'>
            {showAll ? "Скрыть" : "+ Показать все"}
          </button>
        </div>
      )}
    </div>
  );
};