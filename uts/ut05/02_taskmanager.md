# 2.- El administrador de tareas

El **Administrador de tareas** es una herramienta de supervisión que permite controlar la actividad del sistema en tiempo real y visualizar la información del estado del procesador, de la memoria de las aplicaciones y de los procesos.

Hay múltiples forma de llegar al *Administrador de tareas*:

- Desde el menú contextual de la barra de tareas
- Pulsando `Ctrl+Mayus+Esc`
- Pulsando `Ctrl+Alt+Supr` y seleccionando *Administrador de tareas*
- Ejecutando el comando `taskmgr.exe`.

La primera vez que se accede al *Administrador de tareas* se ve una ventana que apenas muestra información, pero si pulsamos en *Más detalles* pasará a otro modo en el que tenemos gran candidad de información repartida en siete pestañas.

## 2.1.- Pestaña Procesos

![Pestaña Procesos del Administrador de tareas1](imgs/taskmgr_procesos.png)

Esta primera pestaña muestra información sobre todos los procesos que se están ejecutando en el sistema. Los datos relativos a cada proceso se encuentran en una serie de columnas que se pueden personalizar haciendo click derecho sobre el encabezado de una de ellas y seleccionando cuáles queremos mostrar.

Los campos más relevantes son:

- **CPU, Memoria y Disco**: muestra el porcentaje de uso de la CPU, la cantidad de memoria RAM que ocupa el mismo y su tasa de utilización del disco duro. Estos tres componentes (CPU, RAM y disco) son los principales cuellos de botella en el ordenador, por lo que en situaciones en que haya una bajada brusca del rendimiento del sistema debemos acudir aquí para localizar el proceso que tiene un consumo excesivo de alguno de estos recursos.
- **Estado**: muestra el estado del proceso, aunque únicamente muestra un valor cuando el proceso está *suspendido*. En las últimas versiones de Windows 10 muestra esta situación mediante el icono de una hoja.
- **PID**: cada proceso en Windows tiene asociado un identificador único denominado **PID** (**Process IDentifier**) y esto es lo que se muestra en esta columna. Cada vez que ejecutamos un programa y se genera el proceso correspondiente el sistema le otorgará un PID único. Por ello, podemos tener diferentes instancias de un mismo programa con diferentes PID, ya que son procesos diferentes.
- **Consumo de energía**: da una medida del impacto energético que tiene la ejecución de cada proceso en el sistema.
- **Línea de comandos**: la ruta del programa que se ejecutó para crear este proceso y los parámetros de ejecución de dicho programa. Puede ser útil en el caso de procesos sospechosos para identificar el origen de los mismos.

Además, en la parte inferior derecha se encuentra el botón **Finalizar tarea**, que envía una señal de apagado al proceso que tengamos seleccionado, interesantes en situaciones en la que no podamos cerrar algún programa, por ejemplo, porque se haya colgado.


## 2.2.- Pestaña Rendimiento

![Pestaña Rendimiento del Administrador de tareas](imgs/taskmgr_rendimiento.png)

Esta pestaña muestra información visualmente sobre el consumo de recursos en el sistema a lo largo del tiempo, siendo estos recursos la CPU, la memoria RAM, las unidades de almacenamiento, los adaptadores de red y la tarjeta gráfica. Se puede ver información más específica de cada uno de los recursos seleccionándolo en la parte izquierda.

La información que podemos encontrar en cada apartado es:

- **CPU**: en la gráfica vemos el porcentaje de uso de la CPU. Además, se muestra la siguiente información:
  - Modelo de procesador y frecuencia del mismo
  - Uso y Velocidad: el porcentaje en forma numérica del uso del procesador por parte de los procesos y la frecuencia.
  - Procesos, subprocesos e identificadores.
  - Características físicas, como número de *cores* físicos y lógicos, si está habilitada la virtualización y el tamaño de cada una de las cachés.
- **Memoria**: en esta gráfica se mostrará la evolución del uso de la memoria RAM en el tiempo. También se pueden ver algunos valores de uso de RAM, así como las características físicas de la misma: número de slots, frecuencia y factor de forma.
- **Discos**: hay una pestaña para cada unidad de almacenamiento del sistema, con gráficas del tiempo de actividad y de velocidad de transferencia.
- **WiFi**: los adaptadores de red también disponen de su gráfica indicando la velocidad de transferencia en cada momento.


## 2.3.- Pestaña Historial de aplicaciones

![Pestaña Historial de aplicaciones](imgs/taskmgr_historial.png)

En esta pestaña se agrupan los procesos en aplicaciones, mostrando el uso de recursos de cada una de ellas.

## 2.4.- Pestaña Inicio

![Pestaña Inicio](imgs/taskmgr_inicio.png)

Durante el arranque del sistema se cargan múltiples procesos del sistema operativo, pero también hay ocasiones en que es necesario cargar procesos del usuario. Por ejemplo, si usamos Dropbox es necesario que dicho programa esté siempre en ejecución para poder sincronizar los datos con la nube. 

En la pestaña *Inicio* es donde se pueden ver todos los programas del usuario que se cargar durante el proceso de arranque y es importante porque algunos pueden tener un impacto muy negativo en el tiempo de arranque, siendo tarea del administrador determinar cuáles deben ejecutarse y cuáles no en función de su impacto y de la necesidad de los mismos.

Para tomar esta decisión hay una serie de columnas con información sobre los programas (se puede escoger que información mostrar haciendo click derecho en el encabezado de cualquier columna), siendo las más relevantes:

- **Estado**: si dicha aplicación está habilitada (y por tanto se carga durante el equipo) o deshabilitada. Se puede cambiar el estado de una aplicación en el menú contextual de la misma.
- **Impacto de inicio**: da una medida (alto, medio o bajo) de la sobrecarga que le supone al sistema lanzar esa aplicación.
- **CPU al inicio** y **E/S de disco**: le da un valor numérico como tiempo de CPU y transferencia de disco al impacto.
- **Línea de comandos**: muestra la ubicación del programa que corresponde a cada entrada. Es útil para saber exactamente a qué aplicación corresponde cada entrada, sobre todo en aquellas en las que el nombre es poco descriptivo. También puede ser interesante ver este valor en caso de entradas sospechosas ya que hay código malicioso que se puede incluir en esta lista para estar siempre en ejecución.

Además de la información relativa a los procesos que se lanzan durante el arranque del sistema operativo también se puede ver en la parte superior derecha el valor **Última hora de BIOS**, que muestra el tiempo que tardó la BIOS en ejecutar el POST durante el último arranque del sistema. Un tiempo muy alto podría significar un problema de mala configuración de la BIOS o ser indicativo de un posible problema de hardware.


## 2.5.- Pestaña Detalles

![Pestaña Detalles](imgs/taskmgr_detalles.png)

Muestra información de todos los procesos que están en ejecución en el sistema en el momento. Los valores más interesantes son:

- **PID**: cada proceso en Windows tiene un valor única asignado denominado **Identificador de proceso** y que podemos ver en esta columna.
- **Estado**: indica el estado de su ciclo de vida en que se encuentra el proceso.
- **Nombre de usuario**: el usuario que ha lanzado el procesos, lo que implica los permisos que tendrá el proceso ya que cada proceso tendrá tantos privilegios como el usuario que lo ha ejecutado.
- **CPU y consumo de memoria**: el porcentaje de CPU y la cantidad de memoria RAM utilizados por el proceso.


## 2.6.- Pestaña Servicios

![Pestaña Servicios](imgs/taskmgr_servicios.png)

Esta pestaña muestra información sobre los servicios que hay en el sistema, de los que se hablará más adelante.
