import { SPLASH } from "@/shared/definitions/sentences/path.sentences";

const getSplashImage = () => {
  const now = new Date();
  const month = now.getMonth();

  if (month === 11) {
    return SPLASH[2];
  }

  switch (true) {
    case month >= 0 && month <= 1:
    case month >= 2 && month <= 4:
      return SPLASH[1];
    case month >= 5 && month <= 7:
      return SPLASH[3];
    case month >= 8 && month <= 10:
      return SPLASH[4];
    default:
      return SPLASH[0];
  }
};

export const splashImage = getSplashImage();