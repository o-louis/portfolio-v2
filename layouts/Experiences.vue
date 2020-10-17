<template>
  <div class="experiences">
    <h2><span>💻</span>{{ title }}</h2>
    <div class="experiences__labels">
      <ul class="experiences__list">
        <li
          v-for="(company, index) in companies"
          :key="index"
          @click="selectJob(index)"
        >
          {{ company }}
        </li>
      </ul>
    </div>
    <div
      v-for="(job, index) in jobs"
      :key="index"
      class="experiences__item hide"
    >
      <div class="experiences__role">
        {{ job.role }}<strong> @ {{ job.company }}</strong>
      </div>
      <div class="experiences__duration">{{ job.date }}</div>
      <ul
        v-for="(mission, id) in job.missions"
        :key="id"
        class="experiences__missions"
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
      {
        company: 'Kameleoon',
        role: 'Front-end Developer ',
        date: 'Jui 2017 - Sep 2020',
        missions: [
          'Implemented A/B Testing',
          'Ensured the smooth running of the simulated Kameleoon product for most popular browsers',
          'UI/UX Development',
          'Agile methodologies',
          'Responsive Design',
        ],
      },
      {
        company: 'My Little Paris',
        role: 'System and Network Administrator (internship)',
        date: 'Sep 2015 - Dec 2015',
        missions: [
          'Analyzed software, network, system issues and assisted users in their resolutions.',
          'Implemented scripts to optimize task',
          'Prepped and applied basic configurations for various network and system hardwares.',
        ],
      },
    ],
  }),
  mounted() {
    this.highlightJob(0)
  },
  methods: {
    selectJob(index) {
      this.resetHighlight(index)
      this.highlightJob(index)
    },
    highlightJob(index) {
      const projectItem = document.querySelectorAll('.experiences__list li')
      const descriptionItem = document.querySelectorAll('.experiences__item')
      projectItem[index].classList.add('selected')
      descriptionItem[index].classList.remove('hide')
    },
    resetHighlight(index) {
      const projectItem = document.querySelectorAll('.experiences__list li')
      const descriptionItem = document.querySelectorAll('.experiences__item')

      projectItem.forEach((item) => {
        item.classList.remove('selected')
      })

      descriptionItem.forEach((item) => {
        item.classList.add('hide')
      })
    },
  },
}
</script>

<style defer>
.about__content h2 {
  font-weight: var(--bold);
  margin-top: 60px;
  margin-bottom: 20px;
  color: var(--blue-purple);
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

.hide {
  display: none;
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
  cursor: pointer;
}

.experiences__list .selected {
  color: var(--blue-purple);
  font-weight: var(--extra-bold);
  border-bottom: 1px solid var(--blue-purple);
  background-color: #31267a52;
}

.experiences__item {
  margin-top: 3px;
  padding: 5px 20px 0px;
  max-height: 500px;
}

.experiences__role {
  font-size: var(--fs-p-normal);
  margin: 20px 0 5px;
  font-weight: var(--bold);
}

.experiences__role strong {
  font-weight: var(--extra-bold);
  color: var(--light-green);
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

@media (min-width: 480px) {
  .experiences__missions {
    font-size: var(--fz-lg);
  }
}
</style>
