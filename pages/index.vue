<template>
  <div>
    <Header />
    <main>
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  </div>
</template>

<script>
import Header from '../components/Header'
import Intro from '../layouts/Intro'
import About from '../layouts/About'
import Skills from '../layouts/Skills'
import Projects from '../layouts/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default {
  name: 'Index',
  components: {
    Header,
    Intro,
    About,
    Skills,
    Projects,
    Contact,
    Footer,
  },
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap',
        },
      ],
    }
  },
}
</script>

<style>
:root {
  /* color */
  --background: #1d164c;
  --black: #0a192f;
  --white: #fff;
  --lightest-grey: #dcd6d62f;
  --purple: #4831d4;
  --blue-purple: #a09be7;
  --light-green: #ccf381;

  /* font-sizes */
  --fs-vw: 0rem;
  --fs-logo: calc(3rem + var(--fs-vw));
  --fs-h3: calc(2.85rem + var(--fs-vw));
  --fs-h4: calc(2rem + var(--fs-vw));
  --fs-p-normal: calc(1.8rem + var(--fs-vw));
  --fs-p-small: calc(1.35rem + var(--fs-vw));
  --fs-p-smallest: calc(1.15rem + var(--fs-vw));
  --fs-p-desc: calc(1.4rem + var(--fs-vw));
  --fz-md: 16px;
  --fz-lg: 18px;
  --fz-xl: 20px;
  --fz-xxl: 22px;
  --fz-heading: 32px;

  /* z-index */
  --high: 10;
  --medium: 5;
  --low: 1;
  --null: -1;

  /* font-weight */
  --extra-bold: 900;
  --bold: 700;
  --regular: 400;
  --light: 300;

  /* container */
  --width-container: 85%;
  --max-width-container: 1000px;

  /* others */
  --lh: 150%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  list-style-type: none;
  font-family: 'Lato', sans-serif;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

img {
  width: 100%;
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

button,
input {
  border: none;
}

a {
  color: inherit;
}

section {
  padding-top: 68px;
}

body {
  background-color: var(--background);
}

@media (min-width: 616px) {
  :root {
    --fs-vw: 0.5rem;
  }
}

@media (min-width: 923px) {
  :root {
    --fs-vw: 0.4rem;
  }
}
</style>
