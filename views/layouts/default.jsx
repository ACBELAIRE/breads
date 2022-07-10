// Create an HTML Boilerplate with jsx

//utilize JSX by requiring react
const React = require('react')

//write a function called Default to export code and utilize it elsewhere
//and pass html as an argument and write html code within the return

function Default(html) {
    return (
        <html>
            <head>
                <title> Default</title>
            </head>
            <body>
                <h1> HTML Rendered!</h1>
                <div className='container'>
                    {html.children}
                </div>
            </body>
        </html>
    )
}
//Default to the export the code and utilize it elsewhere
module.exports = Default
