import { LeftArrowIcon, RightArrowIcon } from "components/icons";

import React from "react";
import { range } from "lodash";

type Props = {
  total: number;
  perPage: number;
  page: number;
  onChange: (page: number) => void;
};

const Pagination = (props: Props) => {
  const pages = Math.ceil(props.total / props.perPage);

  const handleChange = (p: number) => {
    props.onChange(p);
  };

  return (
    <div className="flex items-center justify-center">
      <RightArrowIcon
        onClick={() => handleChange(props.page - 1)}
        className="cursor-pointer"
      />
      {range(1, pages + 1).map((item, index, array) =>
        item === props.page ||
        item === props.page - 1 ||
        item === props.page + 1 ||
        item > array.length - 1 ||
        item === 1 ? (
          <div
            key={item}
            onClick={() => handleChange(item)}
            className={`w-8 h-8 flex justify-center items-center mx-2 rounded-lg cursor-pointer ${
              item === props.page ? "bg-primary text-white shadow-2xl" : ""
            }`}>
            <p className={`text-lg`}>{item}</p>
          </div>
        ) : (
          <div>
            <p>.</p>
          </div>
        )
      )}
      <LeftArrowIcon
        className="cursor-pointer"
        onClick={() => handleChange(props.page + 1)}
      />
    </div>
  );
};

export default Pagination;
