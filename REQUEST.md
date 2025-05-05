# Sistema de Administración de Tareas en Consola

Vamos a construir un sistema básico en consola para administrar tareas, usando todo lo aprendido: **tipado**, **interfaces**, **clases** y **métodos**.  
Cada alumno sorteado realizará una tarea específica del proyecto, programando en vivo frente a la clase.

---

## Listado de tareas para sorteo

1. **Definir la interfaz `Tarea`:**  
   Crear una interfaz que tenga las propiedades:  
   `titulo: string`, `descripcion: string`, y `completado: boolean`.

2. **Crear la clase `GestorTareas`:**  
   Definir la clase e incluir una propiedad privada:  
   `tareas: Tarea[] = [];`.

3. **Agregar el método `agregarTarea()`:**  
   Método público que reciba una tarea como parámetro y la agregue al arreglo `tareas`.

4. **Agregar el método `completarTarea()`:**  
   Método que reciba un índice (`number`) y cambie `completado` a `true` si la tarea existe.

5. **Agregar el método `listarTareas()`:**  
   Recorre todas las tareas e imprime el título junto a su estado (`✅ completada`, `❌ pendiente`).

6. **Instanciar la clase `GestorTareas`:**  
   Crear un objeto `gestor` desde la clase y dejarlo listo para usar.

7. **Agregar la primera tarea:**  
   Usar `gestor.agregarTarea(...)` para agregar una tarea con `completado = false`.

8. **Agregar la segunda tarea:**  
   Igual que la anterior, pero con una tarea diferente.

9. **Listar todas las tareas:**  
   Ejecutar `gestor.listarTareas()` para mostrar el estado inicial.

10. **Completar la primera tarea:**  
    Llamar a `gestor.completarTarea(0);` y mostrar el cambio.

11. **Volver a listar tareas:**  
    Llamar de nuevo a `listarTareas()` para confirmar que la tarea fue completada.

---

## Extras opcionales (si hay tiempo)

12. **Eliminar una tarea:**  
    Crear un método `eliminarTarea(indice: number)` que elimine la tarea con `.splice()`.

13. **Contar tareas pendientes:**  
    Método `contarPendientes(): number` que devuelva la cantidad de tareas no completadas.

14. **Agregar prioridad con enum:**  
    Ampliar la interfaz `Tarea` para incluir `prioridad: 'Alta' | 'Media' | 'Baja'` y mostrarla al listar.

