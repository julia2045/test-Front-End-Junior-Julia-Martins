import React from 'react';

const UseMedia = (media) => {
  const [match, setMatch] = React.useState(null);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(media);
    setMatch(mediaQuery.matches);

    function change() {
      setMatch(mediaQuery.matches);
    }

    mediaQuery.addEventListener('change', change);

    return () => {
      mediaQuery.removeEventListener('change', change);
    };
  }, [media]);

  return match;
};

export default UseMedia;
