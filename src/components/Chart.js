import "chart.js/auto";
import { Chart } from "react-chartjs-2";

const BarChart = ({ rawData }) => {
  // console.log(rawData);
  var y1 = 0,
    y2 = 0,
    y3 = 0;

  for (var i = 1; i < rawData.alcoholData1.length; i = i + 13) {
    y1 = y1 + rawData.alcoholData1[i];
  }
  for (i = 2; i < rawData.alcoholData2.length; i = i + 14) {
    y2 = y2 + rawData.alcoholData2[i];
  }
  for (i = 2; i < rawData.alcoholData3.length; i = i + 14) {
    y3 = y3 + rawData.alcoholData3[i];
  }

  y1 = y1 / rawData.alcoholData1.length;
  y2 = y2 / rawData.alcoholData2.length;
  y3 = y3 / rawData.alcoholData3.length;

  // console.log(y1, y2, y3);

  var xValues = ["ClassA", "ClassB", "ClassC"];
  var yValues = [y1, y2, y3];
  var barColors = ["red", "green", "blue"];

  const data = {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  };

  return (
    <div>
      <Chart
        type={"bar"}
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Alcohol vs Malic Acid",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};

const ScatterChart = ({ rawData }) => {
  var xyValues1 = [];
  var xyValues2 = [];
  var xyValues3 = [];

  for (var i = 10; i < rawData.alcoholData1.length; i = i + 13) {
    xyValues1.push({
      x: rawData.alcoholData1[i],
      y: rawData.alcoholData1[i + 1],
    });
  }

  for (i = 11; i < rawData.alcoholData2.length; i = i + 14) {
    xyValues2.push({
      x: rawData.alcoholData2[i],
      y: rawData.alcoholData2[i + 1],
    });
  }

  for (i = 11; i < rawData.alcoholData3.length; i = i + 14) {
    xyValues3.push({
      x: rawData.alcoholData3[i],
      y: rawData.alcoholData3[i + 1],
    });
  }

  const data = {
    datasets: [
      {
        label: "classA",
        pointRadius: 2,
        pointBackgroundColor: "rgb(0,0,255)",
        backgroundColor: "rgb(0,0,255)",
        data: xyValues1,
        showLine: false,
      },
      {
        label: "classB",
        pointRadius: 2,
        pointBackgroundColor: "rgb(0,255,0)",
        backgroundColor: "rgb(0,255,0)",
        data: xyValues2,
        showLine: false,
      },
      {
        label: "classC",
        pointRadius: 2,
        pointBackgroundColor: "rgb(255,0,0)",
        backgroundColor: "rgb(255,0,0)",
        data: xyValues3,
        showLine: false,
      },
    ],
  };

  return (
    <div>
      <Chart
        type={"scatter"}
        data={data}
        options={{
          scales: {
            x: { type: "linear", position: "bottom" },
          },
        }}
      />
    </div>
  );
};

export { BarChart, ScatterChart };
