(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["creditos","chunk-515a8379"],{"0095":function(t,e,r){"use strict";r("95c5")},"13aa":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-fluid banner-interno"},[r("div",{staticClass:"banner-interno__fondo",style:{"background-image":"url("+t.globalData.fondoBannerPrincipal+")"}}),r("div",{staticClass:"container"},[r("div",{staticClass:"banner-interno__titulo py-5"},[t.icono.length?r("div",{staticClass:"banner-interno__titulo__icono me-3"},[r("i",{class:t.icono})]):t._e(),r("h2",{staticClass:"mb-0",domProps:{innerHTML:t._s(t.titulo)}})])])])},n=[],s={name:"BannerInterno",props:{icono:{type:String,default:""},titulo:{type:String,default:""}},data:function(){return{}},computed:{globalData:function(){return this.$config.global}}},o=s,i=(r("0095"),r("2877")),c=Object(i["a"])(o,a,n,!1,null,null,null);e["default"]=c.exports},"159b":function(t,e,r){var a=r("da84"),n=r("fdbc"),s=r("17c2"),o=r("9112");for(var i in n){var c=a[i],l=c&&c.prototype;if(l&&l.forEach!==s)try{o(l,"forEach",s)}catch(d){l.forEach=s}}},"17c2":function(t,e,r){"use strict";var a=r("b727").forEach,n=r("a640"),s=n("forEach");t.exports=s?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},"2e81":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"curso-main-container creditos-vista"},[r("BannerInterno",{attrs:{icono:"far fa-registered",titulo:"Créditos"}}),r("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[r("div",{staticClass:"creditos mb-4 mb-md-5"},t._l(Object.keys(t.creditosData),(function(e,a){return r("div",{staticClass:"creditos__item",class:a!=Object.keys(t.creditosData).length-1?"mb-4":""},[r("div",{staticClass:"creditos__titulo"},[t._v(t._s(t.configTitulos[e]))]),r("table",[r("tbody",t._l(t.creditosData[e],(function(a,n){return r("tr",{key:e+n},[r("td",{staticClass:"text-bold",attrs:{colspan:"2"},domProps:{innerHTML:t._s(t.renderText(a.nombre))}}),r("td",{attrs:{colspan:"2"},domProps:{innerHTML:t._s(t.renderText(a.cargo))}}),r("td",{attrs:{colspan:"3"},domProps:{innerHTML:t._s(t.renderText(a.centro))}})])})),0)])])})),0),t._m(0),r("Footer",{attrs:{"all-round":""}})],1)],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row mb-4 mb-md-5"},[a("div",{staticClass:"col-md-6 mb-4 mb-md-0"},[a("div",{staticClass:"tarjeta credito p-3 text-center h-100"},[a("img",{staticClass:"d-inline-block",staticStyle:{width:"70px"},attrs:{src:r("ef52")}}),a("p",[t._v("Fotografías y vectores tomados de "),a("a",{attrs:{href:"https://www.freepik.es/",target:"_blank"}},[t._v("www.freepik.es")]),t._v(", "),a("a",{attrs:{href:"https://www.shutterstock.com/",target:"_blank"}},[t._v("www.shutterstock.com")]),t._v(", "),a("a",{attrs:{href:"https://unsplash.com/",target:"_blank"}},[t._v("unsplash.com ")]),t._v("y "),a("a",{attrs:{href:"https://www.flaticon.com/",target:"_blank"}},[t._v("www.flaticon.com")])])])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"tarjeta credito p-3 text-center h-100"},[a("img",{staticClass:"d-inline-block",staticStyle:{width:"70px"},attrs:{src:r("e1f5")}}),a("p",{staticClass:"mb-0"},[t._v("Licencia creative commons CC BY-NC-SA"),a("br"),a("a",{attrs:{href:"https://creativecommons.org/licenses/by-nc-sa/2.0/",target:"_blank"}},[t._v("ver licencia")])])])])])}],s=(r("159b"),r("13aa")),o=r("e9c6"),i={name:"Creditos",components:{BannerInterno:s["default"],Footer:o["a"]},data:function(){return{configTitulos:{liderEquipo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",contenidoInstruccional:"CONTENIDO INSTRUCCIONAL",desarrolloProducto:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",gestoresRepositorio:"GESTORES DE REPOSITORIO"}}},computed:{creditosData:function(){return this.$config.creditos}},methods:{renderText:function(t){var e="";return Array.isArray(t)?t.forEach((function(t,r){e+=(r?"<br/>":"")+t})):e+=t,e}}},c=i,l=(r("5d8e"),r("2877")),d=Object(l["a"])(c,a,n,!1,null,null,null);e["default"]=d.exports},"5d8e":function(t,e,r){"use strict";r("f728")},"95c5":function(t,e,r){},a640:function(t,e,r){"use strict";var a=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&a((function(){r.call(null,e||function(){throw 1},1)}))}},e1f5:function(t,e,r){t.exports=r.p+"img/creditos-cc.4836eb56.svg"},ef52:function(t,e,r){t.exports=r.p+"img/creditos-img.689712e2.svg"},f728:function(t,e,r){}}]);
//# sourceMappingURL=creditos.e7fb2782.js.map