/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    colors : {
      'bg' : '#151c24',
      'card' : '#212b35',
      'hl' : '#f9aa05',
      'white' : '#ffffff',
      'red' : '#A7001E',
      'green' : '#7AA95C'
    },
    flex : {
      '1' : '1',
      '2' : '2',
      '3' : '3',
      '4' : '4',
      '5' : '5',
      '6' : '6',
      '7' : '7',
      '8' : '8',
      '9' : '9',
    },
    keyframes : {
      tiltshakinganime : {
        '0%' : { transform: 'translateY(0)' },
        '25%' : { transform: 'translateY(5px)' },
        '50%' :{ transform: 'translateY(-5px)' },
        '75%' :{ transform: 'translateY(5px)' },
        '100%' :{ transform: 'translateY(0)' },
      },
    },
    animation : {
      tiltshaking : 'tiltshakinganime 0.5s infinite ease alternate',
    },
  },
  plugins: [],
}

