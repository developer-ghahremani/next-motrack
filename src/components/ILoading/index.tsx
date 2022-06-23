import * as loadingAnim from "assets/anim/loading.json";

import { IAnim } from "components/general";
import React from "react";

type Props = { size?: number };
const ILoading = ({ size = 16 }: Props) => {
  return (
    <IAnim animationData={loadingAnim} className={`w-${size} h-${size}`} loop />
  );
};

export default ILoading;
