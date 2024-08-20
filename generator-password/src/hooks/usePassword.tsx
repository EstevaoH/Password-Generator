import { formSchemaInputs } from "@/types/schema";


export function usePassword(){
  

  function onSubmit(data: formSchemaInputs){
    console.log(data)
  }

  return {
    onSubmit
  }
}