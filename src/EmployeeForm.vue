<template>
    <div>
      <h1>Employee Form</h1>
      <form @submit.prevent="save">
        
        <input type="number" v-model="formData.id" placeholder="ID" /><br><br>
        <input type="text" v-model="formData.name" placeholder="Name" /><br><br>
        <input type="tel" v-model="formData.contactNumber" placeholder="Contact Number" :pattern="contactNumberPattern" :error-message="$errorMessage" /><br><br>
        <input type="email" v-model="formData.email" placeholder="Email" :pattern="emailPattern" :error-message="$errorMessage" /><br><br>
        <input type="number" v-model="formData.age" placeholder="Age" />
  
        <div>
          <h3>Hobbies</h3>
          <ul>

            
            <li v-for="hobby in formData.hobbies.indoor" :key="hobby">
            </li>
            <input type="text" v-model="formData.hobbies.inHobby" placeholder="Indoor Hobby" />


            <li v-for="hobby in formData.hobbies.outdoor" :key="hobby">
            </li><br><br>
            <input type="text" v-model="formData.hobbies.ouHobby" placeholder="Outdoor Hobby" />


          </ul>
        </div>
  
        <button class="save" type="submit">Save</button>
      </form>
  
      <div v-if="savedData">
        <h1>Saved Data</h1>
        <pre>{{ savedData }}</pre>
      </div>
  
      <button @click="loadSavedData">Load Saved Data</button>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  const contactNumberPattern = /^(0|91)?[6-9][0-9]{9}$/;
  const emailPattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
  
  export default defineComponent({
    name: 'EmployeeForm',
  
    data() {
      return {
        formData: {
          id: 0,
          name: '',
          contactNumber: '',
          email: '',
          age: 0,
          hobbies: {
            inHobby: [],
            ouHobby: [],
          },
        },
        
        savedData: null,
        $errorMessage: '',
      };
    },
  
    methods: {
      validate() {
        // Validate all required fields
        for (const key in this.formData) {
          if (this.formData[key] === null || this.formData[key] === '') {
            this.$errorMessage = `Please fill in the ${key} field`;
            return false;
          }
        }
  
        // Validate contact number and email fields
        if (!contactNumberPattern.test(this.formData.contactNumber)) {
          this.$errorMessage = 'Invalid contact number';
          return false;
        }
  
        if (!emailPattern.test(this.formData.email)) {
          this.$errorMessage = 'Invalid email address';
          return false;
        }
  
        return true;
      },
  
      save() {
        if (!this.validate()) {
          return;
        }
  
        // Save the form data to a JSON file
        const jsonData = JSON.stringify(this.formData, null, 2);
        const blob = new Blob([jsonData], { type: 'application/json' });
        const url = window.URL.createObjectURL(blob);
  
        const a = document.createElement('a');
        a.href = url;
        a.download = 'employee_data.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      },
  
      loadSavedData() {
  // Check if the savedData property is null or empty
  if (!this.savedData || this.savedData === '') {
    return;
  }

  // Parse the savedData property as JSON
  const formData = JSON.parse(this.savedData);

  // Create a new hobbies object if it doesn't exist in the parsed JSON data
  if (!formData.hobbies) {
    formData.hobbies = {
      indoor: [],
      outdoor: [],
    };
  }

  // Update the formData object with the parsed data
  this.formData = formData;
},
  
    },
  });
  </script>
  
  <style scoped>
  
  .container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  h1 {
    text-align: center;
    color: #333;
  }

  input[type="text"],
  input[type="number"],
  input[type="tel"],
  input[type="email"] {
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  .error {
    color: #ff0000;
    margin-top: 5px;
  }

  button {
    width: 23rem;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .saved-data {
    margin-top: 20px;
  }

  .load-button {
    background-color: #4caf50;
  }
  .save{
    background-color: yellowgreen;
    margin: 5px;
  }
</style>