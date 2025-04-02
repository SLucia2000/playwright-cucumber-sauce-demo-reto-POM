Feature: Proceso de compra

  @checkout
  Scenario: Completar una compra con éxito
    Given el usuario está en la página de inicio de sesión
    When ingresa el usuario "standard_user" y la contraseña "secret_sauce"
    And agrega el producto "Sauce Labs Backpack" al carrito
    And abre el carrito de compras
    And procede al checkout
    And ingresa la información de compra "Lucia" "MF" "12345"
    When confirma la compra
    Then debería ver el mensaje "Thank you for your order!"
