var lut = []; for (var i=0; i<256; i++) { lut[i] = (i<16?'0':'')+(i).toString(16); }

function generateUuid() {
    var dvals = new Uint32Array(4);
    window.crypto.getRandomValues(dvals);
    var d0 = dvals[0];
    var d1 = dvals[1];
    var d2 = dvals[2];
    var d3 = dvals[3];
    return lut[d0&0xff]+lut[d0>>8&0xff]+lut[d0>>16&0xff]+lut[d0>>24&0xff]+'-'+
        lut[d1&0xff]+lut[d1>>8&0xff]+'-'+lut[d1>>16&0x0f|0x40]+lut[d1>>24&0xff]+'-'+
        lut[d2&0x3f|0x80]+lut[d2>>8&0xff]+'-'+lut[d2>>16&0xff]+lut[d2>>24&0xff]+    lut[d3&0xff]+lut[d3>>8&0xff]+lut[d3>>16&0xff]+lut[d3>>24&0xff];
}

export default class Message {
    constructor(message) {
        if (typeof message === 'string') {
            message = { text: message }
        }

        this.message = {
            id: generateUuid(),
            text: message.text ? message.text : '',
            type: message.type ? message.type : 'info',
            sticky: message.sticky ? message.sticky : 2,
        }
    }

    save({ commit }) {
        commit('receiveItem', this.message)
    }
}