import React from "react";

export interface SingleArticleProps {
  searchData: any;
}

const SingleArticle: React.FC<SingleArticleProps> = (props) => {
  const searchResultArray = props.searchData;

  if (searchResultArray === undefined) {
    return <div>Nothing to Show</div>;
  }

  if (searchResultArray.length > 0) {
    return (
      <div>
        <div>
          <select name="" id="">
            <option value="all">All</option>
            <option value="stories">Stories</option>
            <option value="comments">Comments</option>
          </select>
          <select name="" id="">
            <option value="popularity">Popularity</option>
            <option value="date">Date</option>
          </select>
          <select name="" id="">
            <option value="popularity">All time</option>
            <option value="24h">Last 24h</option>
            <option value="week">Past Week</option>
            <option value="month">Past Month</option>
            <option value="year">Past Year</option>
            <option value="custom">Custom range</option>
          </select>
        </div>
        {searchResultArray.map((items: any, index: any) => {
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
        })}
      </div>
    );
  } else {
    return <div>Nothing to show</div>;
  }
};

export default SingleArticle;
