/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function TruckCard(props) {
  const { truck, overrides, ...rest } = props;
  return (
    <Flex
      gap="27px"
      direction="column"
      position="relative"
      padding="22px 22px 22px 22px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "TruckCard")}
    >
      <Image
        width="379px"
        height="201px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        src={truck?.truckImage}
        {...getOverrideProps(overrides, "demo_img 1")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="15px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="17.578125px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="254px"
        height="41px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={truck?.truckLocation}
        {...getOverrideProps(overrides, "TruckLocation")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="14.0625px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="185px"
        height="19px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={truck?.truckStatus}
        {...getOverrideProps(overrides, "TruckStatus")}
      ></Text>
    </Flex>
  );
}
