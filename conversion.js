"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DNAtoRNA = DNAtoRNA;
function DNAtoRNA(dna) {
    return dna.replaceAll('T', 'U');
}
