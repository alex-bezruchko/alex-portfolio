<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <div id="nav" class="d-flex justify-content-between">
          <router-link class="navbar-brand" to="/">
            <img class="" id="about-jpg" src="./img/about.jpg" alt="about-pic">
            Alex Bezruchko</router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>

        <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/"
                class="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/portfolio"
                class="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Portfolio</router-link>
            </li>

            <li class="nav-item">
              <router-link to="/contact"
                class="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</router-link>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  </header>

  <main>
    <router-view />
  </main>
</template>

<style>
/* .main-nav {
  display: flex;
  justify-content: center;
  align-items: center;
}
.items-baseline {
  color: #000;
} */
</style>