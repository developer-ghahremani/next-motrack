import { IconBaseProps } from "react-icons";
import { IoIosClose } from "react-icons/io";
import React from "react";

interface Props extends IconBaseProps {}

const CloseIcon = (props: Props) => <IoIosClose {...props} />;

export default CloseIcon;
