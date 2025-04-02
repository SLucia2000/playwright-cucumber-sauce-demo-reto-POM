Feature: Inicio de sesión en Sauce Demo

  Scenario: El usuario inicia sesión con credenciales válidas
    Given el usuario está en la página de inicio de sesión
    When ingresa el usuario "standard_user" y la contraseña "secret_sauce"
    Then debería ver la página de productos

  Scenario: El usuario intenta iniciar sesión con credenciales inválidas
    Given el usuario está en la página de inicio de sesión
    When ingresa el usuario "invalid_user" y la contraseña "wrong_password"
    Then debería ver un mensaje de error





