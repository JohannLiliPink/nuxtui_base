export const useAuth = () => {

  const config  = useRuntimeConfig();
  const urlApi  = config.public.urlApi;

  return {
    urlApi
  }

}
