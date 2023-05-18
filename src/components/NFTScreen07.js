import React from "react";
import styled from 'styled-components';

import pic1 from "../images/page01-01.png";
import pic2 from "../images/page01-02.png";

import { AiOutlineArrowRight,AiFillSignal } from "react-icons/ai";
import { FaWifi } from "react-icons/fa";
import { IoBatteryFull } from "react-icons/io5";
// NFTScreen01 大框框
const NFTScreenContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;  
  align-items: center;
  width: 375px;
  height: 812px;
  background: #F9FBFC;
  border-radius: 32px;
  border: 1px solid black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

// 後面陰影
const Shadow = styled.div`
  position: absolute;
  border-radius: 3px;
  width: ${props => props.width};
  height: ${props => props.height};
  left: ${props => props.left};
  top: ${props => props.top};
  background: ${props => props.background};
  filter: blur(40px);
`;

// 圖片元件
const Image = styled.div`
  position:absolute;
  width: ${props => props.width};
  height: ${props => props.height};
  left: ${props => props.left};
  top: ${props => props.top};
  background: ${props => props.background};
  background-size: cover; 
  border-radius: 24px;
  transform: ${props => props.transform};
  ${props => props.shadow && 'box-shadow: 8px -8px 44px rgba(0, 0, 0, 0.15);'}
`;


// 文字元件
const Text = styled.div`
  position: absolute;
  width: ${props => props.width};
  height: ${props => props.height};
  left: ${props => props.left};
  top: ${props => props.top};
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: ${props => props.weight};
  font-size: ${props => props.size};
  line-height: ${props => props.lineHeight};
  color: ${props => props.color};
`;
const ButtonText = styled.div`
  position: relative;
  width: ${props => props.width};
  height: ${props => props.height};
  left: ${props => props.left};
  top: ${props => props.top};
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: ${props => props.weight};
  font-size: ${props => props.size};
  line-height: ${props => props.lineHeight};
  color: ${props => props.color};
`;

const ArrowIcon = styled(AiOutlineArrowRight)`
position: relative;
weight:550;
font-size:15px;
lineHeight:21px;
color:#FFFFFF;
`;

// 按鈕元件
const Button = styled.button`
  position: absolute;
  display: flex;
  justify-content: center; 
  align-items: center;
  padding: 8px 12px;
  left: ${props => props.left};
  top: ${props => props.top};
  gap: 8px;
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${props => props.background};
  border-radius: 64px;
`;


const NFTScreen07 = () => {
    return (
      <NFTScreenContainer>
        <TimeText>9:41</TimeText>

        <Righticon>
        <AiFillSignal/>
        <FaWifi/>
        <IoBatteryFull/>
        </Righticon>
        
        <Shadow 
          width= "40px"
          height= "40px"
          left= "20px"
          top= "180px"
          background= "#F96687"
        />
        <Shadow 
          width= "60px"
          height= "60px"
          left= "250px"
          top= "280px"
          background= "#A23B85"
        />
        <Shadow 
          width= "50px"
          height= "50px"
          left= "250px"
          top= "140px"
          background= "#5AADDC"
        />

        <Image
          width="295.4px"
          height="183.48px"
          left="40px"
          top="165px"
          background={`url(${pic1}), #D9D9D9`}
          borderRadius="24px"
          transform="matrix(0.8, 0.6, -0.58, 0.81, 0, 0)"
        />
        

        <Image
          width="292.89px"
          height="185px"
          left="16px"
          top="272.71px"
          background={`url(${pic2}), #D9D9D9`}
          shadow
          borderRadius="24px"
          />
        <Text
            width="343.01px"
            height="90px"
            weight={600}
            left="16px"
            top="522px"
            size="32px"
            lineHeight="45px"
            color="#101010"
        >
        Hi, friend! get <br /> Collect your NFTs
        </Text>

        <Text
            width="343.01px"
            height="56px"
            weight={400}
            left="16px"
            top="624px"
            size="16px"
            lineHeight="28px"
            color="#939191"
        >
        Discover your various NFT collections from global content creators.
        </Text>

        <Button width="343px" height="54px" background="#0047FF" left="16px"
            top="704px">
            <ButtonText
            width="70px"
            height="21px"
            weight={550}
            size="14px"
            lineHeight="21px"
            color="#FFFFFF"
            >
            Let's Start
            </ButtonText>
            <ArrowIcon/>
        </Button>
    </NFTScreenContainer>
  );
};

export default NFTScreen07;