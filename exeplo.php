
<?php
$string = "Esta é uma string com vogais.";
$pattern = '/[aeiouáéíóúàèìòùãõäëïöü]/i'; // Padrão para encontrar vogais, incluindo acentos
$replacement = "*";
$newString = preg_replace($pattern, $replacement, $string);
echo $newString;
?>
```


<?php
function isPrime($number) {
    if ($number <=  1) {
        return false;
    }
    for ($i =  2; $i < sqrt($number); $i++) {
        if ($number % $i ==  0) {
            return false;
        }
    }
    return true;
}
?>
```


<?php
function reverseString($string) {
    $chars = str_split($string);
    $reversedChars = array_reverse($chars);
    return implode('', $reversedChars);
}
?>
```


<?php
function checkSign($number) {
    if ($number >  0) {
        return "Positivo";
    } elseif ($number <  0) {
        return "Negativo";
    } else {
        return "Zero";
    }
}
?>
```


<?php
$phrase = "Esta é uma frase com várias palavras.";
$words = explode(" ", $phrase);
$count = count($words);
foreach ($words as $word) {
    echo $word . "\n";
}
?>
```


<?php
function isPalindrome($word) {
    $reversedWord = strrev($word);
    return $word === $reversedWord;
}
?>
```


<?php
for ($i =  1; $i <=  20; $i++) {
    if ($i %  3 ==  0) {
        echo "?\n";
    } else {
        echo $i . "\n";
    }
}
?>
```


<?php
function removeSpaces($string) {
    return str_replace(' ', '', $string);
}
?>
```


<?php
$first =  0;
$second =  1;
echo $first . "\n"; // Imprime o primeiro termo
echo $second . "\n"; // Imprime o segundo termo
for ($i =  2; $i <  9; $i++) {
    $next = $first + $second;
    $first = $second;
    $second = $next;
    echo $next . "\n";
}
?>
```


<?php
function isPangram($text) {
    $alphabet = range('a', 'z');
    foreach (str_split(strtolower($text)) as $letter) {
        if (in_array($letter, $alphabet)) {
            unset($alphabet[array_search($letter, $alphabet)]);
        }
    }
    return empty($alphabet);
}
?>
```