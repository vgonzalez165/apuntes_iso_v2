# 4.- Arquitectura de los Sistemas Operativos

Según su arquitectura los sistemas operativos pueden ser:


### 4.1.- Sistemas monolíticos

Se caracterizan por una ausencia de estructura. El sistema operativo está formado por una serie de procedimientos que se pueden invocar entre sí sin ninguna restricción. No hay ningún tipo de ocultamiento de la información.

Ejemplos: FreeBSD, MS-DOS, familia Windows 9x


### 4.2.- Sistemas en capas

El sistema operativo se estructura en una jerarquía de capas. Algunos ejemplos de este tipo de sistemas son Venus o MULTICS, aunque el primer sistema operativo con esta arquitectura fue THE, desarrollado por E. W. Djistra y sus alumnos, el cual tenía las siguientes capas:
    - Capa 5: interfaz de usuario
	- Capa 4: aloja los programas de usuario
	- Capa 3: control de los dispositivos de E/S
	- Capa 2: administración de la comunicación inter-proceso y la consola de operador
	- Capa 1: administración de memoria y discos
	- Capa 0: asignación del procesador haciendo transparente la multiprogramación a las capas superiores.


### 4.3.- Máquinas virtuales

Fue implementada por primera vez en el VM/370 y consiste en separar los dos componentes principales de un sistema de tiempo compartido: *multiprogramación* y una *máquina extendida* con una interfaz más cómoda que el hardware desnudo.

El corazón del sistema, llamado **monitor de máquina virtual**, se ejecuta directamente sobre el hardware y realiza la multiprogramación. Este proporciona varias máquinas virtuales a la capa superior que son copias exactas del hardware desnudo y que incluyen modo de kernel/usuario, E/S, interrupciones, … Cada máquina es idéntica al hardware verdadero, por lo que puede soportar cualquier sistema operativo soportado por la máquina real. Diferentes máquinas virtuales pueden ejecutar diferentes sistemas operativos.

Otro ejemplo es el modo 8086 virtual disponible en los procesadores de 32 bits de Intel que permite ejecutar antiguos programas de MS-DOS.


### 4.4.- Exokernels

Va un paso más allá de los sistemas operativos de máquina virtual proporcionando a cada usuario un clon de la computadora real, pero con un subconjunto de los recursos. En la capa más baja se encuentra un programa llamado **exokernel** que asigna recursos a las máquinas virtuales y que garantiza que ninguna máquina utilice los recursos de otra.

Su ventaja es que ahorra una capa de mapeo o correspondencia. Algunos sistemas operativos que siguen esta filosofía son Nemesis, de la Universidad de Cambridge, y ExOS, del MIT.


### 4.5.- Micronúcleo o microkernel

Una tendencia reciente es quitar lo posible del modo kernel, dejando un microkernel mínimo que provee un conjunto de primitivas o llamadas mínimas para implementar los servicios básicos. Sus ventajas son una reducción de la complejidad y la descentralización de los fallos.

Algunos ejemplos son Amoeba, Minix, Hurd o Symbian.


### 4.6.- Sistemas por módulos

Es el enfoque de la mayoría de los sistemas modernos. El núcleo está formado por módulos independientes entre sí. Los módulos se cargan en el núcleo cuando se necesiten, ya sea en tiempo de ejecución o durante el arranque.

Ejemplos: Linux (con el comando `lsmod` se pueden ver los módulos cargados) o Solaris.

