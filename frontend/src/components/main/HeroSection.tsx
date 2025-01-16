import { Box, Typography } from "@mui/material";
import LibraryImage from '../../assets/Library.jpg';

const HeroSection = () => {
  return (
    <Box className="
    relative h-auto bg-cover bg-center py-32 px-5 
    sm:h-auto 
    md:h-auto
    md:flex
    md:items-center
    md:justify-center
    lg:h-[100vh]
    lg:flex
    lg:items-center
    lg:justify-center
    "
      sx={{
        backgroundImage: `url(${LibraryImage})`,
      }} >

      {/* FOR OVERLAY */}
      <Box className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-70"></Box>
      <Box className="relative z-10 text-white h-auto max-w-[800px]">
        <Typography sx={{ fontFamily: 'Inter'}} variant="h6">
        Welcome to BookHive, your go-to platform for all things books. Our system provides an easy way to inquire about books, request books, and browse our entire collection. You can discover popular books, stay updated with the latest releases, and explore all available books to find your next great read. With BookHive, managing your reading experience has never been easier and more enjoyable.
        </Typography>
      </Box>

    </Box>
  );
};

export default HeroSection;
