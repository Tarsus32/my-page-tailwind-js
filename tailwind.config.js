module.exports = {
    purge: {
    enabled: false, 
     content: [
        './public/*.html',
        './src/*/**.js',
      ],
    }, 
    darkMode: false, 
    theme: {
      extend: {
        fontFamily: {
          body: ['Poppins']
        },
      backgroundImage: theme => ({
        'my-profile-foto': "url('../public/img/profile_photo.jpg')",
        'home-title': "url('../public/img/titleimg2.jpg')",
        'about-title': "url('../public/img/titleimg3.jpg')",
        'about-more': "url('../public/img/titleimg4.jpg')",
        'contact-title': "url('../public/img/titleimgcontact.jpg')",
        'road-back': "url('../public/img/about/learn.jpg')",
        'road-left': "url('../public/img/about/road1.jpg')",
        'road-right': "url('../public/img/about/road2.jpg')",
        'hobby-back': "url('../public/img/about/workout.jpeg')",
        'hobby-left': "url('../public/img/about/hobby1.jpg')",
        'hobby-right': "url('../public/img/about/hobby2.jpg')",
        'future-back': "url('../public/img/about/future-back.jpg')",
        'future-left': "url('../public/img/about/future1.jpg')",
        'future-right': "url('../public/img/about/future2.jpg')",
       }),
    zIndex: {
        '-1': '-1',
       },
    inset: {
      '38':'38%',
       },
    screens: {
      'large':'1260px',
      'mobile':'450px',
        },
    animation: {
          'my-animate': 'imgshow 0.4s ease',
         }
      },
    },
    variants: {},
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
    ],
  }