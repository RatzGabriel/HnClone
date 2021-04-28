import React, { useState, useEffect } from "react";
import Api from "./components/api";
import SingleArticle from "./components/singleArticle";

export interface StateServiceProps {
  searchTerm: any;
}

const StateService: React.FC<StateServiceProps> = ({ searchTerm }) => {
  const [searchData, setSearchData] = useState<any>();

  useEffect(() => {
    apiRequest("react");
  }, []);

  useEffect(() => {
    apiRequest(searchTerm);
  }, [searchTerm]);

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
