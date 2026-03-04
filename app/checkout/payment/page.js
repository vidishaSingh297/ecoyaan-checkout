export default function PaymentPage() {
  return (

<div className="min-h-screen flex items-center justify-center bg-gray-100">

<div className="bg-white p-8 rounded-xl shadow-lg w-[400px] text-black">

<h1 className="text-2xl font-bold mb-6 text-center">
Payment Confirmation
</h1>

<div className="flex justify-between mb-2">
<p>Bamboo Toothbrush x2</p>
<p>₹598</p>
</div>

<div className="flex justify-between mb-2">
<p>Cotton Produce Bags</p>
<p>₹450</p>
</div>

<div className="flex justify-between mb-4">
<p>Shipping</p>
<p>₹50</p>
</div>

<hr />

<div className="flex justify-between font-bold text-lg mt-4">
<p>Total</p>
<p>₹1098</p>
</div>

<a href="/checkout/success">

<button className="w-full mt-6 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">

Pay Securely

</button>

</a>

</div>

</div>

  );
}