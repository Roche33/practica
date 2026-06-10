// Patrón muy común en código Vue/React real
async function fetchUser(id) {
  // Tu solución:
  // 1. Haz el fetch a `https://jsonplaceholder.typicode.com/users/${id}`
  // 2. Si la respuesta no es ok, lanza un error con el status
  // 3. Retorna { data: usuario, error: null } si todo bien
  // 4. Si hay error, retorna { data: null, error: mensaje }
  // (sin re-lanzar la excepción)
  try{
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if(!res.ok){
        throw new Error(`error:${res.status}`)
    }
    const data = await res.json();
    return {data, error: null}
  }catch(err){
    return{data:null, error: err.message};
  }
}

// Uso esperado:
const { data, error } = await fetchUser(1);
if (error) showErrorBanner(error);
else renderUser(data);