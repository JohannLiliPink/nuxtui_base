import {FormData} from "node-fetch-native";

export default defineEventHandler(async (event) => {

  // const { public: { tokenAdmin , urlBackend }, } = useRuntimeConfig()

  const body = await readBody(event)
  const query = await getQuery(event);
  
  let endpoint;
  let data;
  let response;
  let auth = '';
  // let urlBackend = 'http://127.0.0.1:8000/api/';
  let urlBackend = 'http://3.91.204.251/';
  
  
  if ( !query.endpoint )
  {
    data = await body.data;
    endpoint = body.endpoint;

    if ( body.auth )
    {
      auth = body.auth
    }

  }
  else
  {
    endpoint = await query.endpoint;
    data = await body;
  }


  if ( endpoint == 'uploadFile' )
  {

    const form = await readMultipartFormData(event);
    const formData = new FormData();

    formData.append(form[0]?.name, new Blob([form[0].data], {type: form[0].type}), form[0].filename);

    formData.append( 'root' , 25 );

    // let url_ = urlBackend+'aws_buckets/subir-archivo/'
    let url_ = urlBackend+'lili-drive/subir-archivo/'

    await $fetch( url_ , {
      method: 'POST',
      headers: {
        "Access-Control-Allow-Origin": "*", 
        'Access-Control-Allow-Headers': '*',
      },
      body: formData,
    })
    .then( ( resp ) => {
      response = resp;
    })
    .catch( ( error ) => {
      
      response = error;
    });
  
  }  
  
  if (response)
  {
    return await response;
  };
  
  return response;

})