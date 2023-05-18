import React from "react";
import styled from 'styled-components';

import pic1 from "../images/page06-01.jpg";
import pic2 from "../images/page06-02.jpg";
import pic3 from "../images/page06-03.jpg";
import pic4 from "../images/page06-04.jpg";
import pic5 from "../images/page06-05.jpg";
import pic6 from "../images/page06-06.jpg";



import { AiFillSignal } from "react-icons/ai";
import { FaWifi } from "react-icons/fa";
import { IoBatteryFull } from "react-icons/io5";
import { TfiAngleLeft } from "react-icons/tfi";
import { FiFilter,FiThumbsUp } from "react-icons/fi";

// NFTScreen01 大框框
const NFTScreenContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw; /* Use viewport width */
  height: 100vh; /* Use viewport height */
  background: #F9FBFC;
  width: 375px;
  height: 812px;

  border-radius: 32px;
  border: 1px solid black;
  overflow: hidden;

  
`;
// 內部外框
const ContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 375px;
  height: 812px;
  background: #F9FBFC;
  border-radius: 32px;
  
`;

// 時間9:41
const TimeText = styled.span`
  position: absolute;
  width: 28.43px;
  height: 11.09px;
  left: 21px;
  top: 17.17px;
  color: #101010;
  font-weight: bold;
`;

// 右上三元素
const Righticon = styled.div`
  position: absolute;
  display: flex;
  gap:5px;
  height: 11.09px;
  right: 21px;
  top: 17.17px;
  color: #101010;
  font-weight: bold;
`;
const Header = styled.div`
  position: relative;
  width: 100%;
  top: 60px;
  color: #101010;
  font-weight: bold;
  
  overflow: hidden; /* 裁剪超出範圍的內容 */
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

// 大活動框 包含數列
const Act = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap:32px;
  top: 120px;
  left: 20px;
  right: 20px;
  color: #101010;
  font-weight: bold;
`;

// 活動框 包含三元素
const Activities = styled.div`
 
  text-align: center;
  justify-content: space-between;
  flex:1;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 16px;
  height: 48px; 
  color: #101010;
  font-weight: bold;
`;
const ActivitiesLast = styled.div`

margin-left: auto;
text-align: center;
align-items: center;
display: flex;
flex-direction: row;
gap: 9px;
height: 24px; 
color: #101010;
font-weight: bold;
`;

// 藍色字
const BlueWord = styled.span`
  color:  #0047FF;

`;


// 圖片元件
const Image = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${props => props.background};
  background-size: cover;
`;


// 文字元件
const Text = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: ${props => props.fontWeight};
  font-size: ${props => props.size};
  line-height: ${props => props.lineHeight};
  color: ${props => props.color};
  
  text-align: left;
`;

const AngleLeft = styled(TfiAngleLeft)`

font-weight: bold;
font-size:15px;

`;

const Filter = styled(FiFilter)`

weight:bold;
font-size:20px;

`;
const ThunmbsUp = styled(FiThumbsUp)`


font-size:20px;

`;



const NFTScreen06 = () => {
    return (
      <NFTScreenContainer>
         <ContainerInner>
      <TimeText>9:41</TimeText>

      <Righticon>
        <AiFillSignal />
        <FaWifi />
        <IoBatteryFull />
      </Righticon>

      <Header>
      <HeaderContent>
        <AngleLeft />
        <Text fontWeight="bold" size="18px" lineHeight="27px" color="#101010"
         >Activity</Text>
        <Filter />
        </HeaderContent>
      </Header>

      <Act>
        <Text fontWeight="bold" size="18px" lineHeight="22px" color="#101010">
          Today
        </Text>
        <Activities>
          <Image background={`url(${pic1}), #D9D9D9`} />
          <Text fontWeight='400' size="16px" lineHeight="24px" color="#101010" >
            Congrats! <BlueWord>Fransisca</BlueWord> 
            <br />
            Bought your product
          </Text>
          <ActivitiesLast>
          <Text fontWeight="bold" size="14px" lineHeight="21px" color="#101010">
            + 1.35 ETH
          </Text>
          </ActivitiesLast>
        </Activities>
        <Activities>
          <Image background={`url(${pic2}), #D9D9D9`} />
          <Text fontWeight="lighter" size="16px" lineHeight="24px" color="#101010" >
            Congrats! <BlueWord>Raihan</BlueWord>
            <br />
            Liked your product
          </Text>
          <ActivitiesLast>
          <Text fontWeight="bold" size="14px" lineHeight="21px" color="#101010">
            + 1
          </Text>
          <ThunmbsUp />
          </ActivitiesLast>
        </Activities>
        <Activities>
          <Image background={`url(${pic3}), #D9D9D9`}/>
          <Text fontWeight="lighter" size="16px" lineHeight="24px" color="#101010" >
            Congrats! <BlueWord>Dainel</BlueWord>
            <br />
            Bought your product
          </Text>
          <ActivitiesLast>
          <Text fontWeight="bold" size="14px" lineHeight="21px" color="#101010">
            + 1.35 ETH
          </Text>
          </ActivitiesLast>
        </Activities>
        <Activities>
          <Image background={`url(${pic4}), #D9D9D9`} />
          <Text fontWeight="lighter" size="16px" lineHeight="24px" color="#101010" >
            Congrats! <BlueWord>Maechel</BlueWord>
            <br />
            Liked your product
          </Text>
          <ActivitiesLast>
          <Text fontWeight="bold" size="14px" lineHeight="21px" color="#101010">
            + 1
          </Text>
          <ThunmbsUp />
          </ActivitiesLast>
        </Activities>
        <Activities>
          <Image background={`url(${pic5}), #D9D9D9`} />
          <Text fontWeight="lighter" size="16px" lineHeight="24px" color="#101010" >
            Congrats! <BlueWord>Jonny</BlueWord>
            <br />
            Bought your product
          </Text>
          <ActivitiesLast>
          <Text fontWeight="bold" size="14px" lineHeight="21px" color="#101010">
            + 1.35 ETH
          </Text></ActivitiesLast>
        </Activities>
        <Text fontWeight="bold" size="18px" lineHeight="22px" color="#101010">
          Tomorrow
        </Text>
        <Activities>
          <Image background={`url(${pic6}), #D9D9D9`} />
          <Text fontWeight="lighter" size="16px" lineHeight="24px" color="#101010" >
            Congrats! <BlueWord>Valentine</BlueWord>
            <br />
            Bought your product
          </Text>
          <ActivitiesLast>
          <Text fontWeight="bold" size="14px" lineHeight="21px" color="#101010">
            + 1.35 ETH
          </Text>
          </ActivitiesLast>
        </Activities>
        <Activities>
          <Image background={`url(${pic1}), #D9D9D9`} />
          <Text fontWeight="lighter" size="16px" lineHeight="24px" color="#101010" >
            Congrats! <BlueWord>Kagura</BlueWord>
            <br />
            Liked your product
          </Text>
          <ActivitiesLast>
          <Text fontWeight="bold" size="14px" lineHeight="21px" color="#101010">
            + 1
          </Text>
          <ThunmbsUp />
          </ActivitiesLast>
        </Activities>
      </Act>
      </ContainerInner>
    </NFTScreenContainer>
  );
};

export default NFTScreen06;