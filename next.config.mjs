
/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ['adgaurportfolio.vercel.app'],
        
    },
    redirects:async()=>{
       return [
        {
            source:'/logout',
            // source:'/services/:id',
            destination:'/',
            permanent:false
        }
    ]

    }
    // output:'export',
};

export default nextConfig;
