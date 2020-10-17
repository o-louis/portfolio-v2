<template>
  <footer>
    <div class="copyright">
      <p>Made with ❤️ by Oriane Louis</p>
      <p>
        © 2020, Built with
        <a href="https://nuxtjs.org/" target="__blank">NuxtJS</a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style defer>
footer {
  display: flex;
  justify-content: center;
  padding: 0px 0 10px;
  color: var(--blue-purple);
}

.copyright {
  font-size: var(--fs-p-small);
  text-align: center;
}

.copyright a {
  text-decoration: underline;
}
.copyright a:hover {
  color: var(--white);
}
</style>
