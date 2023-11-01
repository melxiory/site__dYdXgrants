import Popup from '../helpers/Popup.js';

class BurgerMenu extends Popup {
  constructor() {
    super();

    this.burgerButton = document.querySelector('.icon-menu');
    this.sidebar = document.querySelector('.sidebar')
  }

  /**
   * Initialize the menu functionality.
   */
  init() {
    if (this.burgerButton) {
      document.addEventListener('click', ({ target }) => {
        if (target.closest('.icon-menu') && !this.isMenuOpen) {
          this.menuOpen();
        } else if (target.closest('.icon-menu') && this.isMenuOpen){
          this.menuClose();
        }
      });
    }
  }

  /**
   * Open the menu.
   */
  menuOpen() {
    this.toggleBodyLock(true);
    this.html.classList.add('menu-open');
    this.sidebar.style.top = '0'
  }

  /**
   * Close the menu.
   */
  menuClose() {
    this.toggleBodyLock(false);
    this.html.classList.remove('menu-open');
    this.sidebar.style.top = '-100vh'
  }

  get isMenuOpen() {
    return this.html.classList.contains('menu-open');
  }
}

export default BurgerMenu;
