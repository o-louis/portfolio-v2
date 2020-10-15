<template>
  <section id="about" class="about">
    <div class="about__content">
      <h1><span>🤝</span>{{ title }}</h1>
      <p v-for="(text, index) in descriptions" :key="index">{{ text }}</p>
      <Experiences />
    </div>
  </section>
</template>

<script>
import Experiences from './Experiences'
export default {
  name: 'About',
  components: {
    Experiences,
  },
  data: () => ({
    title: '  Me ? Who am I ?',
    descriptions: [
      'I’m a passionate developer specialized in front-end development and enthusiast about new technologies',
      'As I said above, my stack is Javascript (Vanilla, React, Vue.js and Node.js) but have also experience with Python and others.',
      'I have worked on real life projects and find myself capable enough to handle pressure well. Team work and quick learner describes me really well.',
      "Although I’ve three years of work experiences, I keep learning everyday because web development is moving fast !!! (and in particular because I'm a curious person)",
    ],
  }),
}
</script>

<style>
.about {
  width: 100%;
  position: relative;
  padding-bottom: 50px;
}

.about__content {
  width: var(--width-container);
  max-width: var(--max-width-container);
  margin: 0 auto;
  color: var(--white);
}

.about__content h1 {
  text-transform: uppercase;
  font-weight: var(--extra-bold);
  margin-bottom: 40px;
  color: var(--blue-purple);
  font-size: clamp(26px, 5vw, var(--fz-heading));
}

.about__content h1 span,
.skills__content h1 span,
.projects__content h1 span {
  font-size: clamp(18px, 5vw, 24px);
}

.about__content h2 span {
  font-size: clamp(16px, 5vw, 22px);
}

.about__content p {
  line-height: var(--lh);
  font-weight: var(--medium);
  font-size: var(--fz-lg);
  margin-bottom: 15px;
  max-width: 900px;
}

.intro__content p:nth-child(5) {
  font-size: var(--fs-p-small);
  text-align: center;
}

@media (min-width: 480px) {
  .about__content p {
    font-weight: var(--medium);
    font-size: var(--fz-xl);
  }
}

@media (min-width: 923px) {
  .about {
    min-height: 100vh;
  }
}
</style>
