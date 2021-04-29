import React from "react";

export interface FilterAllProps {
  searchData: [];
}

const FilterAll: React.FC<FilterAllProps> = ({ searchData }): any => {
  return searchData.map((items: any, index: any) => {
    let itemzTitle;
    let itemzUrl;
    if (items._highlightResult.title === undefined) {
      itemzTitle = "";
    } else {
      itemzTitle = items._highlightResult.title.value;
    }

    if (items._highlightResult.url === undefined) {
      itemzTitle = "";
    } else {
      itemzTitle = items._highlightResult.url.value;
    }

    return (
      <div key={index}>
        <div>
          <p>{itemzTitle}</p>
          <p>{itemzUrl}</p>
        </div>
        <div>
          <p>{items.points}</p>
          <p>{items.author}</p>
          <p>{items.num_comments}</p>
        </div>
      </div>
    );
  });
};

export default FilterAll;
