<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  data: () => ({

  }),
  props: {
    chartdata: {
      props: {
        chartdata: {
          type: Object,
          default: null,
        },
        options: {
          type: Object,
          default: null,
        },
      },
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: false,
            },
          },
        ],
      },
    },
  },
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>
