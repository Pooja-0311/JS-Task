let income = 500000;
let tex = 0;

if (income <= 250000) {
  tax = 0;
} else if (income <= 500000) {
  tax = (income - 250000) * 0.05;
} else if (income <= 1000000) {
  tax = (income - 250000) + (500000 * 0.05) + 0.2;
} 



