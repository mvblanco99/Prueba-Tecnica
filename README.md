# Instrucciones:

El candidato debe completar las tareas y responder las preguntas.
Se espera que el candidato escriba componentes de React funcionales y use React Hooks cuando sea necesario.
El candidato debe manejar adecuadamente el estado y las props de los componentes.
Se anima al candidato a utilizar React Router para la navegación entre páginas.
La prueba incluye tanto la creación de componentes como la respuesta a preguntas conceptuales.
Tareas:

# Creación de Componentes:

a. Crea un componente llamado Counter que muestre un contador y dos botones: "Increment" y "Decrement". El contador debe comenzar en 0 y debe aumentar o disminuir cuando se presionen los botones correspondientes. ✅

b. Crea otro componente llamado TodoList que permita agregar elementos a una lista de tareas pendientes. Debe mostrar una lista de elementos y un campo de entrada para agregar nuevas tareas. Las tareas deben poder marcarse como completadas y eliminarse de la lista. ✅

# Navegación con React Router:

a. Crea una aplicación de una sola página (SPA) que utilice React Router para navegar entre dos páginas: "Inicio" y "Acerca de". Cada página debe tener su propia URL y mostrar contenido apropiado.

# Preguntas Conceptuales:

a. Explica la diferencia entre useState y useEffect en React. ✅

    El useState es un hook que se utiliza para guardar informacion importante que se utilizara
    durante la ejecucion de la aplicacion, ha esta informacion se llama 'estado'.

    El useEffect, es un mecanismo que implementa react con el fin de realizar acciones en diferentes
    circustancias, por ejemplo, cuando cambian los valores del estado se puede utilizar el useEffect
    para realizar una llamada a una api, aplicar un calculo complejo u otro tipo de accion.

    Para simplificar el useState guarda informacion necesaria para la app, y el useEffect permite 
    ejecutar acciones cuando esta informacion se actualiza durante la ejecucion de la app.

b. ¿Qué son las "props" en React y cómo se utilizan para pasar datos entre componentes? ✅

    Las props son valores que se pueden pasar como parametros a los componentes con el fin de que
    estos puedan ser usados durante la ejecucion de la aplicacion. Se pueden usar props para pasar estilos
    Css,funciones, objetos, etc, todo esto con el fin de enriquecer de funcionalidad o mejorar visualmente los componentes de la aplicaicon.  

c. ¿Por qué se utiliza key en las listas de elementos en React? ¿Cuál es su propósito? ✅

    React exige una key como identificador Unico para los elementos que se muestran en listas con el
    fin de proporcionar control al momento de realizar acciones (CRUD) evitando asi la redundacia
    de datos y la actualizacion o borrado de informacion sensible.

d. ¿Qué es un componente controlado y por qué son importantes en React? ✅

    Un componente controlado es aquel se sirve de los mecanismos que proporciona
    React para manejar eficaz y eficientemente los datos que necesita la aplicacion
    para su funcionamiento. 
