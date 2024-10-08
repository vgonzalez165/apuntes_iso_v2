# 4.- Administración remota del servidor

## 4.1.- Administración remota desde RSAT

Uno de los aspectos a los que Microsoft le ha dado gran importancia en Windows Server 2012 es la administración de múltiples servidores de forma remota. Para conseguir este objetivo, el **Administrador del servidor** dispone de la posibilidad de añadir servidores para ser administrados de forma remota.

Aunque en las primeras versiones esta herramienta era exclusiva de Windows Server, actualmente también está disponible en Windows 10, de forma que se puede administrar cualquier servidor desde un equipo de escritorio.

Para tener disponible el Administrador del servidor en Windows 10, será necesario agregarlo, ya que está disponible como una característica. Para ello hemos de ir a *Inicio -> Configuración -> Aplicaciones -> Características opcionales -> Agregar una característica.* Una vez ahí, bajo el epígrafe de RSAT (Remote Server Administration Tool), tendremos todas las herramientas necesarias para administrar de forma remota el servidor, siendo la que nos interesa ahora la denominada *RSAT: Administrador del Servidor*.

Una vez que tenemos la herramienta, ya sea en Windows Server o en Windows 10 hay que realizar una serie de pasos previos para poder añadir servidores a la misma. Hay que tener en cuenta que estos pasos únicamente son necesarios únicamente si no tenemos un dominio de Active Directory


### 4.1.1.- Comprobar si el servicio WinRM está preparado

En primer lugar, el servidor deberá tener en ejecución el servicio WinRM, que es el encargado de gestionar la administración remota. Por defecto debería estar habilitado, pero no estaría de más verificarlo mediante el siguiente comando:

```powershell
PS C:\>Get-Service WinRM
```

En el campo Status debería indicar que se está ejecutando. Si no fuera así debemos habilitarlo, siendo la forma más sencilla mediante la ejecución del comando:

```powershell
PS C:\>Enable-PSRemoting
```

Alternativamente se puede utilizar el comando WinRM quickconfig, que realiza las mismas funciones. Estas funciones son:

-   Iniciar el servicio WinRM y configurar su modo de inicio en automático.
-   Configurar un listener para los puertos de administración remota
-   Definir las excepciones necesarias en el firewall.


### 4.1.2.- Configurar la red

Ya se comentó anteriormente que uno de los primeros pasos después de instalar el servidor es asignarle una **IP estática**, así como un **nombre de equipo** descriptivo. Si no se hubiera hecho sería muy conveniente hacerlo ahora.

Un requisito importante es que las interfaces red utilizadas deben tener el perfil como privado. Podemos comprobar si es así con el comando:

```powershell
PS C:\>Get-NetConnectionProfile
```

Con este comando veremos todas las interfaces de red mostrando en cada una el perfil (*NetworkCategory*) y el identificador de la interfaz (*Interface Index*) que necesitaremos si hay que cambiar el perfil.

Si alguna interfaz estuviera marcada como pública se debe pasar a privada con el siguiente comando, indicando el índice de interfaz correspondiente.

```powershell
PS C:\>Set-NetConnectionProfile –InterfaceIndex 11 -NetworkCategory Private
```


### 4.1.3.- Relaciones de confianza

Tanto el servidor como el equipo desde el que vamos a administrarlo deben tener una relación de confianza mutua. Esta relación es automática en el caso de tener un dominio de Active Directory, pero debemos indicársela manualmente si nuestros equipos están en un grupo de trabajo. La forma de hacer es simplemente añadiendo el nombre del equipo en el que confiamos en el fichero TrustedHosts mediante la siguiente orden:

```powershell
PS C:\>Set-Item wsman:\localhost\client\TrustedHosts {nombre_servidor} –Concatenate -Force
```

Alternativamente, se pued	e utilizar la orden WinRM de la línea de comandos para conseguir el mismo objetivo de la forma:

```powershell
C:\> winrm s winrm/config/client '@{TrustedHosts="NOMBRE EQUIPO"}'
```

Llegados a este punto podemos comprobar que todo es correcto ejecutando el comando `Test-WSMan NOMBRE_EQUIPO`:

```powershell
PS C:\> Test-WSMan SERVER-2012R2

wsmid           : http://schemas.dmtf.org/wbem/wsman/identity/1/wsmanidentity.xsd
ProtocolVersion : http://schemas.dmtf.org/wbem/wsman/1/wsman.xsd
ProductVendor   : Microsoft Corporation
ProductVersion  : OS: 0.0.0 SP: 0.0 Stack: 3.0
```
 

### 4.1.4.- Añadir el equipo al Administrador del servidor

El último paso ya es añadir el servidor al Administrador del servidor, esto lo conseguimos yendo a *Administrar -> Agregar servidores -> DNS* e introduciendo el nombre del equipo que queremos administrar en el cuadro de búsqueda.

Una vez agregado nos pedirá las credenciales de un usuario con privilegios de administración en el servidor y ya lo tendremos disponible para su administración remota.

Como puede ser tedioso introducir las credenciales cada vez que vayamos a administrar el servidor, se puede configurar el equipo cliente para que las utilice por defecto cada vez que nos conectemos al servidor. Para ello tenemos el comando cmdkey que tiene la siguiente sintaxis:

```powershell
C:\> cmdkey /add:SERVER-2012R2 /user:Administrador /pass:P@ssw0rd
```


## 4.2.- Centro de Administración de Windows

En Windows Server 2019 Microsoft introdujo una nueva herramienta denominada **Centro de Administración del Servidor** (Windows Admin Center), que pretende simplificar la administración remota de servidores.

![Centro de Administración de Windows](imgs/04_02_admin_center.png)
 


***
[Volver al índice principal](index_UT07.md)
