'use client';

import { Box, Card, Skeleton, useTheme } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

const CharacterSummarySkeleton = () => {
  const theme = useTheme();

  const imageSkeletonRef = useRef<HTMLElement>();

  const [imageHeight, setImageHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (imageSkeletonRef.current) {
        const imageWidth = imageSkeletonRef.current.offsetWidth;
        const imageHeight = imageWidth * 1.55;
        setImageHeight(imageHeight);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Card sx={{ backgroundColor: theme.palette.background.neutral, height: imageHeight }}>
      <Box sx={{ width: '100%', height: '84%' }} ref={imageSkeletonRef}>
        <Skeleton variant="rectangular" width="100%" height="100%" />
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        paddingX={2}
        paddingY={1}
        height="16%"
      >
        <Skeleton variant="text" width={90} height={25} />

        <Skeleton variant="circular" width={20} height={20} />
      </Box>
    </Card>
  );
};

export default CharacterSummarySkeleton;
