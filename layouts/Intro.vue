<template>
  <section class="intro">
    <div class="intro__content">
      <h2>{{ h2 }}</h2>
      <h1>
        <span v-for="(letter, index) in name" :key="index">{{ letter }}</span>
      </h1>
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
    name: ['O', 'r', 'i', 'a', 'n', 'e', ' ', 'L', 'o', 'u', 'i', 's'],
    h3: 'Frontend Developer',
    description:
      'I love Javascript and its frameworks to build things and improve User Experience.',
  }),
  mounted() {
    const letterSpans = document.querySelectorAll('.intro__content h1 > span')
    const subtitleElement = document.querySelector('.intro__content  h3')
    const pElement = document.querySelector('.intro__content  p')
    const iElement = document.querySelector(
      '.intro__content  .intro__chevron-down'
    )

    let index = 0
    let timer = setInterval(() => {
      letterSpans[index++].className = 'fade'
      stopTimer()
    }, 10)

    const stopTimer = () => {
      if (index === letterSpans.length) {
        subtitleElement.className = 'downToUp'
        pElement.className = 'downToUp'
        iElement.className += ' downToUp'
        clearInterval(timer)
        timer = null
      }
    }
  },
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
  /* display: flex; */
}

.intro__content h1 span {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
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
}

.intro__content h3 span {
  color: var(--white);
}

.intro__content h3 {
  transform: translateY(40px);
  opacity: 0;
  transition: all 0.7s ease-in-out;
}

.intro__content p {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.5s ease-in-out;
  transition-delay: 0.7s;
}

.intro__content .intro__chevron-down {
  opacity: 0;
  transition: all 0.3s ease-in-out;
  transition-delay: 1.2s;
}

/* Animation */
.intro__content h1 span.fade,
.intro__content h3.downToUp,
.intro__content p.downToUp {
  opacity: 1;
  transform: translateY(0px);
}

.intro__content .intro__chevron-down.downToUp {
  opacity: 1;
}
/* s */

.intro__content p {
  margin-top: 20px;
  line-height: var(--lh);
  font-size: var(--fs-p-normal);

  color: var(--white);
}

.intro__content button {
  background-color: transparent;
  border-radius: 24px;
  padding: 10px 20px;
  margin-top: 6vh;
  align-self: center;

  border: 1px solid var(--white);
  font-size: var(--fs-p-normal);
  color: var(--white);

  transition: transform 0.2s ease;
}

.intro__content button:hover {
  background-color: var(--white);
  color: var(--blue-purple);
  font-weight: var(--bold);
  transform: scale(1.05);
}

.intro__content .intro__chevron-down {
  align-self: center;
  font-size: var(--fs-h3);
  color: var(--blue-purple);
  margin-top: 10vh;

  animation-duration: 0.6s;
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
