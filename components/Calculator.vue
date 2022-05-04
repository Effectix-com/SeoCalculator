<template>
  <div class="flex flex-col items-center ">
    <div class="w-full flex flex-col items-center bg-effectix-200 text-white">
      <h2 class="text-5xl mt-4 mb-4 text-center">Kalkulačka výnosů a návratnosti SEO</h2>
      <div class="flex flex-col w-4/5 md:w-2/5 p-2">
        <div class="flex items-center justify-between gap-2 mt-8">
          <span class="pr-8 text-xl">Hledanost klíčového slova za 1 měsíc</span>
          <input type="number" class="w-32 h-12 rounded-md text-black text-center" v-model="kwMonthlySearchValue" />
        </div>
        <div class="flex items-center justify-between gap-2 mt-8">
          <span class="pr-8 text-xl">Pozice, na kterou cílíme (1.-10.)</span>          
          <input type="number" class="w-32 h-12 rounded-md text-black text-center" v-on:change="checkTargetPosition" v-model="targetPosition"/>
        </div>
        <div class="flex items-center justify-between gap-2 mt-8">
          <span class="pr-8 text-xl">Konverzní poměr</span>
          <div class="w-32 flex items-center">
            <input type="number" class="w-full h-12 rounded-l-md text-black text-center" v-model="conversionRate" />
            <span class="bg-white text-black p-3 rounded-r-md">%</span>
          </div>
          
        </div>
        <div class="flex items-center justify-between gap-2 mt-8">
          <span class="pr-8 text-xl">Hodnota konverze</span>
          <div class="w-32 flex items-center">
            <input type="number" class="w-full h-12 rounded-l-md text-black text-center" v-model="conversionValue" />
            <span class="bg-white text-black p-3 rounded-r-md">CZK</span>
          </div>          
        </div>
        <div class="flex items-center justify-between gap-2 mt-8 mb-4">
          <span class="pr-8 text-xl">Cena SEO za 1 měsíc</span>
           <div class="w-32 flex items-center">
            <input type="number" class="w-full h-12 rounded-l-md text-black text-center" v-model="monthlySeoPrice" />
            <span class="bg-white text-black p-3 rounded-r-md">CZK</span>
          </div>            
        </div>        
      </div>
    </div>
    <div class="w-full flex flex-col items-center bg-effectix-100 text-white">
      <div class="flex flex-col w-4/5 md:w-2/5 p-2">
      <div class="flex items-center justify-between gap-2 mt-4">
        <span class="pr-8 text-xl">Očekávaný výnos</span>
        <input  readonly class="w-32 h-12 rounded-md text-black text-center" :value="expectedReturn | currency" />
      </div>
      <div class="flex items-center justify-between gap-2 mt-8 mb-4">
        <span class="pr-8 text-xl">Návratnost investice</span>
        <input class="w-32 h-12 rounded-md text-black text-center" :value="returnOnInvestment | percentage" />
      </div>
    </div>    
  </div>
  </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    const CTR = [28.5, 15.7, 11, 8, 7.2, 5.1, 4, 3.2, 2.8, 2.5];
    
    export default Vue.extend({
        data() {
            return {
                kwMonthlySearchValue: 0,
                targetPosition: 1,
                conversionRate: 0,
                conversionValue: 0,
                monthlySeoPrice: 0,
            }
        },
        computed: {
            expectedReturn(): number {                 
                return (this.kwMonthlySearchValue / 100 * CTR[this.targetPosition - 1]) / this.conversionRate * this.conversionValue;
            },
            returnOnInvestment(): number { 
              return (this.expectedReturn - this.monthlySeoPrice) / this.monthlySeoPrice * 100;
            },
        },  
        filters: {
          currency: function(value: number) {
            if (!value || !Number.isFinite(value)) return '0 CZK';

            return value.toFixed(2) + " CZK"
          },
          percentage: function(value: number) {
            if (!value || !Number.isFinite(value)) return '0 %';

            return value.toFixed(2) + " %"
          }
        },
        methods: {
          checkTargetPosition: function() {
            this.targetPosition = this.targetPosition > 10 ? 1 : this.targetPosition < 1 ? 10 : this.targetPosition;
          }
        },           
    });
</script>

<style>
</style>