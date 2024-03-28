import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { getStoreLocal } from "../../utils/localStorage";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "blue"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PageRead = () => {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    const getReadLocal = getStoreLocal();
    setBookData(getReadLocal);
  }, []);

  return (
    <>
     { bookData.length > 0 &&
    <div className="md:w-[90%] h-[300px] md:h-[500px] flex justify-center items-center mx-auto bg-[rgba(19,19,19,0.03)] rounded-2xl">
    
    <ResponsiveContainer>
     
        <BarChart
          width={1000}
          height={400}
          data={bookData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookName" />
          <YAxis />
          <Tooltip></Tooltip>
          <Bar
            dataKey="totalPages"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {bookData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
        </ResponsiveContainer>
    </div>
      }
    </>
  );
};

export default PageRead;
