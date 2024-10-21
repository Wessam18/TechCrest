import { useContext, useMemo, useState } from "react";
import { Button, Container, Stack, Alert, Table, Form } from "react-bootstrap";
import React from "react";
import { cartContext } from "../context/cartContext"; // Import the cartContext
import '../styles/Checkout.css'
import { AuthContext } from "../context/AuthContext"; // Import the authContext

function CheckoutPage() {
  const { cartItems } = useContext(cartContext); // Access cart items
  const { isAuthenticated } = useContext(AuthContext); // Access auth status

  const [paymentMethod, setPaymentMethod] = useState(""); // State for selected payment method
  const [orderConfirmed, setOrderConfirmed] = useState(false); // State for order confirmation message

  // Calculate the total sum of cart items
  const totalSum = useMemo(() => {
    return cartItems.reduce((prev, item) => {
      return prev + item.price * item.quantity;
    }, 0);
  }, [cartItems]);

  // Handle the confirm button click
  const handleConfirm = () => {
    if (!isAuthenticated) {
      alert("You must be logged in to confirm your order.");
      return;
    }
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }
    // Order confirmation logic
    setOrderConfirmed(true);
    console.log("Order confirmed!");
    // Optionally reset cart or perform further actions
  };

  return (
    <Container>
      <Stack direction="vertical" gap={4} className="my-4">
        <h2 className="text-center">Checkout</h2> {/* Centered heading */}

        {/* Order Summary Table */}
        <div className="overflow-x-auto w-full mb-10">
          <Table className="min-w-full bg-white shadow-lg rounded-lg border border-gray-300">
            <thead>
              <tr>
                <th className="py-3 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600 text-left border-b border-gray-300">Product Name</th>
                <th className="py-3 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600 text-left border-b border-gray-300">Quantity</th>
                <th className="py-3 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600 text-left border-b border-gray-300">Price/One</th>
                <th className="py-3 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600 text-left border-b border-gray-300">Total Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item._id} className="hover:bg-gray-100">
                  <td className="py-4 px-6 border-b border-gray-300">{item.title}</td>
                  <td className="py-4 px-6 border-b border-gray-300">{item.quantity}</td>
                  <td className="py-4 px-6 border-b border-gray-300">{item.price} EGP</td>
                  <td className="py-4 px-6 border-b border-gray-300">{(item.price * item.quantity).toFixed(2)} EGP</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3" className="py-3 px-6 text-right font-bold border-t border-gray-300">Total:</td>
                <td className="py-3 px-6 font-bold border-t border-gray-300">{totalSum.toFixed(2)} EGP</td>
              </tr>
            </tfoot>
          </Table>
        </div>

        {/* Display the total sum */}
        <div>
          You have to pay: <strong>{totalSum.toFixed(2)} EGP</strong>
        </div>

        {/* Payment method selection using radio buttons with enhanced visibility */}
        <Form.Group>
          <Form.Label style={{ fontWeight: "bold" }}>Select Payment Method:</Form.Label>
          <div style={{ marginBottom: "1rem" }}>
            <Form.Check
              type="radio"
              label="Vodafone Cash"
              name="paymentMethod"
              value="vodafone"
              checked={paymentMethod === "vodafone"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              style={{ fontWeight: "normal" }}
              custom
              className="custom-radio" // Apply custom class
            />
            <Form.Check
              type="radio"
              label="Cash on Delivery"
              name="paymentMethod"
              value="cash_on_delivery"
              checked={paymentMethod === "cash_on_delivery"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              style={{ fontWeight: "normal" }}
              custom
              className="custom-radio" // Apply custom class
            />
            <Form.Check
              type="radio"
              label="Visa"
              name="paymentMethod"
              value="visa"
              checked={paymentMethod === "visa"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              style={{ fontWeight: "normal" }}
              custom
              className="custom-radio" // Apply custom class
            />
          </div>
        </Form.Group>

        {/* Show warning if user is not authenticated */}
        {!isAuthenticated && (
          <Alert variant="warning">
            You must be logged in to complete the purchase.
          </Alert>
        )}

        {/* Confirm button */}
        <Button variant="danger" onClick={handleConfirm} disabled={!isAuthenticated}>
          Confirm
        </Button>

        {/* Order confirmation message */}
        {orderConfirmed && (
          <Alert variant="success" className="mt-4">
            Your order is confirmed and will reach you soon. Thank you for choosing TechCrest!
          </Alert>
        )}
      </Stack>
    </Container>
  );
}

export default CheckoutPage;
