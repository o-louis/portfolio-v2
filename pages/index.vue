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
}
</script>
