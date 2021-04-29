import React, { useState, useEffect } from "react";
import Api from "./components/api";
import SingleArticle from "./components/singleArticle";

export interface StateServiceProps {
  searchTerm: string;
}

const StateService: React.FC<StateServiceProps> = ({ searchTerm }) => {
  const [searchData, setSearchData] = useState<[]>([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    apiRequest("react");
  }, []);

  useEffect(() => {
    apiRequest(searchTerm);
  }, [searchTerm]);

  const stateFilter = (e: any) => {
    setFilter(e);
  };

  const apiRequest = async (searchTerm: string) => {
    const getSearchRequestData = await Api(searchTerm);
    if (getSearchRequestData !== undefined) {
      setSearchData(getSearchRequestData.data.hits);
    }
  };

  return (
    <div>
      <SingleArticle
        stateFilter={stateFilter}
        searchData={searchData}
        filter={filter}
      />
    </div>
  );
};

export default StateService;
