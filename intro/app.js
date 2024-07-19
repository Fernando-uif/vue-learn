const { createApp, ref } = Vue;

const app = createApp({
  setup() {
    // Con ref estaremos creando variable reactiva ara que escuche si es que cambia
    const message = ref("I'm Fernando");
    const author = ref("Im batman");

    const changeMessage = () => {
      message.value = "Hello and changing the message";
      author.value = "Vegeta";
    };

    // Lo que queremos exponer a nuestro template
    return {
      message,
      author,
      changeMessage
    };
  },
});

app.mount("#myApp");
