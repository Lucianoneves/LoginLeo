import { getCookie } from 'cookies-next' 
import { useEffect } from 'react'
import { verifica } from '../services/user'

export default function Home() {
  
 return(
  <div>

    Pagina Segura  perfil do usario
    </div>
  )
}

export const getServerSidePorps =async (req,res) => {
  try{
    const token = getCookie ('autorization',{req,res})
  if (!token) throw new Error ('Token Inválido')

  verifica(token)
  return {
    props:{}
  }

  }catch(err){
    return{
      redirect:{
        permanent:false,
        destination: '/login'
      },
      props:{}
    }
  }

}


