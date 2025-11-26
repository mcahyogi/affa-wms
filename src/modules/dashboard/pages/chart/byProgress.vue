<template>
  <Pie :data="chartDataPie" :options="chartOptionsPie" />
</template>

<script setup>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
} from "chart.js";
import { Bar, Pie } from "vue-chartjs";
import { reactive } from "vue";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Register Chart.js components untuk Pie chart
ChartJS.register(ArcElement, Title, Tooltip, Legend);


// Dummy data Pie Chart
const chartDataPie = reactive({
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Sales Distribution",
      data: [120, 150, 180, 140, 220, 260],
      backgroundColor: [
        "rgba(66,165,245,0.8)",
        "rgba(102,187,106,0.8)",
        "rgba(255,202,40,0.8)",
        "rgba(239,83,80,0.8)",
        "rgba(171,71,188,0.8)",
        "rgba(38,198,218,0.8)",
      ],
    },
  ],
});

// Options
const chartOptionsPie = reactive({
  responsive: true,
    aspectRatio: 2.1, // pie butuh ratio lebih kecil supaya pas
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Sales Distribution",
    },
  },
});
</script>