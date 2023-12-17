<!--
    FOR TESTING CASES  
    "email": "owner@test.com",
    "password": "34@jF0$D"
 -->
<template>
    <div class="container" style="display: flex;justify-content: center;transform: translateY(50%);">
        <n-card title="Login" style="max-width:450px;">
            <n-form size="large" :model="model">
                <n-form-item label="Email" path="email">
                    <n-input v-model:value="model.email" @keydown.enter.prevent></n-input>
                </n-form-item>
                <n-form-item label="Password" path="password">
                    <n-input type="password" v-model:value="model.password" @keydown.enter.prevent></n-input>
                </n-form-item>
            </n-form>
            <n-row :gutter="[0,24]">
                <n-col :span="24">
                    <n-button size="large" round style="min-width:100%" type="primary" @click="login">Log In</n-button>
                </n-col>
            </n-row>
        </n-card>
    </div>
  </template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { NButton, NCard, NForm, NFormItem, NInput, NCol, NRow } from 'naive-ui';
export default {
    setup(){
        const router = useRouter()
        const modelRef = ref ({
            email: null,
            password: null
        })
        const token = ref(null);
        const error = ref(null)

        const login = async() => {
            let data = {
                email: modelRef.value.email,
                password: modelRef.value.password
            }
            const url = 'https://api.beta.goluxurycars.ca/'
            await fetch ( url + 'api/auth/login',{
                method : 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
                token.value = data;
                localStorage.setItem("token",`${data.token}`)
                console.log(localStorage.getItem("token"));
                router.push('/Sales')
            })
        }

        return {login, model:modelRef,error}
    }
}
</script>
