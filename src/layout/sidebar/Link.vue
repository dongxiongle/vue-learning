<template>
  <component v-bind="linkProps(to)">
    <slot />
  </component>
</template>
<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator';
  import { isExternal } from '../../utils/index';
  @Component({
    name: 'Link'
  })
  export default class Linl extends Vue {
    @Prop({ required: true, default: '' }) to!: string;
    
    private linkProps(url: string) {
      if (isExternal(url)) {
        return {
          is: 'a',
          href: url,
          target: '_blank',
          rel: 'noopener'
        }
      }
      return {
        is: 'router-link',
        to: url
      }
    }
  }
</script>
