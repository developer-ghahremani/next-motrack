import { FiChevronLeft } from "react-icons/fi";
import { IconBaseProps } from "react-icons";
import React from "react";

interface Props extends IconBaseProps {}

const LeftArrow = (props: Props) => <FiChevronLeft {...props} />;

export default LeftArrow;
