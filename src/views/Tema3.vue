<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Tipos de oclusión, movimientos mandibulares


    .row.mb-5.align-items-center
      .col-lg-7.col-md

        p.mb-4 La oclusión dental es la relación que guardan los dientes entre sí en estado de reposo. Sin embargo, la maloclusión dental también es consecuencia de los diferentes cambios que hay en el crecimiento de ambos maxilares y de las distorsiones de la posición dental dentro de cada arcada.

        .cajon.color-acento-contenido.p-4
          p.mb-0 La maloclusión es el término clínico para los dientes desalineados que pueden provocar complicaciones de salud bucal como sobremordida, mordida inferior o mordida cruzada. A medida que los dientes están desalineados, se vuelve difícil realizar funciones bucales vitales como masticar, morder y hablar, pero el ortodoncista está especialmente capacitado para tratar todo tipo de maloclusiones y puede corregir de manera efectiva la forma en que los dientes se alinean en la mandíbula. En el siguiente video se pueden observar los diferentes tipos de maloclusiones.

      .col-lg-5.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema3/img1.png' alt='')


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-left")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/D3SkVUMv6xc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    p.mb-4 La maloclusión o mala mordida puede deberse a numerosos factores donde se incluyen las causas hereditarias, los defectos congénitos o incluso los hábitos adquiridos en la primera etapa de la vida. A continuación se muestra un gráfico que resume estos factores.

    .titulo-sexto.color-acento-contenido.mb-4
      h5 Figura 2.
      span Oclusión dental

    .bg_azul_dark.p-5

      .row.justify-content-center.my-4
        .col-lg-8.col-md-10
          figure
            img(src="@/assets/curso/temas/tema3/figura1.png")

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
