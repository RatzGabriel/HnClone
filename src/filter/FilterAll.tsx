import React from "react";
import styled from "styled-components";

export interface FilterAllProps {
  searchData: [];
}

const SingleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
`;

const PComment = styled.p`
  padding-left: 1em;
`;

const FilterAll: React.FC<FilterAllProps> = ({ searchData }): any => {
  return searchData.map((items: any, index: number) => {
    let itemzTitle: string;
    let itemzUrl: string;
    if (items._highlightResult.title === undefined) {
      itemzTitle = "";
    } else {
      itemzTitle = items._highlightResult.title.value;
    }

    if (items._highlightResult.url === undefined) {
      itemzUrl = "";
    } else {
      itemzUrl = items._highlightResult.url.value;
    }

    return (
      <div key={index}>
        <div>
          <p>{itemzTitle}</p>
          <a href={itemzUrl}>{itemzUrl}</a>
        </div>
        <SingleDiv>
          <p>{items.points} Points</p>

          <PComment> User:{items.author} </PComment>
          <PComment>{items.num_comments} Comments</PComment>
        </SingleDiv>
        <hr />
      </div>
    );
  });
};

export default FilterAll;
