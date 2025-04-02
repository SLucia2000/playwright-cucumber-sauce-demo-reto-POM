Feature: Carrito de compras

  Scenario: Agregar un producto al carrito
    Given el usuario está en la página de inicio de sesión
    When ingresa el usuario "standard_user" y la contraseña "secret_sauce"
    And agrega el producto "Sauce Labs Backpack" al carrito
    Then debería ver "1" producto en el carrito

  Scenario: Verificar los productos en el carrito
    Given el usuario está en la página de inicio de sesión
    When ingresa el usuario "standard_user" y la contraseña "secret_sauce"
    And agrega el producto "Sauce Labs Backpack" al carrito
    And abre el carrito de compras
    Then debería ver el producto "Sauce Labs Backpack" en el carrito
