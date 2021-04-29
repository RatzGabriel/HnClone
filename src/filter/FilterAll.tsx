import React from "react";

export interface FilterAllProps {
  searchData: [];
}

const FilterAll: React.FC<FilterAllProps> = ({ searchData }): any => {
  const t = searchData.map((items: any, index: any) => {
    return (
      <div key={index}>
        <div>
          <p>{items._highlightResult.title.value}</p>
          <p>{items._highlightResult.url.value}</p>
        </div>
        <div>
          <p>{items.points}</p>
          <p>{items.author}</p>
          <p>{items.num_comments}</p>
        </div>
      </div>
    );
  });
  console.log("T", t);
  return t;
};

export default FilterAll;
