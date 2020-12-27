import React from "react";

interface Props {
  data: DataSet;
  infoSet: InfoSet;
  clickFnSet: ClickFnSet[];
}

interface InfoSet {
  [itemIndex: string]: string;
}
interface DataSet {
  [itemIndex: string]: any;
}

interface ClickFnSet {
  name: string;
  argKeyOfDataSet: string | string[];
  clickFn: (data: any | any[]) => void;
}

const ListItem = ({ data, infoSet, clickFnSet }: Props) => {
  const InfoArr = Object.keys(infoSet);

  return (
    <div>
      <ul>
        {InfoArr.map((list) => {
          return (
            <p key={list}>
              {infoSet[list]} : {data[list] ? data[list] : ""}
            </p>
          );
        })}
      </ul>
      <div>
        {clickFnSet.map(({ argKeyOfDataSet, clickFn, name }) => {
          return (
            <button
              key={name}
              onClick={() => {
                if (Array.isArray(argKeyOfDataSet)) {
                  const argArr = argKeyOfDataSet.map((li) => data[li]);
                  clickFn.apply(null, [argArr]);
                } else {
                  clickFn(data[argKeyOfDataSet]);
                }
              }}
            >
              {name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ListItem;
