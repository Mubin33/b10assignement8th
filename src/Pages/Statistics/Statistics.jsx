import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { useLoaderData } from "react-router-dom";
import Title from "../../Components/Title/Title";
import useTitle from "../../UseTitleHook";

const Statistics = () => {
  let data = useLoaderData();
  useTitle("Statistics || Gadget Heaven")

  return (
    <div>
      <div>
        <Title title="Statistics" subTitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"/>
      </div>
      <div className="mt-40 flex justify-center">
        <BarChart
          width={1200}
          height={650}
          data={data} 
          barSize={16}
        >
          <XAxis
          className="text-xs font-thin"
            dataKey="product_title"
            scale="point"
            padding={{ left: 28, right: 28 }}
          />
          <YAxis />
          <Tooltip />
          <Legend /> 
          <Bar dataKey="price" fill="#574fee" background={{ fill: "#e0e0e0" }} />
        </BarChart>
      </div>
    </div>
  );
};

export default Statistics;
