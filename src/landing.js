import "./App.css";
import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "./components/shared/header";
import Hero from "./components/hero";
import Section from "./layout/section";
import Wrapper from "./layout/wrapper";
import LaunchCard from "./components/launch-card";
import Pagination from "./components/pagination";

// const MainWrapper = styled.main`
//   display: block;
//   position: relative;
//   width: 100%;

//   .grid {
//     display: flex;
//     flex-wrap: wrap;
//   }
// `;

const MainWrapper = styled.main`
  display: block;
  position: relative;
  width: 100%;

  .grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

const ContentSelector = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  button {
    border: none;
    padding: 10px;
    min-width: 100px;
    margin-right: 10px;
  }
`;

let PageSize = 8;

function Landing() {
  const [data, setData] = useState({ launches: [] });
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://api.spacexdata.com/v4/launches/past?limit=10"
      );

      console.log(result.data);

      setData({ launches: result.data });
      setLoading(false);
    };
    fetchData();
  }, []);

  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.launches.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <MainWrapper>
      <Header />
      <Section>
        <Hero />
      </Section>
      <Section>
        <ContentSelector>
          <button>Launches</button>
          <button>rockets</button>
        </ContentSelector>
      </Section>
      <Section>
        {loading && <div>loading....</div>}

        {!loading && (
          <Wrapper>
            <div className="grid">
              {currentData.map((item, index) => (
                <LaunchCard
                    flag={true}
                    item={item}
                    key={index.toString()}
                    image={item.links.patch.small}
                    title={item.name}
                    description={item.details}
                    youtubeLink={item.links.webcast}
                />
              ))}
            </div>
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={data.launches.length}
              pageSize={PageSize}
              onPageChange={page => setCurrentPage(page)}
            />
          </Wrapper>
        )}
      </Section>
    </MainWrapper>
  );
}

export default Landing;
