# Generate-Password
A JavaScript code to Generate Password based on Some Predetermined Parameters


# Notes
I am using window prompts and window.confirm to ask the user if they want to use certain characters in their password.

I concatenate the properties of key_string to passwordCharSet, not the response to the prompt.

When getting the random character, I had to index passwordCharSet and use passwordCharSet.length.

In key_strings.symbol I had to escape " and \.


In your loop code, A new variable is created every time you tour the loop. That's why only one last letter is printed.

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
for (var i = 0; i < passwordLength; i++) {
  var password = passwordChar[Math.floor(Math.random() * passwordChar.length)]
}
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Change code in for loop.

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// like this
let password = '';
for (let i = 0; i < passwordLength; i++) {
  password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
}
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
