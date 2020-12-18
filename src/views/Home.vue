<template>
  <v-container>
    <v-img class="logo mb-6 mt-6" src="GoodPrice-logo-cropped.png" />
    <!-- <h4>{{$t("title")}}</h4> -->
    <!-- <v-btn @click="openMenu" class="mt-10">{{$t("showSample")}}</v-btn> -->
    <!-- <v-btn @click="myFunc" class="mt-10">Aller vers Vibration</v-btn> -->
    <v-form ref="form" v-model="form" class="pa-4 pt-6">
      <v-autocomplete
        v-model="select"
        :items="data"
        item-text="nomProduit"
        item-value="idProduit"
        return-object
        label="Rechercher un produit"
        prepend-icon="search"
        outlined
        color="primary"
        style="min-height: 56px"
      ></v-autocomplete>
    </v-form>

    <div
      @click="
        $router.push({
          name: 'Product',
          params: { id: JSON.stringify(select) },
        })
      "
      style="display:flex;align-items:center;"
      v-if="select.nomProduit"
    >
      <v-img
        class="mr-2"
        :src="select.imageProduit"
        height="64px"
        width="64px"
      ></v-img>
      <span class="mr-6">{{ select.nomProduit }}</span>
      <span>{{ select.prixProduit[0].sellers[0].prix }}{{ select.deviseProduit }}</span>
    </div>

    <Vuechart />
  </v-container>
</template>

<script>
import jsonData from "../../public/data_5.json";

export default {
  name: "home",
  data() {
    return {
      select: "",
      data: "",
    };
  },
  methods: {
    myFunc() {
      // alert(this.myText);
      this.$router.push("/vibration");
    },
    openMenu() {
      // When user tap the button dispatch an event into the dom.
      // Its will trigger the drawer Open event in (componnents/Drawer.vue)
      document.dispatchEvent(new CustomEvent("toggleDrawer", {}));
    },
  },
  beforeMount() {
    this.data = jsonData;
  },
  mounted() {
    console.log(this.data[0].prixProduit);
  },
};
</script>

<style scoped>
.container {
  align-items: flex-start !important;
  justify-content: flex-start !important;
}
</style>
