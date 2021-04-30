import React, { ReactElement } from "react";

export interface CommentsFilterProps {
  searchResultArray: [];
}

const CommentsFilter: React.FC<CommentsFilterProps> = ({
  searchResultArray,
}): ReactElement => {
  return (
    <div>
      {searchResultArray.map((items: any, index: number) => {
        console.log("izems", items);

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
