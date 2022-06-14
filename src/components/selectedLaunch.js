import React from "react";
import { useLocation } from 'react-router-dom';
import Wrapper from "../layout/wrapper";
import LaunchCard from "../components/launch-card";

function SelectedLaunch(props) {
  const {state} = useLocation();
  const { data } = state;
  const selectData = JSON.parse(data);
  return (
    <>
    <Wrapper>
      <div>
        <LaunchCard
            flag={false}
            item={''}
            image={selectData.links.patch.small}
            title={selectData.name}
            description={selectData.details}
            youtubeLink={selectData.links.webcast}
          />
      </div>
    </Wrapper>
      {/* <div>{data}</div> */}
    </>
  );
}

export default SelectedLaunch;
