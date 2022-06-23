import { IconBaseProps } from "react-icons";
import React from "react";
import { RiMenuFoldFill } from "react-icons/ri";

interface Props extends IconBaseProps {}

const FoldMenu = (props: Props) => <RiMenuFoldFill {...props} />;

export default FoldMenu;
