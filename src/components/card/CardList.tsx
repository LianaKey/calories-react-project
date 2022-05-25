import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { IDishes } from "../../interfaces/dishes";
import { useSortBy } from "../../redux/sorting/actions";
import { List, Radio } from "antd";
import { collectCats, sortingProcessor } from "./utils";
import Card from "./Card";

interface CardList extends IDishes {
  sorting: {};
}

export const CardList: React.FC = () => {
  const { dishes, sorting } = useSelector((state: CardList) => state);

  const sort = useSortBy("CATNAME");

  const cats = useMemo(() => collectCats(dishes), [dishes]);
  console.dir(dishes);
  const sorted = useMemo(
    () => sortingProcessor(dishes, sorting),
    [dishes, sorting]
  );

  return (
    <>
      <Radio.Group style={{ marginBottom: "25px" }}>
        {cats.map((cat: string) => (
          <Radio.Button key={cat} value={cat} onClick={() => sort(cat)}>
            {cat}
          </Radio.Button>
        ))}
      </Radio.Group>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        dataSource={sorted}
        renderItem={(dish) => (
          <List.Item key={dish.idMeal}>
            <Card {...dish} />
          </List.Item>
        )}
      />
    </>
  );
};
