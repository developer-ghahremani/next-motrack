import { IconBaseProps } from "react-icons";
import { MdOutlineDelete } from "react-icons/md";
import React from "react";

interface Props extends IconBaseProps {}

const DeleteIcon = (props: Props) => <MdOutlineDelete {...props} />;

export default DeleteIcon;
