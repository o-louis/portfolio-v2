<template>
  <div class="experiences">
    <h2><span>💻</span>{{ title }}</h2>
    <div class="experiences__labels">
      <ul class="experiences__list">
        <li v-for="(company, index) in companies" :key="index">
          {{ company }}
        </li>
      </ul>
    </div>
    <div class="experiences__item" v-for="(job, index) in jobs" :key="index">
      <div class="experiences__role">
        {{ job.role }}<strong>@ {{ job.company }}</strong>
      </div>
      <div class="experiences__duration">{{ job.date }}</div>
      <ul
        class="experiences__missions"
        v-for="(mission, index) in job.missions"
        :key="index"
      >
        <li>{{ mission }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Experiences',
  data: () => ({
    title: ' Work Experiences',
    companies: ['Dotscreen', 'Kameleeon', 'My Little Paris'],
    jobs: [
      {
        company: 'Dotscreen',
        role: 'Front-end Developer ',
        date: 'Dec 2017 - Jul 2020',
        missions: [
          'Development of Media applications for TVs/STBs (such as Video on demand apps)',
          'UI/UX Development',
          'Unitary testing',
          'Agile methodologies',
          'Determined needs and work through user experience',
          'Worked for major international customers (Starzplay, Arte, Mediaset, FranceTV, Disney...)',
        ],
      },
    ],
  }),
}
</script>

<style>
.about__content h2 {
  font-weight: var(--bold);
  margin-top: 60px;
  margin-bottom: 20px;
  color: var(--purple);
  font-size: clamp(20px, 5vw, 2.5rem);
}

.experiences {
  position: relative;
  display: flex;
  flex-direction: column;
  color: var(--white);
  font-weight: var(--medium);
  max-width: 900px;
}

.experiences__labels {
  width: 100%;
}

.experiences__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.experiences__list li {
  text-align: center;
  font-size: var(--fs-p-small);
  padding: 10px 0;
  border-bottom: 1px solid var(--lightest-grey);
  color: var(--blue-purple);
}

.experiences__list .selected {
  color: var(--blue-purple);
  font-weight: var(--extra-bold);
  border-bottom: 1px solid var(--blue-purple);
  background-color: #31267a52;
}

.experiences__item {
  margin-top: 3px;
  padding: 5px 20px 20px;
}

.experiences__role {
  font-size: var(--fs-p-normal);
  margin: 20px 0 5px;
  font-weight: var(--bold);
}

.experiences__role strong {
  font-weight: var(--extra-bold);
  color: var(--purple);
}

.experiences__duration {
  font-size: var(--fs-p-smallest);
  color: var(--blue-purple);
}

.experiences__missions {
  margin-top: 10px;
  line-height: var(--lh);
  font-size: var(--fz-md);
}

.experiences__missions li {
  margin-bottom: 10px;
}

.experiences__missions li:before {
  content: '▶';
  color: var(--purple);
  display: inline-block;
  margin-right: 4px;
  font-size: var(--fs-p-smallest);
}
</style>
