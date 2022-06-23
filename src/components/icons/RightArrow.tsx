import { FiChevronRight } from "react-icons/fi";
import { IconBaseProps } from "react-icons";
import React from "react";

interface Props extends IconBaseProps {}

const RightArrow = (props: Props) => <FiChevronRight {...props} />;

export default RightArrow;
