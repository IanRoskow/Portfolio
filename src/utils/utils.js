//Scroll page funciton that is used for the Menus and for the various action buttons.
//Parameter is a string of location section and it scrolls to that part of the page by calculating the Hero image height into the equation.
//Todo - smooth out the scroll effect with more than behavior smooth.
export const scrollPage = position => {
  let height = window.innerHeight;

  const desktop = {
    home: 0,
    about: 20,
    projects: 950,
    contact: 3320
  };

  const mobile = {
    home: 0,
    about: 20,
    projects: 1612,
    contact: 5023
  };

  let goto = window.innerWidth > 780 ? desktop[position] : mobile[position];

  goto = goto ? goto + height : goto;

  window.scroll({
    top: goto,
    left: 0,
    behavior: 'smooth'
  });
};
