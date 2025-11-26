<template>
  <div class="d-flex">
    <v-row>
      <v-col md="6">
        <Pie :data="chartDataPie" :options="chartOptionsPie" />
      </v-col>
      <v-col md="6">
        <div>
          <Bar :data="chartData" :options="chartOptions" />
        </div>
      </v-col>
    </v-row>
  </div>
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

// Dummy data untuk Bar Chart
const chartData = reactive({
  labels: ["Jan", "Feb"],
  datasets: [
    {
      barPercentage: 0.5,
      minBarLength: 1,
      label: "Sales 2025",
      data: [10, 20],
      backgroundColor: "rgba(66,165,245,0.7)",
    },
    // {
    //   label: "Sales 2024",
    //   data: [100],
    //   backgroundColor: "rgba(102,187,106,0.7)",
    // },
  ],
});

// Options
const chartOptions = reactive({
  responsive: true,
  maintainAspectRatio: false,
  //   aspectRatio: 2, // tetap gunakan pengecilan via options
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Sales Growth Comparison",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 300, // 👉 batas maksimal chart
    },
  },
});

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
  //   aspectRatio: 3, // pie butuh ratio lebih kecil supaya pas
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
