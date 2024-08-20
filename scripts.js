document.getElementById('tax-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const amount = parseFloat(document.getElementById('transaction-amount').value);
    const taxRate = parseFloat(document.getElementById('tax-rate').value);
    const icmsRate = parseFloat(document.getElementById('icms-rate').value);
    
    if (isNaN(amount) || isNaN(taxRate) || isNaN(icmsRate)) {
        alert('Por favor, insira valores válidos.');
        return;
    }
    
    const taxAmount = (amount * taxRate) / 100;
    const icmsAmount = (amount * icmsRate) / 100;
    const totalAmount = amount + taxAmount + icmsAmount;
    
    document.getElementById('tax-amount').textContent = `Taxa: R$ ${taxAmount.toFixed(2)}`;
    document.getElementById('icms-amount').textContent = `ICMS: R$ ${icmsAmount.toFixed(2)}`;
    document.getElementById('total-amount').textContent = `Total a Pagar: R$ ${totalAmount.toFixed(2)}`;
});