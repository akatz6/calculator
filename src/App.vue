<template>
  <div id="app">
    <div align="center">
      <div id="calculatorLayout">
        <input type="number" id="result" name="result" v-model="value" readonly />
        <img
          v-for="img in imagesData"
          :key="img.alt"
          @click="getFunction(img.click, img.value)"
          :alt="img.alt"
          :src="img.src"
          :style="img.style"
        />
      </div>
    </div>
  </div>
</template>

<script>
import JsonArray from "./components/jsonArray.js";
import Decimal from "../node_modules/decimal.js";

export default {
  name: "App",
  data() {
    return {
      value: 0,
      operation: null,
      firstValue: 0,
      replaceValue: false,
      imagesData: []
    };
  },
  methods: {
    getFunction: function(fn, value) {
      this[fn](value);
    },
    number: function(value) {
      if (this.firstValue !== 0 && this.replaceValue) {
        this.replaceValue = false;
        this.value = value;
        return;
      }
      if (!this.value) {
        this.value = value;
      } else {
        if (Number.isInteger(this.value)) {
          this.value = this.value * 10 + value;
        } else {
          let tempValue = "";
          if (typeof this.value === "string") {
            tempValue = `${parseInt(this.value).toString()}.${value}`;
          } else {
            tempValue = this.value.toString() + value;
          }
          this.value = parseFloat(tempValue);
        }
      }
    },
    clearValue: function() {
      this.value = 0;
    },
    negativePositive: function() {
      this.value *= -1;
    },
    percentage: function() {
      this.value *= 0.01;
    },
    decimal: function() {
      if (Number.isInteger(this.value)) {
        this.value = this.value.toFixed(2);
      }
    },
    operations: function(change) {
      this.operation = change;
      this.firstValue = this.value;
      this.replaceValue = true;
    },
    equal: function() {
      if (typeof this.value === "string") {
        this.value = parseInt(this.value);
      }
      if (typeof this.firstValue === "string") {
        this.firstValue = parseInt(this.firstValue);
      }
      if (this.firstValue !== 0) {
        switch (this.operation) {
          case "divide":
            this.value = parseFloat(
              new Decimal(this.firstValue).div(this.value)
            );
            break;
          case "mutliply":
            this.value *= this.firstValue;
            break;
          case "subtract":
            this.value = parseFloat(
              new Decimal(this.firstValue).sub(this.value)
            );
            break;
          case "add":
            this.value += this.firstValue;
            break;
        }
        this.firstValue = 0;
      }
    }
  },
  beforeMount() {
    this.imagesData = JsonArray;
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  #calculatorLayout {
    width: 30%;
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: repeat(6, 60px);
    border: 1px solid rgba(0, 0, 0, 0.8);
    background-color: #ced5db;
    padding: 10px;

    #result {
      background-color: lightgrey;
      grid-column: 1/5;
      grid-row: 1/2;
      width: 100%;
      padding: 0;
      margin: 0;
      border: 0;
      font-size: 50px;
      text-align: right;
      border: 1px solid rgba(0, 0, 0, 0.8);
    }
    img {
      width: 100%;
      height: 100%;
      border: 1px solid rgba(0, 0, 0, 0.8);
    }
  }
}
</style>
