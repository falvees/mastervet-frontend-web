import { Grid } from '@material-ui/core';

import styled from 'styled-components';

export const Container = styled(Grid)`
  display: block;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  /* padding-top: 1rem; */
`;

export const ContainerBody = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 120px;
  & hr {
    height: 200px;
    border-left: 2px solid #d2d3d5;
    margin: 0 5px;
  }
`;

export const ContainerTopProfile = styled(Grid)`
  display: flex;
  width: 100%;
  height: 200px;
  background-color: #17a0ae;
  position: relative;

  & img {
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
`;

export const ContainerDetail = styled.div`
  display: flex;
  width: 25%;
  height: 300px;
  background-color: #fff;
  /* margin-top: 120px; */
  top: 300px;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  padding: 0 15px;
  & p:first-child {
    width: 100%;
    display: flex;
    font-weight: 800;
    font-size: 22px;
    /* margin-left: 2%; */
  }
`;
export const ContainerPets = styled.div`
  display: flex;
  width: 25%;
  height: 300px;
  background-color: #fff;
  /* margin-top: 120px; */
  top: 300px;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  padding: 0 15px;
  & p:first-child {
    width: 100%;
    display: flex;
    font-weight: 800;
    font-size: 22px;
    /* margin-left: 2%; */
  }
`;

export const ContainerVourchers = styled.div`
  display: flex;
  width: 45%;
  height: 300px;
  background-color: #fff;
  /* margin-top: 120px; */
  display: flex;
  flex-wrap: wrap;

  & p:first-child {
    width: 100%;
    display: flex;
    font-weight: 800;
    font-size: 22px;
    margin-left: 2%;
  }
`;

export const ContainerListVouchers = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  background-color: #fff;
  margin-top: 5px;
  padding: 0 15px;
  align-items: center;
  justify-content: center;
`;

export const ImageProfile = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  transform: translateY(50%);
  left: 30px;
  text-align: center;

  & input[type='file'] {
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    opacity: 0;
    top: 0;
    bottom: 0;
    cursor: pointer;
    z-index: 2;
    border-radius: 50%;
  }
  & figure {
    position: relative;
    width: 150px;
    height: 150px;
  }
  & figure > img {
    cursor: pointer;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border-radius: 100%;
    border: 2px solid transparent;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
    transition: all ease-in-out 0.3s;
    object-fit: cover;
  }
  & figure > img:hover {
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
  }
  & figcaption {
    cursor: pointer;
    position: absolute;
    top: 0px;
    width: inherit;
    height: inherit;
    border-radius: 100%;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0);
    transition: all ease-in-out 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover figcaption {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.5);
  }
  & figcaption > svg {
    width: 50px;
    height: 50px;
    color: #fff;
  }
`;

export const DataProfile = styled.div`
  background-color: #fff;
  position: absolute;
  bottom: 0;
  transform: translateY(100%);
  left: 210px;
  padding: 20px;
  & p:first-child {
    font-weight: bold;
    font-size: 1.2em;
  }
`;

export const Avatar = styled.img`
  height: 35px;
  object-fit: cover;
  /* & img[alt='petdoctor'] {
    height: 30px;
  } */
`;

export const EventsDetais = styled.div`
  width: 100%;
  height: 70px;
  margin-top: 10px;
  border: 1.5px solid #d2d3d5;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  background-color: #fff;
  align-items: center;
  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 20%);
  }
  & p {
    text-align: left;
    font-weight: 400;
    margin-left: 20px;
    & span {
      font-size: 20px;
      font-weight: 700;
    }
  }
`;
export const PetsDetails = styled.div`
  width: 100%;
  height: 70px;
  margin-top: 10px;
  /* border: 1.5px solid #d2d3d5; */
  display: flex;
  justify-content: center;
  border-radius: 10px;
  background-color: #fff;
  align-items: center;
  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 20%);
  }
  & p {
    text-align: left;
    font-weight: 400;
    margin-left: 20px;
    & span {
      font-size: 20px;
      font-weight: 700;
    }
  }
`;

export const EventsDescription = styled.div`
  width: 60%;
  height: 50px;
  margin-top: 10px;
  background-color: #fff;
  align-items: center;
  justify-content: space-evenly;
  display: flex;
  & p {
    font-weight: bold;
  }
`;

export const Form = styled.form`
  text-align: center;
  width: 100%;
`;
