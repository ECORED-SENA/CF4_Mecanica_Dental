<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Tipos de aparatos


    .bg_img_01.p-5
      .row.align-items-center.justify-content-start
        .col-lg-6
          p.my-5 Es importante resaltar que el técnico dental debe tener presente, al elaborar los diferentes aparatos de ortodoncia u ortopedia, la orden de trabajo, y estos se confeccionan teniendo en cuenta un conjunto de elementos que, al interactuar en boca, permitan no solo contener, sino, además, corregir la posición y función del sistema estomatognático, y que el profesional odontólogo es quien los instala y ajusta; por tal razón a continuación se presentan los diferentes dispositivos médicos sobre medida bucal:



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
