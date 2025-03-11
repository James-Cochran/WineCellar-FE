<template>
  <div class="home">
    <h1>Your Wine Cellar</h1>
    <nav class="nav-links">
      <RouterLink to="/collection">Your Wine Collection</RouterLink>
      <RouterLink to="/add-wine">Add to Your Collection</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  color: white;
  font-size: 2rem;
  background-image: url('@/assets/wine-cellar.jpg');
  background-size: cover;
  background-position: center;
  padding-top: 2rem;
}

.nav-links {
  margin-top: auto;
  padding-bottom: 2rem;
  display: flex;
  gap: 19rem;
}

.nav-links a {
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border: 2px solid white;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.nav-links a:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

</style>
