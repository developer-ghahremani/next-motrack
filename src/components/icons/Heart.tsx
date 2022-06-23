import { FaHeart, FaRegHeart } from "react-icons/fa";

import { IconBaseProps } from "react-icons";
import React from "react";

interface Props extends IconBaseProps {
  filled: boolean;
}

const HeartIcon = (props: Props) =>
  props.filled ? <FaHeart {...props} /> : <FaRegHeart {...props} />;

export default HeartIcon;
