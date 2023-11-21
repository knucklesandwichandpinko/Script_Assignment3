// to display student info
const studentInfo = document.getElementById('student-info');
studentInfo.textContent = 'Student ID: 200383347 | Name: Eldhose Ben';

// Function to capture form values and display pizza description
function submitOrder() {
    // Get form values
    const pizzaSize = document.getElementById('pizza-size').value;
    const pizzaToppings = getSelectedToppings(); // Assume you have implemented a function to get toppings
    const deliveryOption = document.querySelector('input[name="delivery"]:checked').value;

    // Pizza object function
    const pizza = new Pizza(pizzaSize, pizzaToppings, deliveryOption);

    //  pizza description function
    const pizzaDescription = document.getElementById('pizza-description');
    pizzaDescription.innerHTML = `<p>Your Pizza Order:</p>
                                  <p>Size: ${pizza.size}</p>
                                  <p>Toppings: ${pizza.toppings.join(', ')}</p>
                                  <p>Delivery Option: ${pizza.deliveryOption}</p>`;
}


function getSelectedToppings() {
    const toppings = [];
    const checkboxes = document.querySelectorAll('input[name="topping"]:checked');
    checkboxes.forEach(checkbox => toppings.push(checkbox.value));
    return toppings;
}


class Pizza {
    constructor(size, toppings, deliveryOption) {
        this.size = size;
        this.toppings = toppings;
        this.deliveryOption = deliveryOption;
      
    }
}
