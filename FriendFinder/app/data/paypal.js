onAuthorize: function(data, actions) {

    // Make a call to the REST API to execute the payment
    return actions.payment.execute().then(function() {
    // The verified payment page goes here
        actions.redirect('');
    }
);
},

onCancel: function(data, actions) {
    actions.redirect();
}

}, '#paypal-button-container');