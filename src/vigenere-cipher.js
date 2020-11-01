class VigenereCipheringMachine {
  constructor(stat = true) {
    this.stat = stat;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error();
    const alp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    message = message.toUpperCase().split("");
    key = key.toUpperCase().split("");
    let i = 0;
    let j = 0;

    while (i < message.length) {
      if (alp.indexOf(message[i]) !== -1) {
        message[i] =
          alp[(alp.indexOf(message[i]) + alp.indexOf(key[j])) % alp.length];
        j = ++j % key.length;
      }
      i++;
    }
    return this.stat ? message.join("") : message.reverse().join("");
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) throw new Error();
    const alp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    encryptedMessage = encryptedMessage.toUpperCase().split("");
    key = key.toUpperCase().split("");
    let i = 0;
    let j = 0;
    while (i < encryptedMessage.length) {
      if (alp.indexOf(encryptedMessage[i]) !== -1) {
        encryptedMessage[i] =
          alp[
            (alp.indexOf(encryptedMessage[i]) +
              alp.length -
              alp.indexOf(key[j])) %
              alp.length
          ];
        j = ++j % key.length;
      }
      i++;
    }
    return this.stat
      ? encryptedMessage.join("")
      : encryptedMessage.reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
