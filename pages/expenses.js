import { Scatter } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "chartjs-adapter-luxon";
import { getAllExpenses } from "../services/expensesService";

export async function getServerSideProps() {
  const expenses = await getAllExpenses();
  return {
    props: { expenses: expenses },
  };
}

export default function Expenses({ expenses }) {
  console.log("TEST", expenses);

  const data = expenses.map((expense) => ({
    x: new Date(expense.date),
    y: expense.amount,
  }));
  console.log(data);

  const sortedData = data.sort(
    (dataPointPre, dataPointPost) =>
      Number(dataPointPre.x) - Number(dataPointPost.x)
  );

  console.log("SORTED", sortedData);

  const plotOptions = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Kosten",
        },
      },
      x: {
        type: "time",
        // time: {
        //   // Luxon format string
        //   tooltipFormat: "DD T",
        // },
        title: {
          display: true,
          text: "Datum",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const plotData = {
    datasets: [
      {
        data: data,
        // data: [
        //   { x: new Date("2015-03-01T13:03:00Z"), y: 25 },
        //   { x: new Date("2015-03-14T13:03:00Z"), y: 5 },
        //   { x: new Date("2015-03-20T13:03:00Z"), y: 10 },
        //   { x: new Date("2015-03-16T13:03:00Z"), y: 20 },
        // ],
        backgroundColor: "#000000",
        borderColor: "#000000",
        borderWidth: 1,
        showLine: true,
      },
    ],
  };

  return <Scatter options={plotOptions} data={plotData} />;
}
