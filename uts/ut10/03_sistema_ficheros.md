---
layout: default
title: El sistema de fichero
parent: UT09. Linux. Instalación y primeros pasos
nav_order: 3
---

# 3.- El sistema de ficheros

## 3.1.- Introducción al sistema de ficheros

La gestión del sistema de fichero en Linux difiere en algunos puntos a como lo hace Windows. La primera diferencia es que Linux no utiliza letras de unidades (por ejemplo, `C:`) en las rutas, sino que Linux almacena los ficheros en **una única estructura de directorios**, llamado **directorio virtual**. El directorio virtual contiene todos los ficheros de todas las unidades de almacenamiento instaladas en el PC unidos en una única estructura de directorios.

Todos los directorios de Linux cuelgan del **directorio raíz**, referenciado por el símbolo barra (`/`). Por ejemplo, una ruta en Linux será de la forma `/home/vgonzalez/docs/test.txt`.

Para incorporar otras unidades Linux crea directorios especiales denominados **puntos de montaje**, que son directorios en el directorio virtual a través de los que se puede acceder a otras unidades. Por ejemplo, Ubuntu monta algunas unidades en el directorio `/media`

 Sin embargo, las unidades se pueden montar en cualquier directorio. Por ejemplo, en un sistema con dos discos duros se puede instalar el sistema en el primer disco y montar el segundo disco en el directorio `/home`, de forma que todos los directorios de los usuarios estén en este segundo disco.

 Aunque puede variar según la distribución en la siguiente tabla se pueden ver los principales directorios de Linux y que se almacena en ellos.

 | Directorio | Uso                                                                                 |
 | ---------- | ----------------------------------------------------------------------------------- |
 | `/`        | El directorio raíz. No suele contener ficheros                                      |
 | `/bin`     | Contiene ejecutables o binarios, normalmente utilidades de usuario                  |
 | `/boot`    | Contiene los ficheros de arranque del sistema                                       |
 | `/dev`     | Almacena ficheros especiales que representan los dispositivos del sistema           |
 | `/etc`     | Ficheros de configuración del sistema                                               |
 | `/home`    | Aquí se almacenan las carpetas personales de los usuarios                           |
 | `/lib`     | Contiene las librerías del sistema y de las apliaciones                             |
 | `/media`   | Habitualmente utilizado como punto de montaje para los dispositivos extraíbles      |
 | `/mnt`     | Otro directorio también utilizado en ocasiones para el montaje de dispositivos      |
 | `/opt`     | Se suele utilizar para almacenar paquetes de software opcionales                    |
 | `/root`    | Directorio personal del administrador o *root*                                      |
 | `/sbin`    | Binarios del sistema, normalmente utilidades a nivel de administrador               |
 | `/tmp`     | Directorio para almacenar ficheros temporales                                       |
 | `/usr`     | Contiene software instalado por el usuario                                          |
 | `/var`     | Almacena ficheros que cambian frecuentemente, tales como ficheros de registro o log |


## 3.2.- Comandos básicos para trabajar con el sistema de ficheros

### 3.2.1.- ¿Dónde estoy? Comando `pwd`

Si queremos saber cuál es el directorio de trabajo actual el comando a utilizar es el `pwd`.

```bash
  vgonzalez@ubuntu:~$ pwd
  /home/vgonzalez
```

### 3.2.2.- Cambiando de directorio. Comando `cd`

El comando `cd` nos sirve para desplazarnos por los diferentes directorios del sistema de ficheros. Este comando toma un único parámetro que será el directorio destino al que nos queramos mover. Si no se indica ningún parámetro nos llevará al directorio home del usuario.

El directorio de destino se puede especificar de dos maneras diferentes:

- **Ruta absoluta**: define exactamente dónde está el directorio destino partiendo del directorio raíz. Por ejemplo `/home/vgonzalez/Escritorio/apuntesClase`
- **Ruta relativa**: aquí definimos como se accede al directorio partiendo del directorio actual. Una ruta relativa **no comienza** con el símbolo barra (`/`). Por ejemplo, si estamos en el directorio home y queremos referenciar el directorio anterior la ruta sería `Escritorio/apuntesClase`. Para ascender en la jerarquía de directorios podemos utilizar dos caracteres especiales:
    - El punto (`.`) que representa el directorio actual
    - El doble punto (`..`) que representa el directorio padre del actual.

Cada usuario en Linux tiene un directorio llamado **directorio personal** que es en el que tiene permisos de lectura y escritura sin necesidad de ser `root` y por tanto donde están todos sus archivos personales. Este directorio se encuentra dentro del directorio `/home` y se llama igual que el usuario.

Dada la importancia de este directorio, se puede hacer referencia a él mediante el carácter **virgulilla** (`~`) (combinación de teclas `AltGr + 4`), de forma que poner este carácter es equivalente a poner la ruta del directorio personal del usuario.

```bash
  vgonzalez@ubuntu:/etc$ cd ~
  vgonzalez@ubuntu:~$ 
```

También se puede incluir este carácter dentro de una ruta.

```bash
  vgonzalez@ubuntu:/etc$ cat ~/documentos/datos   # Equivale a /home/vgonzalez/documentos/datos
  hola mundo
```

### 3.2.3.- Mostrando el contenido del directorio. Comando `ls`

El comando `ls` es la herramienta que nos ayudará a ver qué ficheros y directorios tenemos en nuestro sistema de archivos.

En su forma más básica nos mostrará los ficheros y directorios situados en el directorio actual.

```bash
  vgonzalez@ubuntu:/$ ls
  bin   dev  home  lib    lib64   lost+found  mnt  proc  run   srv  tmp  var
  boot  etc  init  lib32  libx32  media       opt  root  sbin  sys  usr
```

#### Modificadores del comando `ls`

| Modificador      | Descripción                                                             |
| ---------------- | ----------------------------------------------------------------------- |
| `-F`             | Muestra información textual sobre el tipo de ficheros de que se trata   |
| `-a`, `--all`    | Muestra ficheros ocultos                                                |
| `-R`             | Muestra recursivamente el contenido del directorio y sus subdirectorios |
| `-l`             | Muestra los ficheros en formato largo                                   |


#### Ejemplos de uso

Cuando utilizamos un terminal en color se identifican los diferentes tipos de ficheros con un código de colores, por ejemplo, los ejecutables se muestran de color verde o los directorios de color azul. Cuando se utiliza un terminal sin colores la forma de saber de qué tipo de elementos se trata es con el **parámetro `-F`** que muestra información textual sobre cada tipo de archivo.

```bash
  vgonzalez@ubuntu:/$ ls -F
  bin@   dev/  home/  lib@    lib64@   lost+found/  mnt/  proc/  run/   srv/  tmp/  var/
  boot/  etc/  init*  lib32@  libx32@  media/       opt/  root/  sbin@  sys/  usr/
```
 
 Al contrario que en Windows, en Linux no hay un atributo de los ficheros que indique que están ocultos. Si se quiere ocultar un fichero o directorio simplemente hay que anteponer un punto (`.`) al nombre del fichero y eso hará que no se muestre con el comando `ls`. Para que este comando muestre todos los ficheros, incluidos los ocultos, hay que utilizar el **parámetro `-a`**
 
```bash
  vgonzalez@ubuntu:~$ ls -a
  .  ..  .bash_history  .bash_logout  .bashrc  .bashrc.original  .cache  .config  .dbus  .java  .profile  .zshrc
```

Otra opción interesante es el **parámetro `-R`**, que muestra el contenido del directorio actual y también el de todos sus subdirectorios de forma recursiva.
 
```bash
  vgonzalez@ubuntu:/$ ls -R
  .:
  bin   dev  home  lib    lib64   lost+found  mnt  proc  run   srv  tmp  var
  boot  etc  init  lib32  libx32  media       opt  root  sbin  sys  usr

  ./boot:
  grub

  ./boot/grub:
  themes
```

Por último, el **parámetro `-l`** muestra información extendida sobre los elementos que se encuentran en el directorio.
 
```bash
  vgonzalez@ubuntu:/etc$ ls -l
  total 1356
  -rw-r--r--  1 root     root      2981 Dec  8 23:29 adduser.conf
  drwxr-xr-x  3 root     root      4096 Jan 26 19:21 alsa
  drwxr-xr-x  2 root     root     20480 Jan 26 20:00 alternatives
  drwxr-xr-x  8 root     root      4096 Jan 26 19:59 apache2
  drwxr-xr-x  3 root     root      4096 Jan 26 19:54 apparmor
```

La información que nos muestra este parámetro es la siguiente:

- El **tipo** de fichero, que puede ser:
  - `d`: directorio
  - `-`: fichero
  - `c`: dispositivo de caracteres
  - `b`: dispositivo de bloques
- Los **permisos** del fichero, que se representan mediante tres tripletas de caracteres, y que veremos en la próxima unidad.
- El **número de enlaces** duros al fichero, los enlaces en linux son algo parecido a los accesos directos de Windows.
- El **nombre del usuario** propietario del fichero
- El **nombre del grupo** propietario del fichero
- El **tamaño** del fichero en bytes
- La **fecha y hora** de la última modificación del fichero
- El **nombre** del fichero o directorio

Otra utilidad del comando `ls`, al margen de los parámetros que admita, es la posibilidad de usar **caracteres comodín** para mostrar los ficheros que se adapten al **patrón** indicado.

Los caracteres comodín son:

- Un símbolo de **interrogación** (`?`) representa un carácter.
- Un símbolo de **asterisco** (`*`) representa cero o más caracteres.
- Los **corchetes** (`[]`) nos sirven para representar un conjunto de caracteres, por ejemplo, `ls [a-c]*` representa todos los ficheros que comiencen por a, b ó c
- El símbolo **exclamación** (`!`) se usa junto con los corchetes para indicar que el conjunto se excluye, por ejemplo `ls [!a-c]*` indica todos los ficheros que no comiencen por a, b ó c.


## 3.3.- Comandos para la manipulación de archivos

### 3.3.1.- Tocando ficheros. Comando `touch`

El comando `touch` es probablemente el comando más sencillo para manipular ficheros en Linux. Este comando recoge como parámetro el nombre de un fichero y lo crea si no existe. Si el fichero ya existiera actualiza su hora y fecha de modificación.

```shell
    vgonzalez@ubuntu:~$ touch test
    vgonzalez@ubuntu:~$ ls -l
    total 0
    -rw-r--r-- 1 vgonzalez vgonzalez 0 Feb 10 12:35 test
```
  
#### Modificadores del comando `touch`

| Modificador      | Descripción                                                             |
| ---------------- | ----------------------------------------------------------------------- |
| `-t <stamp>`     | Usa la fecha indicada en lugar de la habitual. El formato es `[[CC]YY]MMDDhhmm[.ss]`  |
| `-c`             | Si el fichero no existe no lo crea                                                    |

#### Ejemplos de uso

Si el fichero ya existe el comando `touch` simplemente cambia la hora de modificación del fichero indicado, sin alterar para nada su contenido. Si queremos que no ponga la fecha actual sino otra hora y fecha diferentes lo podemos hacer con el **parámetro `–t`**.
  
```shell
    vgonzalez@ubuntu:~$ touch -t 202201011200 test
    vgonzalez@ubuntu:~$ ls -l
    total 0
    -rw-r--r-- 1 vgonzalez vgonzalez 0 Jan  1 12:00 test
```


### 3.3.2.- Copiando ficheros. Comando `cp`

Para copiar ficheros de una localización a otra utilizaremos el comando `cp`.
  
```shell
    vgonzalez@ubuntu:~$ cp test ./pruebas/
```

Si tanto el origen como el destino son ficheros, el comando `cp` copiará el fichero origen a un nuevo fichero con el nombre de fichero indicado como destino.

```shell
    vgonzalez@ubuntu:~$ ls
    pruebas  test
    vgonzalez@ubuntu:~$ cp test test2
    vgonzalez@ubuntu:~$ ls
    pruebas  test  test2
```

#### Modificadores del comando `cp`

| Modificador      | Descripción                                                             |
| ---------------- | ----------------------------------------------------------------------- |
| `-p`, `--preserve`| Copia el fichero, pero mantiene la fecha de acceso y modificación del fichero original        |
| `-R`, `-r`        | Copia directorios recursivamente                                                              |
| `-f`, `--force`   | Por defecto, si el directorio de destino no puede ser abierto, lo elimina e intenta copiarlo  |
| `-s`              | Crea un enlace simbólico, se verá más adelante                                                |
| `i`               | Si el fichero destino existe, pregunta antes de sobreescribirlo                               |


### 3.3.3.- Moviendo ficheros. Comando `mv`

En Linux, renombrar un fichero es lo mismo que moverlo. El comando `mv` es el que utilizaremos para mover tanto ficheros como directorios.

```shell
    vgonzalez@ubuntu:~$ ls -l
    total 4
    drwxr-xr-x 2 vgonzalez vgonzalez 4096 Feb 10 12:43 pruebas
    -rw-r--r-- 1 vgonzalez vgonzalez    0 Jan  1 12:00 test
    vgonzalez@ubuntu:~$  mv test test2
    vgonzalez@ubuntu:~$  ls -l
    total 4
    drwxr-xr-x 2 vgonzalez vgonzalez 4096 Feb 10 12:43 pruebas
    -rw-r--r-- 1 vgonzalez vgonzalez    0 Jan  1 12:00 test2
```

Observa que al mover un fichero cambiamos su nombre, pero mantenemos el mismo número de inodo y fecha y hora de modificación.


### 3.3.4.- Borrando ficheros. Comando `rm`

El comando que nos permitirá borrar ficheros es `rm`. En su forma más sencilla solo requerirá el nombre del fichero a eliminar. Ten en cuenta que en el shell Bash no hay papelera, por lo que **el borrado de ficheros es irreversible**. Una buena práctica es acostumbrarse a utilizar el parámetro `–i`, sobre todo cuando utilizamos comodines, que nos preguntará antes de borrar cada fichero.

```shell
    vgonzalez@ubuntu:~$ ls
    pruebas  test  test2
    vgonzalez@ubuntu:~$ rm test* -i
    rm: remove regular empty file 'test'? y
    rm: remove regular empty file 'test2'? y
    vgonzalez@ubuntu:~$ ls
    pruebas
```

#### Modificadores del comando `rm`

| Modificador       | Descripción                                                             |
| ----------------- | ----------------------------------------------------------------------- |
| `-i`              | Si el fichero de destino existe pregunta antes de eliminarlo                                  |
| `-r`, `-R`        | Elimina los ficheros recursivamente. Este parámetro hay que utilizarlo con precaución         |
| `-d`, `--dir`     | Elimina directorios vacíos                                                                    |
| `-v`, `--verbose` | Modo *verboso*, muestra más información por pantalla                                          |q


### 3.3.5.- Editando ficheros. Comandos `nano`, `pico`, `vim` y `emacs`

Hay multitud de programas en Linux para editar ficheros de texto, tanto en entorno gráfico como en la terminal. 

Los más conocidos para editar textos desde una terminal son:

- `vim`: un editor de textos con multitud de opciones pero con una curva de aprendizaje muy pronunciada que hace que sea poco recomendable para principiantes.
- `GNU Emacs`: creado por Richard Stallman es un editor con infinitas opciones y funciones, llegando a disponer de una calculadora, un administrador de archivos o incluso un tetris.
- `nano`: un editor muy sencillo pero que cumple sobradamente con su función para la mayoría de las ocasiones. Además es fácil encontrarlo en la mayoríade las distribuciones ya instalado. 


## 3.4.- Comandos para la manipulación de directorios

### 3.4.1.- Creando directorios. Comando `mkdir`

El comando que nos permitirá crear directorios en Linux es `mkdir`.

```shell
    vgonzalez@ubuntu:~$ ls
    pruebas
    vgonzalez@ubuntu:~$ mkdir pruebas2
    vgonzalez@ubuntu:~$ ls
    pruebas  pruebas2
```

#### Modificadores del comando `mkdir`

| Modificador      | Descripción                                                             |
| ---------------- | ----------------------------------------------------------------------- |
| `-p`, `--parents` | Si el directorio padre del que se quiere crear no existe, también lo creao                    |
| `-v`, `--verbose` | Muestra un mensaje por cada directorio que crea                                               |


### 3.4.2.- Borrando directorios. Comando `rmdir`

El comando básico para eliminar directorios en Linux es `rmdir`. Algo importante es que este comando **solo funcionará con directorios vacíos**, mostrándonos un mensaje de error en caso de que el directorio no esté vacío.

```shell
    vgonzalez@ubuntu:~$ ls
    pruebas  pruebas2
    vgonzalez@ubuntu:~$ rmdir pruebas2
    vgonzalez@ubuntu:~$ ls
    pruebas
    vgonzalez@ubuntu:~$ rmdir pruebas
    rmdir: failed to remove 'pruebas': Directory not empty
```

#### Modificadores del comando `mkdir`

| Modificador      | Descripción                                                             |
| ---------------- | ----------------------------------------------------------------------- |
| `-p`, `--parents` | Elimina el directorio y los ancestros que se indiquen. El comando `rmdir -p a/b/c` equivale a `rm a/b/c a/b a` |


#### Ejemplos de uso
Para borrar directorios que no estén vacíos es preferible utilizar el comando `rm` utilizando el modificador `-r` que realizará un **borrado recursivo** del directorio y de todo su contenido.

```shell
    vgonzalez@ubuntu:~$ ls
    pruebas  pruebas2
    vgonzalez@ubuntu:~$ rmdir pruebas
    rmdir: failed to remove 'pruebas': Directory not empty
    vgonzalez@ubuntu:~$ rm -r pruebas
    vgonzalez@ubuntu:~$ ls
    pruebas2
```


## 3.5.- Extrayendo información de ficheros

### 3.5.1.- Metainformación del fichero. Comando `stat`

Como ya se vió con el comando `ls –l` es posible obtener mucha información acerca de un fichero. Sin embargo, el sistema almacena mucha más información acerca de los ficheros, como puede ser la fecha de creación, modificación y último acceso, o información relativa a los inodos.

El comando proporcionado por Bash para acceder a toda esta información es el comando `stat`, que nos mostrará toda la información disponible acerca del fichero.

```shell
    vgonzalez@ubuntu:~$ stat test
      File: test
      Size: 0               Blocks: 0          IO Block: 4096   regular empty file
    Device: 820h/2080d      Inode: 40072       Links: 1
    Access: (0644/-rw-r--r--)  Uid: ( 1000/vgonzalez)   Gid: ( 1000/vgonzalez)
    Access: 2022-02-10 13:04:53.076629500 +0100
    Modify: 2022-02-10 13:04:53.076629500 +0100
    Change: 2022-02-10 13:04:53.076629500 +0100
     Birth: -
```

### 3.5.2.- Cómo saber el tipo de fichero. Comando `file`

Una característica de Linux es que no utiliza la extensión de los ficheros para determinar el tipo de fichero de que se trata. 

Un tipo de información no mostrado por el comando `stat` es el tipo de fichero de que se trata. Podemos ver de qué tipo es un fichero mediante el comando `file`.

El comando `file` clasifica los ficheros en tres categorías:
- **Ficheros de texto**: ficheros que contienen caracteres imprimibles.
- **Ficheros ejecutables**: ficheros que pueden ser ejecutados en el sistema
- **Ficheros de datos**: ficheros binarios que contienen caracteres no imprimibles, pero que de alguna forma pueden ser utilizados por el sistema. En este caso indicará el tipo de ficheros que contiene.
 
```shell
    vgonzalez@ubuntu:/mnt/c/Users/victor$ file Desktop/temp.png
    Desktop/temp.png: PNG image data, 960 x 480, 8-bit/color RGB, non-interlaced
    vgonzalez@ubuntu:/mnt/c/Users/victor$ file energy-report.html
    energy-report.html: HTML document, UTF-8 Unicode (with BOM) text, with very long lines, with CRLF, CR line terminators
```

### 3.5.3.- Echando un vistazo al fichero. Comando `cat`

El comando `cat` muestra el contenido de un fichero de texto

```shell
    vgonzalez@ubuntu:~$ cat test
    hola mundo!!!
```

#### Modificadores del comando `cat`

| Modificador       | Descripción                                                             |
| ----------------- | ----------------------------------------------------------------------- |
| `n`               | Numera las líneas mostradas                                                                   |
| `-b`              | Solo numera las líneas que tienen texto, ignorando las líneas en blanco                       |
| `-s`              | Si el fichero tiene grupos de varias líneas en blanco consecutivas las comprime en una sola   |
| `-T`              | Muestra visualmente los caracteres de tabulación, reemplazándolos por la combinación de caracteres `^I` |



### 3.5.4.- Viendo el contenido de un fichero. Comandos `more` y `less`

El comando `more` visualizará una página y esperará antes de seguir mostrándonos un *prompt*. El prompt de `more` admite una serie de órdenes que se muestran en la siguiente tabla.
 
| Opción | Descripción                                      |
| ------ | ------------------------------------------------ |
| H      | Muestra la ayuda                                 |
| espacio| Avanza a la siguiente página del texto           |
| z      | Avanza a la siguiente página del texto           |
| ENTER  | Avanza una línea                                 |
| d      | Avanza media pantalla de texto                   |
| q      | Salir del programa                               |
| /exp   | Busca el texto inicado en el fichero             |
| n      | Busca la siguiente ocurrencia del texto buscado  |
| =      | Muestra el número de la línea actual             |

El comando `less` es una evolución de `more` que, además de las opciones disponibles en `more` permite al usuario moverse libremente por el fichero utilizando las teclas de cursor.


### 3.5.5.- Leyendo partes de un fichero. Comandos `head` y `tail`

Hay ocasiones en que no es necesario mostrar un fichero completo, sino que lo que se desea es ver unas pocas líneas del mismo. En estos casos son muy interesantes los comandos `head` y `tail`, que mostrarán respectivamente las primeras o las últimas filas de un fichero.

```bash
  victor@ubuntu:~$ head /etc/passwd
  root:x:0:0:root:/root:/bin/bash
  daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
  bin:x:2:2:bin:/bin:/usr/sbin/nologin
  sys:x:3:3:sys:/dev:/usr/sbin/nologin
  sync:x:4:65534:sync:/bin:/bin/sync
  games:x:5:60:games:/usr/games:/usr/sbin/nologin
  man:x:6:12:man:/var/cache/man:/usr/sbin/nologin
  lp:x:7:7:lp:/var/spool/lpd:/usr/sbin/nologin
  mail:x:8:8:mail:/var/mail:/usr/sbin/nologin
  news:x:9:9:news:/var/spool/news:/usr/sbin/nologin
```

#### Modificadores del comando `tar`

Los modificadores más relevantes de estos comandos son los siguientes.

| Modificador | Descripción |
| ----------- | ------------|
| `-c bytes`  | Muestra únicamente los primeros (o últimos) `bytes` caracteres del fichero |
| `-n lines`  | Muestra únicamente las primeras (o últimas) `lines` líneas del fichero |
| `-v`        | Modo *verboso* |
| `-q`        | No muestra el nombre del fichero, se aplica cuando se pasa más de un fichero como parámetro |


#### Ejemplos de uso

**Ejemplo 1**

Mostrar las 5 últimas líneas del fichero `/etc/passwd`

```bash
  victor@ubuntu:~$ tail -n 5 /etc/passwd
  tcpdump:x:108:113::/nonexistent:/usr/sbin/nologin
  sshd:x:109:65534::/run/sshd:/usr/sbin/nologin
  landscape:x:110:115::/var/lib/landscape:/usr/sbin/nologin
  pollinate:x:111:1::/var/cache/pollinate:/bin/false
  victor:x:1000:1000:,,,:/home/victor:/bin/bash
```

**Ejemplo 2**

Con el comando `head`, si prededemos el número de líneas del modificador `-n` (o de bytes del modificador `-c`) por el carácter menos (`-`) comenzará a contar las líneas por el final. Por ejemplo, si queremos mostrar todas las líneas del fichero `/etc/passwd` salvo las 25 últimas lo haríamos de la siguiente forma.

```bash
  victor@ubuntu:~$ head -n -25 /etc/passwd
  root:x:0:0:root:/root:/bin/bash
  daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
  bin:x:2:2:bin:/bin:/usr/sbin/nologin
  sys:x:3:3:sys:/dev:/usr/sbin/nologin
  sync:x:4:65534:sync:/bin:/bin/sync
  games:x:5:60:games:/usr/games:/usr/sbin/nologin
```

Análogamente, con el comando `tail` podremos utilizar el carácter más (`+`) para indicar que comience a contar las líneas por el principio.


## 3.6.- Búsqueda y compresión de ficheros

### 3.6.1.- Comprimiendo ficheros. Comandos `bzip`, `gzip` y `zip`

De forma análoga a WinZip en Windows, Linux dispone de un gran número de herramientas de compresión de datos. Algunas de las más utilizadas son las siguientes:

- `bzip2`: es un paquete compuesto por las cuatro herramientas indicadas a continuación:
  - `bzip2` para comprimir ficheros. Por defecto el comando `bzip2` reemplaza el fichero indicado por el fichero comprimido, el cual se identifica por la extensión `.bz2`.
  - `bzcat` que muestra el contenido de ficheros de texto comprimidos.
  - `bunzip2` para descomprimir ficheros
  - `bzip2recover` cuya utilidad es intentar recuperar datos de ficheros comprimidos dañados.

- `gzip`: probablemente la herramienta de compresión más popular. Como en el caso anterior incluye varias aplicaciones:
  - `gzip` para comprimir ficheros
  - `gzcat` para mostrar el contenido de los ficheros comprimidos
  - `gunzip` para descomprimir ficheros.

-	`zip`: es compatible con la versión de MS-DOS y Windows e incluye cinco utilidades:
  - `zip` crea un fichero comprimido
  - `zipcloak` crea un fichero comprimido y cifrado
  - `zipnote` extrae los comentarios de un fichero zip
  - `zipsplit` divide un fichero zip en fichero más pequeños del tamaño indicado
  - `unzip` extrae los ficheros y directorios de un fichero comprimido.



### 3.6.2.- Más compresión. Comando `tar`

Aunque el comando `zip` sirve para comprimir varios ficheros y directorios en un solo fichero, es más común utilizar el comando `tar` para archivar varios ficheros en uno solo.

El formato del comando `tar` es el siguiente:

```bash
  tar función [opciones] objeto1 objeto2 …
```

Donde `función` será la operación que va a realizar (concatenar, crear, diferencia, borrado, anexión, listado, actualización o extracción) y `opciones` los modificadores adicionales que se quieran añadir al comando.

#### Modificadores del comando `tar`

| Modificador | Modificador largo | Descripción |
| ----------- | ----------------- | ------------|
| `-A`        | `--concatenate`   | Anexa un archivo *tar* a otro ya existente |
| `-c`        | `--create`        | Crea un nuevo archivo *tar* |
| `-d`        | `--diff`          | Comprueba las diferencias entre un archivo *tar* y el sistema de ficheros |
|             | `--delete`        | Elimina un fichero de un archivo *tar* |
| `-r`        | `--append`        | Añade ficheros al final de un archivo *tar* |
| `-t`        | `--list`          | Muestra el contenido de un archivo *tar* existente |
| `-u`        | `--update`        | Añade ficheros a un archivo *tar* existente que son más recientes que el fichero con el mismo nombre en el archivo *tar* |
| `-x`        | `--extract`       | Extrae los ficheros de un archivo *tar* |
| `f file`    |                   | Envía la salida al fichero (o dispositivo) `file` |
| `-p`        |                   | Conserva los permisos del fichero |
| `-v`        |                   | Modo *verboso* |
| `z`         |                   | Redirige la salida al comando `gzip` para compresión |
| `-j`        |                   | Redirige la salida al comando `bzip2` para compresión |


#### Ejemplos de uso

Crea un fichero llamado `test.tar` con el contenido de los directorios `test` y `test2`.

```bash
  victor@ubuntu:~$ tar -cvf test.tar test/ test2
  test/
  test/file2
  test/file1
  test2/
  test2/file3
```

Muestra, pero no extrae, el contenido del fichero `test.tar`.

```bash
  victor@ubuntu:~$ tar -tf test.tar
  test/
  test/file2
  test/file1
  test2/
  test2/file3
```

Extrae el contenido del fichero `test.tar`.

```bash
  victor@ubuntu:~$ tar -xvf test.tar
  test/
  test/file2
  test/file1
  test2/
  test2/file3
```


### 3.6.1.- Comando `find`

El comando `find` de Linux es una herramienta sumamente útil cuando queremos localizar archivos o directorios en el sistema de ficheros, ya que permite establecer una gran cantidad de condiciones, como búsquedas por permisos, usuarios, grupos, tipo de fichero, fecha de creación o tamaño.

La sintaxis de este comando es la siguiente:

```bash
  find [opciones] [ruta...] [expresión]
```

Donde:

- `opciones` son los modificadores que se pueden aplicar al comando
- `ruta...` indica el directorio padre a partir del cuál se va a realizar la búsqueda
- `expresión` indicará las condiciones de búsqueda y puede incluir modificadores, patrones de búsqueda, ...

Por ejemplo:

```bash
  $ find -L /var/www -name "*.js"
```

En este ejemplo podemos ver:

- La opción `-L` indica que debe seguir enlaces simbólicos
- La ruta `/var/www` especifica el directorio en el que se buscará
- La expersión `-name "*.js"` dice que lo que se quiere buscar son archivos Javascript con extensión `js`.


#### Modificadores del comando `find`

| Modificador         | Descripción |
| ------------------- | ----------- |
| `-name nombre_fich` | Indica el nombre del fichero (puede incluir comodines) a buscar |
| `-not`              | Busca los ficheros que **no cumplan** la condición indicada |
| `-iname`            | No distingue entre mayúsculas y minúsculas en el nombre |
| `-type tipo`        | Indica qué tipos de ficheros se deben buscar. `tipo` puede ser `f` (fichero regular), `d` (directorio), `l` (enlace simbólico), `c` (dispositivo de caracteres), ... |
| `-size n`           | Indica el tamaño del fichero a buscar |
| `-mtime n`          | Busca los archivos modificados en los últimos `n` días |
| `-atime n`          | Busca los archivos accedidos en los últimos `n` días |
| `-perm p`           | Indica los permisos que debe tener el fichero |
| `-user u`           | Usuario propietario del archivo |
| `-group g`          | Grupo propietario del archivo |



#### Ejemplos de uso

**Ejemplo 1** 

Muestra todos los ficheros con extensión `pdf` (o cualquier variante con mayúsculas, p.e. `.PDF`) dentro del directorio personal.

```bash
  $ find ~ -type f -iname *.pdf
```

En el modificador `type` se indica que queremos buscar ficheros con el valor `f`. Otros valores posibles son:

- `f`: ficheros regulares
- `d`: directorios
- `l`: enlaces simbólicos
- `c`: dispositivos de carácter
- `b`: dispositivos de bloque


**Ejemplo 2**

Muestra todos los ficheros cuyo tamaño sea exactamente 1024 bytes dentro del directorio `/tmp`.

```bash
  $ find /tmp -type f -size 1024c
```

La unidad de medida se indica mediante el carácter `c`. Otras unidades de medida pueden ser:

- `b`: bloques de 512 bytes (valor por defecto)
- `c`: bytes
- `w`: palabras de 2 bytes
- `k`: kilobytes
- `M`: megabytes
- `G`: gigabytes

Si en lugar de querer un tamaño exacto queremos un tamaño superior o inferior al indicado se indica precediendo el tamaño con los caracteres `-` (menor) p `+` (mayor).

Por ejemplo, para mostrar todos los archivos del sistema de ficheros cuyo tamaño sea superior a 1 gigabyte lo haríamos de la forma:

```bash
  $ find / -type f -size +1G
```

Si se quiere indicar un rango entonces habría que poner dos veces el modificador.

```bash
  $ find / -type f -size +1G -size -2G
```

**Ejemplo 3**

Muestra todos los archivos con extensión `.conf` del directorio `/etc` que han sido modificados en los últimos cinco días.

```bash
  $ find /etc/ -name "*.conf" -mtime 5
```


**Ejemplo 4**

Muestra todos los ficheros del directorio `/var/www/html` que tengan exactamente los permisos `664`.

```bash
  $ find /var/www/html -type f -perm 664
```

El valor de los permisos puede ir precedido por los caracteres `/` o `-`.

- El **carácter barra `/`** indica que al menos una categoría (usuario, grupo u otros) debe coincidir con los permisos especificados.
- El **carácter menos `-`** indica que por lo menos se deben complir los permisos indicados, aunque también pueden ser superiores.


**Ejemplo 5**

Muestra todos los ficheros que pertencen al usuario `victor`.

```bash
  $ find / -type f -user victor
```


### 3.6.2.- Comando `locate`




## 3.7.- Enlaces

Hay ocasiones en las que es necesario tener dos o más copias de un mismo fichero en el sistema de ficheros. Una opción que permite el sistema de ficheros de Unix es, en lugar de tener varias copias físicas diferentes, tener **una única copia física y múltiples copias virtuales**, denominadas **enlaces**.

Un enlace es una entrada en un directorio que apunta a la localización real del fichero. En Linux hay dos tipos diferentes de enlaces a ficheros:

- Enlaces simbólicos o blandos
- Enlaces duros

Un **enlace duro** crea un fichero diferente que contiene información acerca del fichero original y dónde localizarlo. Cuando referencias un enlace duro a un fichero, es igual que si referenciaras al fichero.

Se puede crear un enlace duro a un fichero utilizando el modificador `-l` con el comando de copia `cp`.

```shell
    vgonzalez@ubuntu:~$ ls -il test
    40072 -rw-r--r-- 1 vgonzalez vgonzalez 37 Feb 10 13:14 test
    vgonzalez@ubuntu:~$ cp test test2 -l
    vgonzalez@ubuntu:~$ ls -il
    total 8
    40072 -rw-r--r-- 2 vgonzalez vgonzalez 37 Feb 10 13:14 test
    40072 -rw-r--r-- 2 vgonzalez vgonzalez 37 Feb 10 13:14 test2
```

El parámetro `–l` crea un enlace duro para el fichero test1 y lo denomina test2. En esta captura podemos apreciar dos cosas:

- Primero que el número de inodo (primera columna) de ambos ficheros es el mismo indicando que en realidad ambos ficheros son el mismo
- Y segundo, que el número de enlaces indicados para cada fichero (tercera columna) es dos.

Hay que tener en cuenta que, dado que ambos ficheros comparten el inodo, solo se pueden crear enlaces duros entre ficheros **del mismo dispositivo**.

Por otro lado, para crear un **enlace simbólico** hay que utilizar el comando `cp`, pero con el parámetro –s.
  
```shell
    vgonzalez@ubuntu:~$ cp test test3 -s
    vgonzalez@ubuntu:~$ ls -il
    total 8
    40072 -rw-r--r-- 2 vgonzalez vgonzalez 37 Feb 10 13:14 test
    40072 -rw-r--r-- 2 vgonzalez vgonzalez 37 Feb 10 13:14 test2
    40058 lrwxrwxrwx 1 vgonzalez vgonzalez  4 Feb 10 13:25 test3 -> test
```

Lo primero que podemos apreciar en la captura es que ahora los ficheros tienen números de inodo diferentes, por lo que el sistema los trata como ficheros independientes. Por otro lado, el tamaño del fichero también es diferente. Un fichero enlazado solo necesita guardar información acerca del fichero origen, no los datos que tenga.

Otra forma de crear enlaces es utilizando el comando `ln`. Por defecto este comando crea enlaces duros, pero se puede utilizar el parámetro `–s` para crear enlaces simbólicos.


***
[Volver al índice principal](index_UT10.md)