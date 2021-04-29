import React from "react";

export interface CommentsFilterProps {
  searchResultArray: [];
}

const CommentsFilter: React.FC<CommentsFilterProps> = ({
  searchResultArray,
}) => {
  return (
    <div>
      {searchResultArray.map((items: any, index: any) => {
        if (items._tags[0] === "comments") {
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

export default CommentsFilter;
