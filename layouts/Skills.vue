<template>
  <section id="skills" class="skills">
    <div class="skills__content">
      <h1><span>🔌</span> Skills</h1>
      <div class="skills__grid">
        <div class="skills__item">Javascript</div>
        <div class="skills__item">Typescript</div>
        <div class="skills__item">VueJS</div>
        <div class="skills__item">ReactJS</div>
        <div class="skills__item">NodeJS</div>
        <div class="skills__item">NextJS</div>
        <div class="skills__item">Html</div>
        <div class="skills__item">CSS</div>
        <div class="skills__item">Sass</div>
        <div class="skills__item">Bootstrap</div>
        <div class="skills__item">jQuery</div>
        <div class="skills__item">TailwindCSS</div>
        <div class="skills__item">Webpack</div>
        <div class="skills__item">Babel</div>
        <div class="skills__item">Python</div>
        <div class="skills__item">MongoDB</div>
        <div class="skills__item">Figma</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills',
  data: () => ({
    skill: [
      'Javascript',
      'Typescript',
      'VueJS',
      'ReactJS',
      'NodeJS',
      'NextJS',
      'Html',
      'CSS',
      'Sass',
      'Bootstrap',
      'jQuery',
      'TailwindCSS',
      'Webpack',
      'Babel',
      'Python',
      'MongoDB',
      'Figma',
    ],
  }),
}
</script>

<style>
.skills {
  color: var(--white);
}

.skills__content {
  width: var(--width-container);
  max-width: var(--max-width-container);
  margin: 0 auto;
}

.skills__content h1 {
  text-transform: uppercase;
  font-weight: var(--extra-bold);
  margin-bottom: 40px;
  letter-spacing: 0.1rem;
  color: var(--blue-purple);
  font-size: clamp(26px, 5vw, var(--fz-heading));
}

.skills__grid {
  display: grid;
  width: 100%;
  grid-gap: 20px 10px;
  justify-content: center;
  max-width: 900px;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
}

.skills__item {
  border: 1px solid var(--blue-purple);
  border-radius: 20px;
  text-align: center;
  padding: 5px;
  font-size: var(--fz-md);
}

@media (min-width: 480px) {
  .skills__grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
  .skills__item {
    font-size: var(--fz-lg);
  }
}
</style>
