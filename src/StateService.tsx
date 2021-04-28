import React, { useState, useEffect } from "react";
import Api from "./components/api";
import SingleArticle from "./components/singleArticle";
import Header from "./elements/Header";

export interface StateServiceProps {}

const StateService: React.FC<StateServiceProps> = () => {
  const [searchData, setSearchData] = useState<any>();

  useEffect(() => {
    apiRequest("react");
  }, []);

  const apiRequest = async (searchTerm: string) => {
    const getSearchRequestData = await Api(searchTerm);
    setSearchData(getSearchRequestData.data.hits);
  };

  return (
    <div>
      <SingleArticle searchData={searchData} />
    </div>
  );
};

export default StateService;
