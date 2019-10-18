import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import NavBar from "../../../common/components/Navbar";
import background from "../../../assets/fullHdBackground.jpg";
import News from "../../../common/components/News";
import { downloadInstance } from "../../../common/reducers/actions";

const Background = styled.div`
  background-image: url("${background}");
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

const NewsContainer = styled.div`
  height: 28%;
  position: absolute;
  top: Calc(${props => props.theme.sizes.height.navbar} + 10px);
  left: 50%;
  margin-left: -415px;
  margin-bottom: 10px;
`;

// background: ${props => props.theme.palette.secondary.main};
const InstancesContainer = styled.div`
  width: 830px;
  min-height: 180px;
  height: 58%;
  position: absolute;
  bottom: 20px;
  left: 50%;
  right: 10px;
  margin-left: -415px;
  background: ${props => props.theme.palette.grey[800]};
`;

const Home = () => {
  const dispatch = useDispatch();
  const news = useSelector(state => state.news);

  return (
    <Background>
      <NavBar />
      <NewsContainer>
        <News news={news} />
      </NewsContainer>
      <InstancesContainer />
      <button
        type="button"
        onClick={() =>
          dispatch(downloadInstance("test", "1.6.4", "forge-9.11.1.1345"))
        }
      >
        Compute
      </button>
    </Background>
  );
};

export default Home;
