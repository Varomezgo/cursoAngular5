var mongoose = require('mongoose');

var FacturaSchema = new mongoose.Schema({ 
    razonSocial: String,
    cif: String,
    fecha: Object,
    base: Number,
    tipo: Number,
    importeIVA: Number,
    total: Number
});

module.exports = mongoose.model('Factura', FacturaSchema);
