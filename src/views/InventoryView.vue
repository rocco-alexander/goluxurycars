<template>
    <n-layout style="margin: 50px">
      <n-card title="Inventory">
        <n-data-table striped :columns="columns" :data="vehicles"  @update:checked-row-keys="handleCheck" style="background-color: black;"/>
        <n-button @click="showModal = true" type="primary" style="margin-top: 14px;">Add Vehicle</n-button>
        <n-modal
          v-model:show="showModal"
          style="max-width: 50%;">
          <n-card>
            <h1>Add Vehicle</h1>
            <n-form ref="formRef" model="formValue">
              <n-grid :span="24" :x-gap="24">
                <n-form-item-gi :span="12" :x-gap="12" >
                  <n-input v-model:value="formValue.vehicle.make"  placeholder="Enter Make"></n-input>
                </n-form-item-gi>
                <n-form-item-gi :span="12" :x-gap="12" >
                  <n-input v-model:value="formValue.vehicle.model"  placeholder="Enter Model"></n-input>
                </n-form-item-gi>
                <n-form-item-gi :span="12" :x-gap="12" >
                  <n-input v-model:value="formValue.vehicle.modelYear" placeholder="Enter Year"></n-input>
                </n-form-item-gi>
                <n-form-item-gi :span="12" :x-gap="12" >
                  <n-input v-model:value="formValue.vehicle.trim" placeholder="Enter Trim"></n-input>
                </n-form-item-gi>
                <n-form-item-gi :span="12" :x-gap="12" >
                  <n-input v-model:value="formValue.vehicle.interiorColor" placeholder="Enter Interior Color"></n-input>
                </n-form-item-gi>
                <n-form-item-gi :span="12" :x-gap="12" >
                  <n-input v-model:value="formValue.vehicle.exteriorColor" placeholder="Enter Exterior Color"></n-input>
                </n-form-item-gi>
                <n-form-item-gi :span="12" :x-gap="12" >
                  <n-input v-model:value="formValue.vehicle.vin" placeholder="Enter Vin"></n-input>
                </n-form-item-gi>
                <n-form-item-gi :span="12" :x-gap="12" >
                  <n-input v-model:value="formValue.vehicle.mileageKm" placeholder="Enter Mileage (kms)"></n-input>
                </n-form-item-gi>
                <n-form-item-gi :span="12" :x-gap="12" >
                  <n-input v-model:value="formValue.vehicle.packagePrice" placeholder="Enter Price"></n-input>
                </n-form-item-gi>
                <n-form-item-gi :span="12" :x-gap="12" >
                  <n-input v-model:value="formValue.vehicle.warehouse" placeholder="Enter Warehouse"></n-input>
                </n-form-item-gi>
              </n-grid>
              <div style="display: flex;justify-content: end;">
                <n-button @click="cancelCallback" type="error">Cancel</n-button>
                <n-button style="margin-left:8px" @click="submitCallback" type="primary">Add Vehicle</n-button>
              </div>
            </n-form>
          </n-card>
      </n-modal>
      </n-card>
      <!-- <pre>{{ JSON.stringify(formValue) }}</pre> -->
    </n-layout>
</template>

<script>
import { ref }  from 'vue';
import { useMessage } from 'naive-ui';
const createColumns = () => {
  return [
    {
      type: "selection",
    },
    {
      title: "ID",
      key:'id'
    },
    {
      title: "VIN",
      key:'vin'
    },
    {
      title: "Make",
      key:'make'
    },
    {
      title: "Model",
      key:'model'
    },
    {
      title: "Year",
      key:'modelYear'
    },
    {
      title: "Mileage",
      key:'mileageKm'
    },
    {
      title: "Interior Color",
      key:'interiorColor'
    },
    {
      title: "Exterior Color",
      key:'exteriorColor'
    },
    {
      title: "Price",
      key:'packagePrice'
    },
  ]
} 

export default {
setup(){
  const vehicles = ref([]);
  const message = useMessage();
  const checkedRowKeysRef= ref([]);
  const showModal = ref(false)
  const formRef = ref(null);
  const formValue = ref({
    vehicle: {
      name:'asdasdasd',
      make:'',
      model: '',
      modelYear:'',
      trim:'',
      interiorColor:'',
      exteriorColor: '',
      vin:'',
      mileageKm:'',
      packagePrice:'',
      warehouse:'',
      vehicleDTO:[]
    }
  })
  const load = async() =>{
    const url = 'http://goluxu-farga-dwpuwjyjrawo-1583368234.us-east-1.elb.amazonaws.com/'
            await fetch ( url + 'api/vehicles',{
                method : 'GET',
                headers:{
                  'Content-Type' : 'application/json',
                  'Authorization' : `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                vehicles.value = data
            })
  }

  const submitCallback = async() => {
    console.log('this is submitting', JSON.stringify(formValue.value.vehicle))
    const url = 'http://goluxu-farga-dwpuwjyjrawo-1583368234.us-east-1.elb.amazonaws.com/'
            await fetch ( url + 'api/vehicles',{
                method : 'POST',
                headers:{
                  'Content-Type' : 'application/json',
                  'Authorization' : `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(formValue.value.vehicle)
            })
            // load();
  }

  load();
  return { formRef, formValue, columns:createColumns(),showModal ,vehicles, cancelCallback () {message.error("Canceled Add Vehicle"); showModal.value = false}, submitCallback , handleCheck(rowKeys) {
        checkedRowKeysRef.value = rowKeys;
      }}
}
};

</script>
