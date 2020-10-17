<template>
  <section class="intro">
    <div class="intro__content">
      <h2>{{ h2 }}</h2>
      <h1>{{ name }}</h1>
      <h3>{{ h3 }}<span>.</span></h3>
      <p>{{ description }}</p>
      <div class="intro__chevron-down">
        <a href="#about">
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
  // beforeMount() {
  //   const h3 = document.querySelector('.intro__content h3')
  //   const p = document.querySelector('.intro__content p')
  //   const chevron = document.querySelector(
  //     '.intro__content .intro__chevron-down'
  //   )
  //   h3.classList.add('downToUp')
  //   p.classList.add('downToUp')
  //   chevron.classList.add('downToUp')
  // },
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

.intro__content h2 {
  font-weight: var(--regular);
  font-size: clamp(var(--fz-xl), 5vw, var(--fz-xxl));
}

.intro__content h3 {
  margin-top: 40px;
  color: var(--blue-purple);
  font-weight: var(--extra-bold);
  font-size: clamp(40px, 8vw, 80px);

  transition-delay: 0.2s;
}

.intro__content h3 span {
  color: var(--white);
}

.intro__content p {
  margin-top: 20px;
  line-height: var(--lh);
  font-size: var(--fs-p-normal);
  color: var(--white);

  transition-delay: 0.4s;
}

.intro__content .intro__chevron-down {
  transition-delay: 0.6s;

  align-self: center;
  font-size: var(--fs-h3);
  color: var(--blue-purple);
  margin-top: 10vh;

  animation-duration: 0.8s;
  animation-name: bounce;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

.intro__content h3,
.intro__content p,
.intro__content .intro__chevron-down {
  opacity: 1;
  /* transition-property: opacity;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out; */
}

.intro__content h3.downToUp,
.intro__content p.downToUp,
.intro__content .intro__chevron-down.downToUp {
  opacity: 1;
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
  .intro__content p {
    font-size: var(--fz-xl);
  }
}
@media (min-width: 923px) {
  .intro__content h2 {
    font-size: 5rem;
  }
  .intro__content h1 {
    font-size: 6rem;
  }
  .intro__content h3 {
    font-size: 6.5rem;
  }
  .intro__content p {
    font-size: 2.2rem;
  }
  .intro__content p {
    max-width: 800px;
  }
}
</style>
