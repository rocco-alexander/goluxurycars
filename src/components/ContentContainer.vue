<template>
    <div class="main-content">
      <div class="tab-group">
        <!-- Rename the Tabs Here -->
        <tab :tabName="'Example'"></tab> 
        <tab :tabName="'Example'"></tab>
      </div>
      <div class="content-bar">
        <!-- Any content inside the content container header goes here   -->
      </div>
      <div class="content-body">
        <!-- Main content goes here -->
        <div class="details-container">
          <div class="customer-details">
            <div class="sales-id">Sales ID: 1234567</div>
            <div class="client-name">Client: Mary Ann</div>
            <div class="purchase-date">Purchase Date: 2/2/2023</div>
            <div class="status">
              Status: In Transit
              <div class="circle"></div>
            </div>
            <button class="customer-info-button">Customer INFO</button>
          </div>
        </div>
        <div class="car-accordion-container">
          <div class="car-details">
            <div class="car-image">
              <div
                style="
                  padding: 150px;
                  background: transparent;
                  border: 1px solid black;
                "
              >
                Sample Image
              </div>
            </div>
            <div class="car-details">
              <div class="model">Model: ABC XYZ</div>
              <div class="condition">Condition: New</div>
              <div class="stock-number">Stock#: 1234567</div>
              <div class="checklist-completed">
                Checklist Completed?
                <input type="Checkbox" name="" id="" />
              </div>
            </div>
          </div>
          <div class="accordion-container">
            <accordion />
            <accordion />
            <accordion />
            <accordion />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Tab from "./Tab.vue";
  import Accordion from "./Accordion.vue";
  export default {
    components: { Tab, Accordion },
    setup(){
    }
  };
  </script>
  