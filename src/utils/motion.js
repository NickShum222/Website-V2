export const landingSubSlideRight = {
  initial: {
    opacity: 0,
    x: "-10%",
  },
  animate: (delay) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      ease: [0.25, 1, 0.5, 1],
      delay: delay,
    },
  }),
};

export const landingSubRotateX = {
  initial: {
    opacity: 0,
    rotateX: -90,
    y: "50%",
  },
  animate: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    opacity: 0,
    rotateX: 90,
    y: "-50%",
    transition: {
      duration: 0.85,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const servicesToolsSlideIn = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 100,
    translateX: 50,
  },
  enter: (index) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.75,
      delay: index * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
      opacity: { duration: 0.35 },
    },
  }),
};

export const servicesToolsSlideIn2 = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 100,
    translateX: -50,
  },
  enter: (index) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.75,
      delay: index * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
      opacity: { duration: 0.35 },
    },
  }),
};

export const experiencesBodySlideUp = {
  initial: {
    y: "5%",
    opacity: 0,
  },
  enter: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.25,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    y: "10%",
    opacity: 0,
  },
};

export const bodyAnim2SlideUp = {
  initial: {
    y: "120%",
  },
  enter: (delay) => ({
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1],
      delay: delay * 0.01 + 0.2,
    },
  }),
};

export const headerSlide = {
  initial: {
    x: "-100%",
  },
  enter: {
    x: "0%",
    transition: {
      duration: 0.9,
      delay: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const fadeIn = {
  initial: {
    opacity: 0,
    y: "30%",
  },
  enter: (delay) => ({
    y: "0",
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.5,
    },
  }),
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const navSlideIn = {
  initial: {
    x: "-100%",
  },
  enter: {
    x: "0%",
    transition: {
      duration: 1.25,
      delay: 0.5,
      ease: [0.25, 1, 0.5, 1],
    },
  },
  exit: {
    x: "-100%",
    transition: {
      duration: 1.25,
      delay: 0.15,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};
export const navSlideUp = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  enter: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.5,
      ease: [0.25, 1, 0.5, 1],
    },
  },
  exit: {
    y: "100%",
    opacity: 0,
    transition: {
      duration: 1,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

export const navSlideDown = {
  initial: {
    y: "-100%",
  },
  enter: {
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.25, 1, 0.5, 1],
    },
  },
  exit: {
    y: "-100%",
    transition: {
      duration: 0.75,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

export const navActive = {
  initial: {
    y: 0,
  },
  enter: {
    y: "-100%",
    transition: {
      duration: 0.45,
      delay: 0.05,
      ease: [0.32, 0, 0.67, 0],
    },
  },
  exit: {
    y: "-200%",
    transition: {
      duration: 0.45,
      delay: 0.05,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};
export const toggleNav = {
  initial: {
    scale: 0,
  },
  enter: {
    scale: "100%",
    transition: {
      duration: 0.45,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
  exit: {
    scale: 0,
    transition: {
      duration: 0.35,
    },
  },
};
