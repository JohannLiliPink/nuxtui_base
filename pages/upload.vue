<script setup>
  // https://theburningmonk.com/2020/04/hit-the-6mb-lambda-payload-limit-heres-what-you-can-do/
  // https://docs.aws.amazon.com/amplify/latest/userguide/quotas-chapter.html
  const { $pako } = useNuxtApp()
  import AppLayout from '~/layout/AppLayout.vue';
  const {menuActive} = useTheme()

  const selectedFile = ref('');
  const loading = ref(false);

  onMounted( () => {

    if (process.client)
    {

      setTimeout(() => {
          
        menuActive( 'dashboard' );

      }, 11);

    }

  });

  function year()
  {
    return new Date().getFullYear();
  }


  async function uploadFile( ambos = false )
  {

    loading.value = true;
    const formData = new FormData();

    if (selectedFile.value)
    {
      formData.append('file_', selectedFile.value);
    }else{
      alert('Debe seleccionar un archivo');
      loading.value = false;
      return;
    }



    try {
      
      $fetch( '/api/upload?endpoint=uploadFile' , {
        method: 'POST',
        headers: { 
          "Access-Control-Allow-Origin": "*" , 
          'Access-Control-Allow-Headers': '*' , 
          // 'Content-Type': 'multipart/form-data'
        },
        body:formData
      })
      .then( ( response ) => {

        if ( response.status == 'success' )
        {
          loading.value = false;
          alert('OK')
        }
        
        if ( response.status == 'error' )
        {
          alert('ERROR')
          loading.value = false;
        }
        
        
      })
      .catch( ( error ) => {
        
        selectedFile.value = '';
        loading.value = false;
        alert('ERROR')
        
      });

    } catch (error) {
      console.error('Error al subir la imagen:', error);
    }

  };

  async function uploadFileTwo( ambos = false )
  {

    alert('OK 777 - 777')

    loading.value = true;
    const formData = new FormData();

    if (selectedFile.value)
    {
      formData.append('file', selectedFile.value);
    }else{
      alert('Debe seleccionar un archivo');
      loading.value = false;
      return;
    }

    try {
      
      $fetch( 'https://7lpdufl50m.execute-api.us-east-2.amazonaws.com/test/upload' , {
        method: 'POST',
        headers: { 
          // "Access-Control-Allow-Origin": "*" , 
          // 'Access-Control-Allow-Headers': '*' , 
          // 'Content-Type': 'multipart/form-data'
        },
        body:formData
      })
      .then( ( response ) => {

        if ( response.status == 'success' )
        {
          loading.value = false;
          alert('OK')
        }
        
        if ( response.status == 'error' )
        {
          alert('ERROR')
          loading.value = false;
        }
        
        
      })
      .catch( ( error ) => {
        
        selectedFile.value = '';
        loading.value = false;
        alert('ERROR')
        
      });

    } catch (error) {
      console.error('Error al subir la imagen:', error);
    }

  };

  function onFileChange(event)
  {
    const file = event.target.files[0];
    if (file)
    {
      selectedFile.value = event.target.files[0];
    }
  };

  const uploadFileThree = async () => {

    loading.value = true;

    if (selectedFile.value)
    {
    }else{
      alert('Debe seleccionar un archivo');
      loading.value = false;
      return;
    }

    // Comprimir el archivo antes de enviarlo
    const compressedFile = await compressFile( selectedFile.value );

    // Enviar el archivo comprimido al servidor Nuxt.js
    const formData = new FormData();
    formData.append( 'file_', compressedFile );

    console.log( 'JOHANN RAMIREZ::: ' , compressedFile )
    alert( 'SIZE:: Bytes = ' + compressedFile.size + ' -  Megabytes = '+ bytesToMegabytes(compressedFile.size) )
    return

    try {
      
      $fetch( '/api/upload?endpoint=uploadFile' , {
        method: 'POST',
        headers: { 
          "Access-Control-Allow-Origin": "*" , 
          'Access-Control-Allow-Headers': '*' , 
          // 'Content-Type': 'multipart/form-data'
        },
        body:formData
      })
      .then( ( response ) => {

        if ( response.status == 'success' )
        {
          loading.value = false;
          alert('OK')
        }
        
        if ( response.status == 'error' )
        {
          alert('ERROR')
          loading.value = false;
        }
        
        
      })
      .catch( ( error ) => {
        
        selectedFile.value = '';
        loading.value = false;
        alert('ERROR')
        
      });
      
    } catch (error) {
      console.error('Error al subir la imagen:', error);
      alert('ERROR F')
    }
  };

  // Función para comprimir el archivo usando la librería 'pako'
  const compressFile = async (file) => {

    alert( 'SIZE:: Bytes = ' + file.size + ' -  Megabytes = '+ bytesToMegabytes(file.size) )
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);

    return new Promise((resolve, reject) => {
      reader.onload = () => {
        const compressedData = $pako.gzip(new Uint8Array(reader.result));
        const compressedFile = new File([compressedData], file.name, { type: file.type });
        resolve(compressedFile);
      };

      reader.onerror = (error) => {
        reject(error);
      };
    });
  };

  function bytesToMegabytes(bytes)
  {
    return bytes / (1024 * 1024);
  }
  
</script>

<template>

  <AppLayout title="Dashboard" >

    <template #breadcrumb>
        
      <nav>
        <ol class="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
          <li class="text-sm leading-normal">
            <a class=" text-slate-600" href="#">Pages</a>
          </li>
          <li class="text-sm pl-2 capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/']" aria-current="page">Dashboard</li>
        </ol>
        <h6 class="mb-0 font-bold capitalize">Dashboard</h6>
      </nav>
      
    </template>

    <!-- row 1 -->
    <div class="flex flex-wrap -mx-3">

      <div class="max-w-sm w-full lg:max-w-full rounded overflow-hidden shadow-lg">

        <div class="flex justify-center pt-6">

          <button type="button"  @click="$refs.fileInput.click()"  class="bg-black hover:bg-purple-600 text-white font-bold py-2 px-4 rounded flex pt-2"  >
            <i class="fas fa-upload mr-1"></i>
            <span>
              Selecionar archivo
            </span>
          </button>

          <input
            type="file"
            class="hidden"
            @change="onFileChange"
            ref="fileInput"
          />
        
        </div>

        <button type="button"  @click="uploadFile()"  class="bg-black hover:bg-purple-600 text-white font-bold py-2 px-4 rounded flex pt-2"  >
          <span>
            Enviar 1
          </span>
        </button>

        <button type="button"  @click="uploadFileTwo()"  class="bg-black hover:bg-purple-600 text-white font-bold py-2 px-4 rounded flex pt-2"  >
          <span>
            Enviar 2
          </span>
        </button>

        <button type="button"  @click="uploadFileThree()"  class="bg-black hover:bg-purple-600 text-white font-bold py-2 px-4 rounded flex pt-2"  >
          <span>
            Enviar 3
          </span>
        </button>
      
      </div>
      
    </div>
    
  </AppLayout>

</template>
