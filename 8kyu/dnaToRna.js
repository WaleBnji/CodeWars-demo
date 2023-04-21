/**
 * Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
 */

//My solution
function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  const arr = dna.split('');
  const rna = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] === 'T' ? rna.push('U') : rna.push(arr[i]);
  }
  return rna.join('');
}

console.log(DNAtoRNA('GCAT'));
