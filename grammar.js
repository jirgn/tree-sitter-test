module.exports = grammar({
  name: 'precTest',

  rules: {

    program: $ => repeat(choice(
        $.number,
        $.identifier
    )),
    number: $ => /[0-9]+/,
    identifier: $ => /[a-zA-Z0-9]+/,
  }
});

