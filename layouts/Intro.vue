<template>
  <section class="intro">
    <div class="intro__content">
      <p class="title_content">{{ h2 }}</p>
      <h1>{{ name }}</h1>
      <h2>{{ h3 }}<span>.</span></h2>
      <p class="desc_content">{{ description }}</p>
      <div class="intro__chevron-down">
        <a href="#about" aria-label="Section about me">
          <font-awesome-icon :icon="['fas', 'chevron-down']" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Intro',
  data: () => ({
    h2: "Hi, I'm",
    name: 'Oriane Louis',
    h3: 'Frontend Developer',
    description:
      'I love Javascript and its frameworks to build things and improve User Experience.',
  }),
}
</script>

<style>
.intro {
  width: 100%;
  position: relative;

  color: var(--white);
  background-color: var(--purple);

  display: flex;
  align-items: center;
  padding-top: 0px;
}

.intro__content {
  width: var(--width-container);
  max-width: var(--max-width-container);
  margin: 0 auto;
  height: 95vh;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.intro__content h1 {
  font-weight: var(--extra-bold);
  font-size: clamp(40px, 8vw, 80px);
}

.intro__content .title_content {
  font-weight: var(--regular);
  font-size: clamp(var(--fz-xl), 5vw, var(--fz-xxl));
}

.intro__content h2 {
  margin-top: 40px;
  color: var(--blue-purple);
  font-weight: var(--extra-bold);
  font-size: clamp(40px, 8vw, 80px);
}

.intro__content h3 span {
  color: var(--white);
}

.intro__content .desc_content {
  margin-top: 20px;
  line-height: var(--lh);
  font-size: var(--fs-p-normal);
  color: var(--white);
}

.intro__content .intro__chevron-down {
  align-self: center;
  font-size: var(--fs-h3);
  color: var(--blue-purple);
  margin-top: 10vh;

  animation-duration: 0.8s;
  animation-name: bounce;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes bounce {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}

@media (min-width: 480px) {
  .intro__content .desc_content {
    font-size: var(--fz-xl);
  }
}
@media (min-width: 923px) {
  .intro__content .title_content {
    font-size: 5rem;
  }
  .intro__content h1 {
    font-size: 6rem;
  }
  .intro__content h2 {
    font-size: 6.5rem;
  }
  .intro__content .desc_content {
    font-size: 2.2rem;
  }
  .intro__content .desc_content {
    max-width: 800px;
  }
}
</style>
