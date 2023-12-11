<template>
    <div class="ui raised padded segment">
    <h1 class="ui header"> Clients </h1>
    <table class="ui inverted selectable table">
        <thead class="content-bar">
          <!-- Any content inside the content container header goes here   -->
          <!-- Table Headers going here -->
          <tr class="header">
            <th class="item"> ID </th>
            <th class="item"> Name </th>
            <th class="item"> Sales Agent </th>
            <th class="item"> Completed </th>
            <th class="item"> In Progress </th>
            <th class="item"> Sold </th>
            <th class="item"> Balance </th>
            <th class="item"> Contact</th>
            <th class="item"> Orders </th>
          </tr>
        </thead>
        <tbody class="content-body">
          <!-- Main content goes here -->
          <tr v-for="client in clients">
            <td> {{ client.client_id }} </td>
            <td> {{ client.name }} </td>
            <td> {{ client.sales_agent }} </td>
            <td> {{ client.completed }} </td>
            <td> {{ client.in_progress }} </td>
            <td> {{ client.sold }} </td>
            <td> {{ client.balance }} </td>
            <td> {{ client.contact }} </td>
            <td> {{ client.orders }} </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
import { ref }  from 'vue'
export default {
  setup(){
    const clients = ref([])
    const error = ref([])

    const load = async() =>{
      try{
        let data = await fetch('http://localhost:3000/clients')
        console.log(data)
        if(!data.ok){
          throw Error("no data available")
        }
        clients.value = await data.json()
      }
      catch(err){
        error.value = err
        console.log(error.value)
      }
    }
    load()
    return { clients }
  }
};
</script>
