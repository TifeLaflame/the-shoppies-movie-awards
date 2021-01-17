import React from 'react';
import { HeadWrap, AppHeading, SubHeading } from './Elements';


const Header = ({ heading, subHeading }) => (
  <HeadWrap>
    <AppHeading>{heading}</AppHeading>
    <SubHeading>{subHeading}</SubHeading>
  </HeadWrap>
);

export default Header;
