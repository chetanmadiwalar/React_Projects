import React from 'react'

export default function About(props) {
  return (
    <div className='my-5'style={{backgroundColor:props.mode==='dark'?'#001739':'white',color:props.mode==='light'?'black':'white'}}>
        <h2 className='my-3'>About Us</h2>
      <p><strong>TextUtils is a lightweight web application designed to provide various text manipulation tools in a user-friendly interface. Here are some of the key features you might find useful:</strong></p>

        <p>Word Counter: Counts the number of words in your text.</p>
        <p>Character Counter: Calculates the number of characters.</p>
        <p>Extra Spaces: Cleans up your text by removing unnecessary spaces.</p>
        <p>Case Conversion: Converts text to uppercase, lowercase, or capitalizes the first letter of each word.</p>
        <p>Copy Text: Allows you to easily copy your manipulated text to the clipboard.</p>
        <p>Clear Text Box: Clears the text box for a fresh start.</p>
        <p>Preview: Provides a live preview of your manipulated text.</p>
        <p>Dark Mode: Offers a dark mode for a more comfortable and stylish experience12.</p>
        <p>These tools can be particularly handy for anyone working with text in various contexts, such as writing, editing, or coding.</p>
    </div>
  )
}
