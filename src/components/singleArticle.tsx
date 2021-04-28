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
    return searchResultArray.map((items: any) => {
      return (
        <div>
          <div>
            <p>{items._highlightResult.title.value}</p>
            <p>{items._highlightResult.url.value}</p>
          </div>
          ;
          <div>
            <p>{items.points}</p>
            <p>{items.author}</p>
            <p>{items.num_comments}</p>
          </div>
          ;
        </div>
      );
    });
  } else {
    return <div>Nothing to show</div>;
  }
};

export default SingleArticle;
