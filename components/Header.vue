<template>
  <header>
    <nav>
      <div class="nav__logo">
        <a href="/">{{ logo }}</a>
      </div>

      <div class="nav__hamburger" @click="toggleNav">
        <div class="nav_hamburger-line"></div>
        <div class="nav_hamburger-line"></div>
      </div>

      <div :class="{ 'nav-wrapper': true, open: isNavOpen }">
        <font-awesome-icon :icon="['fa', 'times']" @click="toggleNav" />
        <ul class="nav-container">
          <li v-for="(section, index) in nav" :key="index" class="nav__link">
            <a :href="section.path" :target="section.target">{{
              section.name
            }}</a>
          </li>
        </ul>
        <Contact :is-in-header="true" />
      </div>
    </nav>
  </header>
</template>

<script>
import resume from '../static/Oriane_Louis_Resume.pdf'
import Contact from './Contact'

export default {
  name: 'Header',
  components: {
    Contact,
  },
  data: () => ({
    logo: 'ol.',
    nav: [
      { name: 'About', path: '#about' },
      { name: 'Skills', path: '#skills' },
      { name: 'Projects', path: '#projects' },
      { name: 'Contact', path: '#contact' },
      { name: 'Resume', path: resume, target: true },
    ],
    isNavOpen: false,
  }),
  mounted() {
    let prevScrollpos = window.pageYOffset
    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset
      if (prevScrollpos > currentScrollPos) {
        document.querySelector('header').style.top = '0'
      } else {
        document.querySelector('header').style.top = '-67px'
      }
      prevScrollpos = currentScrollPos
    }
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen
      return this.isNavOpen
    },
  },
}
</script>

<style defer>
header {
  width: 100%;
  padding: 14px 0;
  position: fixed;
  top: 0;
  z-index: var(--high);
  color: var(--blue-purple);
  background-color: var(--purple);

  transition: top 0.4s ease;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.1);
}

nav {
  width: var(--width-container);
  max-width: var(--max-width-container);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav__logo {
  font-size: var(--fs-logo);
  font-weight: var(--bold);
  color: var(--blue-purple);
}

.nav__hamburger {
  width: 35px;
  height: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  border-radius: 4px;
  cursor: pointer;
}

.nav_hamburger-line {
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--blue-purple);
}

.nav_hamburger-line:nth-child(2) {
  width: 60%;
}

.nav-wrapper {
  position: fixed;
  right: 0;
  top: 0;
  width: 250px;
  height: 100vh;
  z-index: var(--high);
  background-color: white;
  padding: 30px;
  transform: translateX(100%);
  transition: transform 0.5s ease;

  color: var(--purple);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.nav__link {
  margin-bottom: 30px;
  width: 100%;
  font-size: var(--fz-xxl);
}

.nav__link:hover {
  color: var(--blue-purple);
}

/* Resume btn */
.nav__link:nth-child(5) {
  padding-right: 0px;
  border: 1px solid var(--blue-purple);
  padding: 5px 5px;
  border-radius: 5px;
  width: 90px;
  color: var(--purple);
}

.nav__link:nth-child(5):hover {
  background-color: var(--white);
  color: var(--blue-purple);
}
/*  */

.open {
  transform: translateX(0);
}

.fa-times {
  display: inline-block;
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: var(--fz-heading);
  cursor: pointer;
}
@media (min-width: 768px) {
  .nav__hamburger {
    display: none;
  }
  .nav-wrapper {
    display: flex;
    transform: translateX(0);
  }
  .nav-container {
    display: flex;
  }
  nav ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .nav-wrapper {
    position: relative;
    width: 40%;
    height: inherit;
    z-index: var(--high);
    background-color: inherit;
    color: white;
    padding: 0px;
  }
  .nav__link {
    width: auto;
    height: auto;
    padding-right: 30px;
    margin-bottom: 0px;

    color: var(--blue-purple);
  }
  .nav__link:hover {
    color: var(--white);
  }
  .nav__link:nth-child(5):hover {
    background-color: var(--white);
    color: var(--purple);
  }
  .nav__link:nth-child(5) {
    width: 100%;
    border: 1px solid var(--white);
    color: white;
  }
  .fa-times {
    display: none !important;
  }
  .nav-wrapper .contact__content {
    display: none;
  }
}
</style>
