# back-colektia
Se desarrollo una API del lado del servidor. Donde se guarda la información para hacer reseñas de películas. 
Se puede colocar el título, director, una reseña y un puntaje. Los datos son almacenados en una base de datos relacional,
y las distintas reseñas se muestran en pantalla

# Instalación para correr en el localhost
Es necesario clonar el repo en tu compu
Dentro del directorio, instalar las depencias (npm install)
Vas necesitar tener instalado Nodejs y MySql donde deberas crear una base de datos
En un archivo .env guardar las siguientes variables de entorno

- *DB_USER="tu usuario de mySql"
- *DB_PASSWORD="tu password de mySql"
- *DB_HOST="localhost"
- *DB_PORT="el puerto donde corre tu base de datos"
- *DB_NAME="el nombre de tu base de datos"
