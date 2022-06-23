import Pagination from "../Pagination";
import React from "react";
import { render } from "react-dom";

type Props = {
  data: any[];
  headerClassName?: string;
  className?: string;
  columns: {
    title: string;
    fieldName: string;
    headerClassName?: string;
    render?: (data: {}, array: any[], index: number) => JSX.Element;
  }[];
  pagination?: {
    total: number;
    perPage: number;
    page: number;
    onChange: (page: number) => void;
  };
};

const ITable = (props: Props) => {
  return (
    <div>
      <div
        className={`flex flex-row justify-between w-full overflow-x-auto mb-4 ${props.className}`}>
        {props.columns.map((column) => (
          <div className="flex flex-col min-w-[10rem]" key={column.fieldName}>
            <p
              className={`mb-6 ${props.headerClassName} ${column.headerClassName}`}>
              {column.title}
            </p>
            {props.data.map((item, index) =>
              column.render ? (
                <div key={index} className="min-h-[2.5rem]">
                  {column.render(item, props.data, index)}
                </div>
              ) : (
                <p key={index} className="min-h-[2.5rem]">
                  {`${item[column.fieldName]}`}
                </p>
              )
            )}
          </div>
        ))}
      </div>
      {props.pagination && <Pagination {...props.pagination} />}
    </div>
  );
};

export default ITable;
