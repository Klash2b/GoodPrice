<template>
  <v-container>
    <!-- <v-img
      @click="
        $router.push({
          name: 'Home',
        })
      "
      class="logo mb-6 mt-6"
      src="GoodPrice-logo-cropped.png"
    /> -->
    <div style="display:flex;align-items:center;" v-if="data.nomProduit">
      <v-img
        class="mr-4"
        :src="data.imageProduit"
        height="96px"
        width="96px"
      ></v-img>
      <span style="font-weight:bold;font-size:18px;">{{
        data.nomProduit
      }}</span>
    </div>

    <div class="mt-6" style="font-weight:bold;font-size:22px;">
      Evolution du prix
      <br />
      {{ data.prixProduit[0].sellers[0].seller }}
      <Vuechart :chartdata="firstData" :options="chartOptions" />
      <span style="font-size:16px;">Prix moyen : {{ firstMoy }} {{ data.deviseProduit }}</span>

      <br /><br />
      <v-divider></v-divider>

      <br />
      {{ data.prixProduit[0].sellers[1].seller }}
      <Vuechart :chartdata="secondData" :options="chartOptions" />
      <span style="font-size:16px;">Prix moyen : {{ secondMoy }} {{ data.deviseProduit }}</span>
    </div>
  </v-container>
</template>

<script>
import Vuechart from "@/components/Vuechart";

export default {
  name: "home",
  components: { Vuechart },
  data() {
    return {
      firstPrices: [],
      secondPrices: [],
      dates: [],
      firstData: {
        labels: [],
        datasets: [
          {
            label: "Prix",
            backgroundColor: "#f87979",
            data: [],
            fill: false,
            borderColor: "#f87979",
          },
        ],
      },
      secondData: {
        labels: [],
        datasets: [
          {
            label: "Prix",
            backgroundColor: "#f87979",
            data: [],
            fill: false,
            borderColor: "#f87979",
          },
        ],
      },
      chartOptions: {
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
    };
  },
  methods: {
    getData() {
      // Construction de l'array de dates
      Array.prototype.forEach.call(this.data.prixProduit, (element) => {
        // console.log(element.date);
        this.dates.push(element.date);
      });
      // console.log(this.dates);
      this.firstData.labels = this.dates;
      this.secondData.labels = this.dates;

      Array.prototype.forEach.call(this.data.prixProduit, (element) => {
        // console.log(element.sellers[0].prix);
        this.firstPrices.push(element.sellers[0].prix);
        this.secondPrices.push(element.sellers[1].prix);
        // Array.prototype.forEach.call(element.sellers, (secondElement) => {
        //   console.log(secondElement);
        // });
      });
      console.log(this.firstPrices);
      console.log(this.secondPrices);
      this.firstData.datasets[0].data = this.firstPrices;
      this.secondData.datasets[0].data = this.secondPrices;

      this.firstMoy = 0;

      Array.prototype.forEach.call(this.firstPrices, (element) => {
        this.firstMoy = this.firstMoy + element;
        console.log(element);
      });
      this.firstMoy = this.firstMoy / this.firstPrices.length
      console.log(this.firstMoy);

      this.secondMoy = 0;
      Array.prototype.forEach.call(this.secondPrices, (element) => {
        this.secondMoy = this.secondMoy + element;
        console.log(element);
      });
      this.secondMoy = this.secondMoy / this.secondPrices.length
      console.log(this.secondMoy);
    },
  },
  mounted() {
    // this.renderChart(data, options);
  },
  beforeMount() {
    this.data = JSON.parse(this.$route.params.id);
    // this.getValues();
    this.getData();
  },
  mounted() {
    // console.log(this.data.prixProduit);
    // console.log(this.data.prixProduit[0].date);
    // console.log(this.data.prixProduit[0].sellers[0].prix);
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img.logo {
  display: inline-block;
  width: 90px;
  padding: 20px;
}
</style>
