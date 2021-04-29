import React, { useState } from "react";
import styled from "styled-components";
import FilterAll from "../filter/FilterAll";

const Div = styled.div`
  background-color: red;
`;

const PTitle = styled.p`
  font-size: 12px;
`;

export interface SingleArticleProps {
  searchData: [];
}
const SingleArticle: React.FC<SingleArticleProps> = ({ searchData }) => {
  if (searchData === undefined) {
    return null;
  }

  const searchResultArray = searchData;
  const [filter, setFilter] = useState("all");

  const onSelectChange = (e: string) => {
    e === "all"
      ? setFilter("all")
      : e === "stories"
      ? setFilter("stories")
      : setFilter("comments");
  };

  const arrayMap = (filter: string) => {
    if (filter === "all") {
      // return all

      return FilterAll({ searchData });
    } else if (filter === "stories") {
      return (
        <div>
          {searchResultArray.map((items: any, index: any) => {
            if (items._tags[0] === "story") {
              return (
                <div key={index}>
                  <p>{items.title}</p>
                </div>
              );
            }
          })}
        </div>
      );
    } else if (filter === "comments") {
      return (
        <div>
          {searchResultArray.map((items: any, index: any) => {
            if (items._tags[0] === "comments") {
              return (
                <div key={index}>
                  <p>{items.title}</p>
                </div>
              );
            }
          })}
        </div>
      );
    }
  };

  if (searchResultArray.length > 0) {
    return (
      <div>
        <div>
          <select
            onChange={(e) => onSelectChange(e.target.value)}
            name=""
            id=""
          >
            <option value="all">All</option>
            <option value="stories">Stories</option>
            <option value="comments">Comments</option>
          </select>
        </div>
        {arrayMap(filter)}
      </div>
    );
  } else {
    return <div>Nothing to show</div>;
  }
};

export default SingleArticle;
