<template>
    <div class="admin-login">
      <h2>Admin Login</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      login() {
        // Implement your login logic here, e.g., check credentials
        if (this.username === 'admin' && this.password === 'password') {
          // Successful login, navigate to admin dashboard or other pages
          this.$router.push('/admin-dashboard');
        } else {
          // Invalid credentials, display an error message
          alert('Invalid username or password');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add CSS styles for the Admin Login page here */
  </style>
  