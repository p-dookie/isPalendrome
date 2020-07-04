function isPalendrome(palendrome) {
  let splitPalendrome = palendrome.split("");
  let reversePalendrome = splitPalendrome.reverse("");
  let joinPalendrome = reversePalendrome.join("");
  if(palendrome === joinPalendrome) {
    return "yes";
  } else {
    return "no";
  }
}
