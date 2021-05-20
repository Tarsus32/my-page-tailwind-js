module.exports = {
    purge: [],
    darkMode: false, 
    theme: {
      extend: {
        fontFamily: {
          body: ['Poppins']
        },
      backgroundImage: theme => ({
        'my-profile-foto': "url('/src/img/profile_photo.jpg')",
        'home-title': "url('/src/img/titleimg2.jpg')",
        'about-title': "url('/src/img/titleimg3.jpg')",
        'about-more': "url('/src/img/titleimg4.jpg')",
        'contact-title': "url('/src/img/titleimgcontact.jpg')",
        'road-back': "url('/src/img/about/learn.jpg')",
        'road-left': "url('/src/img/about/road1.jpg')",
        'road-right': "url('/src/img/about/road2.jpg')",
        'hobby-back': "url('/src/img/about/workout.jpeg')",
        'hobby-left': "url('/src/img/about/hobby1.jpg')",
        'hobby-right': "url('/src/img/about/hobby2.jpg')",
        'future-back': "url('/src/img/about/future-back.jpg')",
        'future-left': "url('/src/img/about/future1.jpg')",
        'future-right': "url('/src/img/about/future2.jpg')",
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

      },
    },
    variants: {},
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
    ],
  }