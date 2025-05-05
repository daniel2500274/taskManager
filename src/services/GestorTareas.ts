import { Tarea } from '../models/tarea';


class GestorTareas {
  almacenTareas:Tarea[]=[];
  constructor(){
    this.almacenTareas=[]
  }
  
  agregarTarea(titulo:string, descripcion:string):void{
    const nuevaTarea ={
      id:Date.now(),
      titulo:titulo,
      descripcion:descripcion,
      completado:false,
      estado:'Pendiente'
    }
    this.almacenTareas.push(nuevaTarea)
  }
  completarTarea(titulo:string):void{
    const tarea = this.almacenTareas.find(t=> t.titulo === titulo)
    if (tarea){
      tarea.completado=true;
      tarea.estado='Completado';
      console.log('Tarea completada')
    }else {
      console.log('Tarea no encontrada, imposible actualizar')
    }
    
  }
}
