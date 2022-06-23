import Lottie, { LottieOptions } from "lottie-react";

import React from "react";

interface Props extends LottieOptions {}

const IAnim = (props: Props) => <Lottie {...props} />;

export default IAnim;
