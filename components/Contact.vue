<template>
  <section :id="isInHeader ? null : 'contact'" class="contact">
    <div class="contact__content">
      <div class="contact__social">
        <div class="contact__networks">
          <a
            v-for="(link, index) in contacts"
            :key="index"
            :href="link.path"
            target="__blank"
            :aria-label="link.icon.name"
          >
            <font-awesome-icon :icon="[link.icon.prefix, link.icon.name]"
          /></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  props: {
    isInHeader: Boolean,
  },
  data: () => ({
    contacts: [
      {
        path: 'https://www.linkedin.com/in/oriane-louis/',
        icon: { prefix: 'fab', name: 'linkedin' },
      },
      {
        path: 'https://github.com/o-louis',
        icon: { prefix: 'fab', name: 'github' },
      },
      {
        path: 'https://codepen.io/reavenclaw',
        icon: { prefix: 'fab', name: 'codepen' },
      },
      {
        path: 'mailto:oriane.louis.pro@gmail.com',
        icon: { prefix: 'far', name: 'envelope' },
      },
    ],
  }),
}
</script>

<style>
/* For the navigation place */
.nav-wrapper .contact {
  padding-top: 0;
  color: var(--purple);
}
.nav-wrapper .contact__social {
  text-align: center;
}
.nav-wrapper .contact__content {
  margin-top: 50px;
}
.nav-wrapper .contact__networks {
  font-size: 30px;
}

/* For the section */
.contact {
  padding: 80px 0 0px;
  color: var(--white);
  width: 100%;
}

.contact__content {
  width: var(--width-container);
  max-width: var(--max-width-container);
  margin: 0 auto;
}

.contact__social {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact__email {
  font-size: var(--fs-p-normal);
  font-weight: var(--medium);
}

.contact__networks {
  font-size: var(--fs-h3);
  margin-bottom: 20px;
}
.contact__networks a {
  margin-right: 15px;
}

.contact__networks a:nth-child(4) {
  margin-right: 0;
}
</style>
