<template>
  <section id="projects" class="projects">
    <div class="projects__content">
      <h1><span>💡</span>{{ title }}</h1>
      <div class="projects__grid">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="projects__item"
        >
          <div class="projects__image">
            <img :src="project.img" :alt="project.alt" />
          </div>
          <div class="projects__description">
            <h4>{{ project.title }}</h4>
            <p>
              {{ project.desc }}
              <br />
              <strong>{{ project.languages }}</strong>
              <br />
              {{ project.option }}
              <span v-if="project.links" class="projects__link">
                <a
                  v-if="project.links.view"
                  :href="project.links.view"
                  target="__blank"
                  >View</a
                >
                <a
                  v-if="project.links.source"
                  :href="project.links.source"
                  target="__blank"
                  >Source</a
                >
                <a
                  v-if="project.links.other"
                  :href="project.links.other"
                  target="__blank"
                  >ReactJS</a
                >
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import starzplay from '../static/starzplay.png'
import arte from '../static/arte.png'
import mernblog from '../static/mernblog.png'
import chatapp from '../static/chatapp.png'
import covidtracker from '../static/covidtracker.png'
import authentication from '../static/authentication.png'
import moovee from '../static/moovee.png'
import hackernews from '../static/hackernews.png'

export default {
  name: 'Projects',
  data: () => ({
    title: ' Projects',
    projects: [
      {
        title: 'Starzplay',
        img: starzplay,
        alt: 'starzplay',
        desc: 'Official Starzplay app',
        languages: 'Javascript, jQuery, MVC',
        option: 'Confidential source',
      },
      {
        title: 'ARTE',
        img: arte,
        alt: 'arte',
        desc: 'Official ARTE for HbbTV, Orange STBs and freebox',
        languages: 'Javascript, MVC',
        option: 'Confidential source',
      },
      {
        title: 'Bloggie',
        img: mernblog,
        alt: 'mernblog',
        desc: 'Blog with CRUD actions',
        languages: 'MERN stack: Reactjs, Node.js',
        option: '',
        links: {
          view: 'https://bloggie.netlify.app',
          source: 'https://github.com/o-louis/',
        },
      },
      {
        title: 'Covid Tracker 19',
        img: covidtracker,
        alt: 'covidtracker',
        desc: 'Tracker of the Covid-19',
        languages: 'Reactjs',
        option: '',
        links: {
          view: 'https://covid-trackerv2.netlify.app/',
          source: 'https://github.com/o-louis/covid-tracker-v2',
        },
      },
      {
        title: 'Chat application',
        img: chatapp,
        alt: 'chatapp',
        desc: 'Create or join a room',
        languages: 'Reactjs, Express, SocketIO',
        option: '',
        links: {
          view: 'https://reachatt.netlify.app',
          source: 'https://github.com/o-louis/chat-app',
        },
      },
      {
        title: 'Authentication',
        img: authentication,
        alt: 'authentication',
        desc: 'Backend authentication',
        languages: 'Node.js, JwT and ejs',
        option: '',
        links: {
          source: 'https://github.com/o-louis/authentication',
        },
      },
      {
        title: 'Movie application',
        img: moovee,
        alt: 'movieapp',
        desc: 'Search and consult Movie details',
        languages: 'Vue.js',
        option: '',
        links: {
          view: 'https://vueflixx.netlify.app/',
          source: 'https://github.com/o-louis/movie-vuejs',
          other: 'https://github.com/o-louis/movie-app',
        },
      },
      {
        title: 'Hacker News',
        img: hackernews,
        alt: 'hackernews',
        desc: 'Hacker news client',
        languages: 'Vue.js',
        option: '',
        links: {
          view: 'https://hackernews-v1.netlify.app',
          source: 'https://github.com/o-louis/hacker-news',
        },
      },
    ],
  }),
}
</script>

<style>
.projects {
  margin-top: 10px;
  padding-bottom: 20px;
  color: var(--white);
}

.projects__content {
  width: var(--width-container);
  max-width: var(--max-width-container);
  margin: 0 auto;
}

.projects__content h1 {
  text-transform: uppercase;
  font-weight: var(--extra-bold);
  margin-bottom: 40px;
  letter-spacing: 0.1rem;
  color: var(--blue-purple);
  font-size: clamp(26px, 5vw, var(--fz-heading));
}

.projects__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: minmax(150px, 190px);
  grid-gap: 20px 10px;
}

.projects__item {
  position: relative;
  overflow: hidden;
}

.projects__image {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  filter: grayscale(1);
}

.projects__image img {
  height: 100%;
}

.projects__description {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  color: var(--white);
  background-color: var(--purple);

  transform: translateY(-100%);
  transition: transform 0.4s ease-in-out;
}

.projects__item:hover .projects__description {
  transform: translateY(0);
}

.projects__description h4 {
  font-size: var(--fs-h4);
  margin-bottom: 5px;
}

.projects__description p {
  font-size: var(--fs-p-desc);
  line-height: var(--lh);
}

.projects__description span {
  width: 100%;
  display: flex;
  margin-top: 20px;
  display: inline-block;
  margin-left: auto;
}

.projects__description a {
  border: 1px solid var(--white);
  margin-right: 3px;
  padding: 5px 20px;
  border-radius: 20px;
}

.projects__description a:hover {
  color: var(--purple);
  border-color: var(--purple);
  background-color: var(--white);
}

.projects__description span > a:nth-child(3) {
  margin-right: 0px;
}

@media (min-width: 480px) {
  .projects__grid {
    grid-auto-rows: auto;
  }
}
@media (min-width: 616px) {
  .projects__description h4 {
    font-size: 2rem;
  }
  .projects__description p {
    font-size: 1.3rem;
  }
}
@media (min-width: 923px) {
  .projects__grid {
    grid-auto-rows: minmax(190px, 120px);
  }
}
</style>
