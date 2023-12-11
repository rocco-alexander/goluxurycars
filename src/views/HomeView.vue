<template>
    <n-layout style="margin:50px">
      <n-card title="Sales">
        <n-data-table striped :columns="columns" :data="sales"  @update:checked-row-keys="handleCheck" style="background-color: black;"/>
        <n-button @click="showModal = true" type="primary" style="margin-top: 14px;">Add Sale</n-button>
        <n-modal
          v-model:show="showModal"
          preset="dialog"
          title="Add Sale"
          positive-text="Add"
          negative-text="Cancel"
          @positive-click="submitCallback"
          @negative-click="cancelCallback">
          <n-card>
            <n-form ref="formRef" model="formValue">
              <n-form-item label="Order ID">
                <n-input v-model:value="formValue.sale.orderId"  placeholder="Enter Order ID"></n-input>
              </n-form-item>
              <n-form-item label="Sales Rep">
                <n-input v-model:value="formValue.sale.salesRep"  placeholder="Enter sales rep name"></n-input>
              </n-form-item>
              <n-form-item label="Order Date">
                <n-input v-model:value="formValue.sale.orderDate" placeholder="" type="date" ></n-input>
              </n-form-item>
              <n-form-item label="Currency">
                <n-input v-model:value="formValue.sale.totalSalePrice" placeholder="Enter currency"></n-input>
              </n-form-item>
            </n-form>
          </n-card>
      </n-modal>
      </n-card>
      <pre>{{ JSON.stringify(formValue) }}</pre>
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
      title: "Sales Rep",
      key:'salesRep'
    },
    {
      title: "Order Date",
      key:'orderDate'
    },
    {
      title: "Sales Price",
      key:'totalSalePrice'
    },
  ]
} 

export default {
setup(){
  const sales = ref([]);
  const message = useMessage();
  const checkedRowKeysRef= ref([]);
  const formRef = ref(null);
  const formValue = ref({
    sale: {
      orderId:'3',
      salesRep:'',
      orderDate:'',
      totalSalePrice:'',
      saleDTO:[]
    }
  })
  const load = async() =>{
    const url = 'http://goluxu-farga-dwpuwjyjrawo-1583368234.us-east-1.elb.amazonaws.com/'
            await fetch ( url + 'api/sales',{
                method : 'GET',
                headers:{
                  'Content-Type' : 'application/json',
                  'Authorization' : `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                sales.value = data
            })
  }

  const submitCallback = async() => {
    const url = 'http://goluxu-farga-dwpuwjyjrawo-1583368234.us-east-1.elb.amazonaws.com/'
    console.log(new Date(formValue.value.sale.orderDate).toISOString())
            await fetch ( url + 'api/sales',{
                method : 'POST',
                headers:{
                  'Content-Type' : 'application/json',
                  'Authorization' : `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                  orderId: formValue.value.sale.orderId,
                  salesRep: formValue.value.sale.salesRep,
                  orderDate: new Date(formValue.value.sale.orderDate).toISOString(),
                  totalSalePrice: formValue.value.sale.totalSalePrice,
                  saleDTO:[]
                })
            })
            load();
  }

  load();
  return { formRef, formValue, columns:createColumns(), sales, showModal:ref(false), cancelCallback () {message.error("Canceled Add Sale")}, submitCallback , handleCheck(rowKeys) {
        checkedRowKeysRef.value = rowKeys;
      }}
}
};

</script>
