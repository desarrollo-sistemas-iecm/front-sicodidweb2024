<template>
  <div class="login-container">
    <a-card class="login-card">
      <img class="login-logo" src="@/assets/sicodid.jpg" alt="Logo">
      <h1 class="login-title">Iniciar Sesión</h1>
      <a-form @submit.prevent="login" layout="vertical">
        <a-form-item>
          <a-input v-model:value="email" type="email" placeholder="Correo Electrónico" required>
            <template #prefix>
              <MailOutlined />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input v-model:value="password" type="password" placeholder="Contraseña" required>
            <template #prefix>
              <LockOutlined />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button :disabled="!isFormValid" type="primary" html-type="submit" class="login-button">
            Iniciar Sesión
          </a-button>
        </a-form-item>
        <a-alert v-if="errorMessage" type="error" :message="errorMessage" show-icon closable></a-alert>
      </a-form>
    </a-card>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { MailOutlined, LockOutlined } from '@ant-design/icons-vue';
import { handleLoginSuccess } from '../auth.js';

const email = ref('');
const password = ref('');
const errorMessage = ref('');

const isFormValid = computed(() => {
  return email.value.trim() !== '' && password.value.trim() !== '';
});

watch([email, password], () => {
  errorMessage.value = ''; // Clear error message when user starts typing
});

const login = async () => {
  try {
    errorMessage.value = ''; // Clear previous errors
    // const urlSirec = 'http://localhost:3025/api/';
    const urlSirec = 'https://sirec.iecm.mx:3025/api/';
    const response = await fetch(urlSirec+'login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        correo_electronico: email.value,
        contrasena: password.value
      })
    });
    const data = await response.json();
    if (data.ok) {
      console.log('Login successful:', data);
      localStorage.setItem('token', data.token);
      await handleLoginSuccess();
      const currentUrl = window.location.href;
      const newUrl = currentUrl.replace('/login', '');
      window.location.href = newUrl; // Redirigir al dominio menos la palabra "login"
    } else {
      console.error('Login failed:', data);
      errorMessage.value = 'Usuario o contraseña incorrectos';
    }
  } catch (error) {
    console.error('Login error:', error);
    errorMessage.value = 'Error en el servidor, por favor intente de nuevo más tarde';
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #582d73;
}

.login-card {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: #FFF;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.login-logo {
  width: 100px;
  margin-bottom: 20px;
}

.login-title {
  color: #582d73;
  font-size: 24px;
  margin-bottom: 20px;
}

.login-button {
  width: 100%;
  background-color: #c791a8;
  border-color: #c791a8;
}

.login-button:disabled {
  background-color: #ccc;
  border-color: #ccc;
}

.login-button:hover {
  background-color: #a5678c;
  border-color: #a5678c;
}
</style>
