const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
    //async rewrites() {
        //return  {
            //fallback: [
                //{
                    //source: '/:path*',
                    //destination: `http://localhost:8000/:path*`,
                //},
            //]
        //}
    //},
    // ONLY for Next.js 10, if you use Next.js 11, delete this block
    future: {
        webpack5: true,
    },
})

