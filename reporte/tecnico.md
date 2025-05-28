# Reporte Técnico: Implementación de Web Component <product-card>

## Introducción

Durante el desarrollo de mi componente personalizado <product-card>, apliqué varias tecnologías propias de los Web Components, como el *Shadow DOM, los **slots* y el uso de *atributos dinámicos* y *variables CSS*, con el objetivo de crear un componente reutilizable, encapsulado y personalizable.

## Uso del Shadow DOM

Implementé el *Shadow DOM* utilizando this.attachShadow({ mode: 'open' }) dentro del constructor de la clase ProductCard. Esto me permitió encapsular completamente el HTML y el CSS del componente, asegurándome de que:

- Los estilos definidos dentro del componente no afectaran otros elementos de la página.
- El componente se comportara de forma predecible, sin depender de estilos globales.

Gracias al Shadow DOM, el componente puede integrarse en cualquier aplicación sin preocuparse por conflictos de estilos u otras interferencias externas.

## Uso de Slots

También utilicé *slots* para permitir la personalización del contenido mostrado en el componente. Definí dos slot con los nombres "title" y "price", ubicados en:

```html
<h3 class="title"><slot name="title">Producto</slot></h3>
<p class="price"><slot name="price">$0.00</slot></p>

Esto permitió que, desde el archivo index.html, se pudieran inyectar títulos y precios personalizados directamente dentro del componente, como por ejemplo:

<product-card image="zapatos.jpg">
  <span slot="title">Tenis Nike Air</span>
  <span slot="price">$109.99</span>
</product-card>

Así, el contenido se vuelve dinámico y flexible, permitiendo a distintos desarrolladores reutilizar el componente con diferentes datos sin modificar su estructura interna.

Ventajas de los Web Components en Aplicaciones Modulares
Al trabajar con Web Components, noté varias ventajas significativas para el desarrollo modular:

Reutilización de código: Una vez creado el componente <product-card>, pude insertarlo múltiples veces con distintos datos sin duplicar lógica ni estilos.

Encapsulamiento: Gracias al Shadow DOM, los estilos y scripts del componente no interfieren con el resto de la aplicación, lo cual facilita el mantenimiento.

Personalización simple: Usé atributos HTML (title, price, image) y variables CSS (--primary-color, --border-radius) para permitir que otros desarrolladores personalicen el diseño del componente directamente desde HTML.

Compatibilidad con frameworks: Los Web Components funcionan bien tanto en aplicaciones vanilla JS como en entornos con frameworks modernos como React, Vue o Angular.

Conclusión
Crear el componente <product-card> me permitió entender cómo los Web Components facilitan el desarrollo de interfaces modulares, mantenibles y personalizables. Gracias al Shadow DOM y a los slots, logré encapsular el estilo y permitir la personalización del contenido, manteniendo la independencia del componente respecto al resto de la página.