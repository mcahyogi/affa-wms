<template>
  <div style="width: 100%">
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Line } from "vue-chartjs";
import { reactive } from "vue";

// Register components Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Dummy data untuk Line Chart
const chartData = reactive({
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Sales 2025",
      data: [120, 150, 180, 140, 220, 260],
      tension: 0.4, // smooth curve
      borderWidth: 2,
      borderColor: "#42a5f5",
      backgroundColor: "rgba(66,165,245,0.3)",
      fill: true,
    },
    {
      label: "Sales 2024",
      data: [100, 130, 160, 120, 200, 230],
      tension: 0.4,
      borderWidth: 2,
      borderColor: "#66bb6a",
      backgroundColor: "rgba(102,187,106,0.3)",
      fill: true,
    },
  ],
});

const chartOptions = reactive({
  responsive: true,
  aspectRatio: 5,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Sales Growth Comparison",
    },
  },
});
</script>
