import React from "react";
import styled from 'styled-components';

import pic1 from "../images/page06-01.jpg";
import pic2 from "../images/page07-01.jpg";
import pic3 from "../images/page07-02.jpg";

import { AiFillSignal } from "react-icons/ai";
import { FaWifi } from "react-icons/fa";
import { IoBatteryFull } from "react-icons/io5";
import { TfiAngleLeft } from "react-icons/tfi";
import { FiFilter,FiThumbsUp } from "react-icons/fi";
import { AiOutlineHome, AiFillCompass, AiOutlinePlusSquare,  } from "react-icons/ai";
import { HiOutlineSquares2X2} from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";



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



const Squares2X2 = styled(HiOutlineSquares2X2)`

weight:bold;
font-size:20px;

`;

const Home = styled(AiOutlineHome)`
weight:bold;
font-size:20px;
`;


const Compass = styled(AiFillCompass)`
weight:bold;
font-size:20px;
`;

const PlusSquare = styled(AiOutlinePlusSquare)`
weight:bold;
font-size:20px;
`;

const ShoppingBag = styled(HiOutlineShoppingBag)`
weight:bold;
font-size:20px;
`;

const Settings = styled(IoSettingsOutline)`
weight:bold;
font-size:20px;
`;


const Filter = styled(FiFilter)`
weight:bold;
font-size:20px;
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


// Header
const Header = styled.div`
  position: absolute;
  width: 100%;
  color: #101010;
  font-weight: bold;
  top :80px;
  
  overflow: hidden; /* 裁剪超出範圍的內容 */
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

// HeaderContent中文字
const HeaderContent_text = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: ${props => props.fontWeight};
  font-size: ${props => props.size};
  line-height: ${props => props.lineHeight};
  color: ${props => props.color};
  
  text-align: left;
`;

// HeaderContent中兩個icon並列
const HeaderContent_twoIcon = styled.div`
display: flex;
flex-direction: row;
justify-content: cneter;
align-items: center;
padding: 0px;
gap: 12px;

width: 56px;
height: 24px;
`;


// Card
const Card = styled.div`
  position: absolute;
  width: 80%;
  height: 340px;
  color: #101010;
  font-weight: bold;
  top: 200px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  align-items: center;
  padding: 0px;
  gap: 18px;

  overflow: hidden; /* 裁剪超出範圍的內容 */
`;


const Card_img = styled.div`
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


// Card中照片下的文字塊
const Card_content_text = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 12px;
`;

// Card中照片下的文字塊
const Card_text = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: ${props => props.fontWeight};
  font-size: ${props => props.size};
  line-height: ${props => props.lineHeight};
  color: ${props => props.color};
  
  text-align: left;
`;


// Card中的活動框 包含三元素
// Card中照片下的文字塊
const Card_people_and_button = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: left
  align-items: center;
  padding: 0px;
  gap: 12px;
`;

const Card_people = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: left
  align-items: center;
  padding: 0px;
  gap: 12px;
`;


const Card_people_img = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  left: ${props => props.left};
  top: ${props => props.top};
  background: ${props => props.background};
  background-size: cover; 
  border-radius: 24px;
  align-self: center; 
  transform: ${props => props.transform};
  ${props => props.shadow && 'box-shadow: 8px -8px 44px rgba(0, 0, 0, 0.15);'}
`;


const Card_people_name = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: ${props => props.fontWeight};
  font-size: ${props => props.size};
  line-height: ${props => props.lineHeight};
  color: ${props => props.color};
  
  text-align: left;
`;



// 按鈕元件
const Button = styled.button`
  display: flex;
  justify-content: center; 
  align-items: center;
  align-self: center; 
  padding: 8px 12px;
  left: ${props => props.left};
  top: ${props => props.top};
  gap: 8px;
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${props => props.background};
  border-radius: 64px;
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


// 圖片元件
const Image = styled.div`
  position: absolute;
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


// 底下button列
const Buttom = styled.div`
  position: absolute;
  width: 100%;
  height: 70px;
  color: #101010;
  font-weight: bold;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  
  overflow: hidden; /* 裁剪超出範圍的內容 */

  background: #FFFFFF;
  box-shadow: 0px -1px 36px rgba(0, 0, 0, 0.1);
`;

const ButtomContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  align-self: center;
  overflow: hidden; /* 裁剪超出範圍的內容 */ 
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
        
        <Text
            width="89px"
            height= '27px'
            left = '143px'
            top = '50px'
            font-family= 'Poppins'
            font-style = 'normal'
            weight={600}
            size="18px"
            color="#101010"
        >
        Discovery
        </Text>

        <Header >
        <HeaderContent>
          <HeaderContent_text fontWeight="bold" size="18px" lineHeight="27px" color="#101010"
          >New Update</HeaderContent_text>
          <HeaderContent_twoIcon>
            <Squares2X2 />
            <Filter />
          </HeaderContent_twoIcon>
        </HeaderContent>
        </Header>

        <Card>
          <Card_img
            width="309px"
            height="200px"
            background={`url(${pic2}), #D9D9D9`}
            shadow
            borderRadius="16px"
          />
          
          <Card_content_text>
            <Card_text fontWeight="bold" size="18px" lineHeight="27px" color="#101010"
            >New Update</Card_text>
            <Card_text fontWeight="bold" size="18px" lineHeight="27px" color="#101010"
            >0.365 ETH</Card_text>
          </Card_content_text>
          
          <Card_people_and_button>
            <Card_people>
                <Card_people_img 
                  width="40px"
                  height="40px"
                  background={`url(${pic1}), #D9D9D9`}
                  shadow
                  borderRadius="16px" 
                />
                <Card_people_name fontWeight='600' size="16px" lineHeight="24px" color="#101010" >
                  Selena Robert
                  <br /><Card_people_name fontWeight='200' size="12px" lineHeight="24px" color="#101010" >
                  Creator</Card_people_name>
                </Card_people_name>
            </Card_people>
            
            <Button width="112px" height="44px" background="#0047FF" left="16px">
              <ButtonText
              width="70px"
              height="21px"
              weight={550}
              size="14px"
              lineHeight="21px"
              color="#FFFFFF"
              >
              Place Bid
              </ButtonText>
            </Button>
          </Card_people_and_button>
        </Card>

        <Image
          top='600px'
          width="309px"
          height="200px"
          background={`url(${pic3}), #D9D9D9`}
          shadow
          borderRadius="16px"
        />

      <Buttom >
        <ButtomContent>
          <Home />
          <Compass />
          <PlusSquare />
          <ShoppingBag />
          <Settings />
        </ButtomContent>
        </Buttom>

    </NFTScreenContainer>
  );
};

export default NFTScreen07;