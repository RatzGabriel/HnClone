import React, { ReactElement } from "react";
import styled from "styled-components";
import CommentsFilter from "../filter/Comments";
import FilterAll from "../filter/FilterAll";
import StoriesFilter from "../filter/Stories";

export interface SingleArticleProps {
  searchData: [];
  stateFilter: Function;
  filter: string;
}
const SingleArticle: React.FC<SingleArticleProps> = ({
  searchData,
  stateFilter,
  filter,
}): ReactElement => {
  if (searchData === undefined) {
    return <div></div>;
  }

  const searchResultArray = searchData;

  const onSelectChange = (e: string) => {
    stateFilter(e);
  };

  const arrayMap = (filter: string) => {
    if (filter === "all") {
      return FilterAll({ searchData });
    } else if (filter === "stories") {
      StoriesFilter({ searchResultArray });
    } else CommentsFilter({ searchResultArray });
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
