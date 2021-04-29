import * as React from "react";
export interface StoriesFilterProps {
  searchResultArray: [];
}

const StoriesFilter: React.FC<StoriesFilterProps> = ({ searchResultArray }) => {
  return (
    <div>
      {searchResultArray.map((items: any, index: any) => {
        if (items._tags[0] === "story") {
          return (
            <div key={index}>
              <p>{items.title}</p>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default StoriesFilter;
