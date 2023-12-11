<template>
    <div class="main-content">
      <Brand></Brand>
        <div class="tab-group">
          <!-- Rename the Tabs Here -->
          <tab :tabName="'Profile'"></tab> 
        </div>
        <table>
          <thead class="content-bar">
            <!-- Any content inside the content container header goes here   -->
            <!-- Table Headers going here -->
            <tr class="header">
              <th class="item">Stock#</th>
              <th class="item">VIN#</th>
              <th class="item">Name</th>
              <th class="item">Trim</th>
              <th class="item">Color</th>
              <th class="item">Retail Price</th>
              <th class="item">Mileage</th>
              <th class="item">Days in Stock</th>
              <th class="item">Condition</th>
              <th class="item">Package</th>
            </tr>
          </thead>
          <tbody class="content-body">
            <!-- Main content goes here -->
              <tr v-for="car in cars">
                <td> {{ car.stock_number }} </td>
                <td> {{ car.vin }} </td>
                <td> {{ car.name }} </td>
                <td> {{ car.trim }} </td>
                <td> {{ car.color }} </td>
                <td> {{ car.retail_price }} </td>
                <td> {{ car.mileage }} </td>
                <td> {{ car.days_in_stock }} </td>
                <td> {{ car.condition }} </td>
                <td> {{ car.package }} </td>
              </tr>
          </tbody>
        </table>
    </div>
</template>

<script>
import Tab from "../components/Tab.vue"
import Accordion from "../components/Accordion.vue"
import Brand from "../components/Brand.vue";
import { ref }  from 'vue'
export default {
  components: { Tab, Accordion, Brand },
  setup(){

    const cars = ref([])
    const error = ref([])

    const load = async() =>{
      try{
        let data = await fetch('http://localhost:3000/cars')
        console.log(data)
        if(!data.ok){
          throw Error("no data available")
        }
        cars.value = await data.json()
      }
      catch(err){
        error.value = err
        console.log(error.value)
      }
    }
    load()
    return { cars }
  }
};
</script>