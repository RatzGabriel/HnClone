import React, { useState } from "react";

export interface SingleArticleProps {
  searchData: any;
}

const SingleArticle: React.FC<SingleArticleProps> = (props) => {
  const searchResultArray = props.searchData;
  const [filter, setFilter] = useState("all");

  const onSelectChange = (e: any) => {
    e === "all"
      ? setFilter("all")
      : e === "stories"
      ? setFilter("stories")
      : setFilter("comments");
  };

  const arrayMap = (filter: any) => {
    if (filter === "all") {
      return searchResultArray.map((items: any, index: any) => {
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

  if (searchResultArray === undefined) {
    return <div>Nothing to Show</div>;
  }

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
