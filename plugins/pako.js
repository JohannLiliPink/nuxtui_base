import pako from 'pako';

export default defineNuxtPlugin(() => {
  return {
    provide: {
      pako
    }
  }
})