window.JR = {
  scrollTo: (id) => {
      const element = document.getElementById(id);
      if (!element) {
          return;
      }
      const content = document.getElementById('content');
      const y = element.getBoundingClientRect().top + content.scrollTop - 60;
      content.scroll({ top: y, behavior: 'smooth' });
  },
  closeMenu: () => {
    document.querySelector('.mdl-layout').MaterialLayout.toggleDrawer();
  },
};
