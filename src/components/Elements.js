import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
`;
export const HeadWrap = styled.div`
  font-family: 'Public Sans', sans-serif;
  text-align: center;
  margin-top: 20px;
  color: #FDFFFF;
`;

export const AppHeading = styled.h1`
  font-size: 2em;
  padding-top: 20px;
`;

export const SubHeading = styled.h3`
  font-weight:400;
  padding-top: 10px;
  padding-bottom: 15px;
`;

export const InputWrap = styled.div`
  width: 800px;
  margin: 0 auto;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 16px 34px;
  line-height: 16px;
  font-size: 16px;
  border-radius: 40px;
  border: 2.5px solid #3bc0d0;
  color: #3bc0d0;
  font-family: 'Lato', sans-serif;
  background: #FDFFFF; 
  background-image: url(/the-shoppies-movie-awards/images/search.png);
  background-repeat: no-repeat;
  background-position: 1.5%; 
  background-size: 24px 24px;
  padding-left: 42px;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #54B3BE;
    opacity: 0.9;
  }
  &:focus {
    outline: none;
  }
`;

export const MovieWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 2.5px solid #3bc0d0;
  border-radius: 10px; 
  margin-top: 15px;
`;

export const Img = styled.img`
  max-width: 100%;
  height: 320px;
  text-align: center;
  vertical-align: middle;
`;

export const Div = styled.div`
  width: 48%;
  padding: 20px;
`;

export const SectionHeading = styled.h4`
  color: #FDFFFF;
  font-family: 'Public Sans', sans-serif;
  font-weight: 500;
  font-size:1.5em;
  padding: 0 15px; 
`;

