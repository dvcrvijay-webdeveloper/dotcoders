/** @type {import('next').NextConfig} */
console.log('Loaded BASE_URL:', process.env.NEXT_PUBLIC_BASE_URL); // Debugging line
const nextConfig = {
    basePath: process.env.NEXT_PUBLIC_BASE_URL || '',
    assetPrefix: process.env.NEXT_PUBLIC_BASE_URL ? process.env.NEXT_PUBLIC_BASE_URL + '/' : '',
   
    //basePath: '/vijay-portfolio/next',
    trailingSlash: true,
    images: {
        unoptimized: true,
        // Uncomment and configure if using a custom image loader like Imgix
        // loader: 'imgix',
        //path: `${process.env.BASE_URL}/`,
        
      },
    crossOrigin: 'anonymous',  
    output: 'export',
 
};

export default nextConfig;
