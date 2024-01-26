1. Registro de Usuario
Método: POST
URL: http://localhost:3000/users/register
Body: JSON con los detalles del usuario, como email, password, parcela, dni, phone.
2. Inicio de Sesión de Usuario
Método: POST
URL: http://localhost:3000/users/login
Body: JSON con email y password del usuario.
3. Obtener Usuario por Correo Electrónico
Método: GET
URL: http://localhost:3000/users/:email (reemplaza :email con el correo electrónico real del usuario).
4. Obtener Todos los Usuarios
Método: GET
URL: http://localhost:3000/users/

{
  "email": "usuario@example.com",
  "password": "contraseña123",
  "parcela": 10,
  "dni": "12345678A",
  "phone": 123456789
}
