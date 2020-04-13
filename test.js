const createLexer = require('./lexer')

const lexer = createLexer("5 - 3 - 1 - 4")

while(!lexer.eof())
{
    console.log(lexer.peek())
    lexer.next()
}
