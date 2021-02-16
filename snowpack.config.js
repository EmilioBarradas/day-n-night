/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
        public: '/',
        src: '/dist',
    },
    plugins: [
        '@snowpack/plugin-svelte',
        '@snowpack/plugin-typescript',
        '@snowpack/plugin-webpack'
    ],
    packageOptions: {
        knownEntrypoints: ["@roxi/routify/runtime/buildRoutes"],
        packageLookupFields: ["svelte", "module", "main"]
    },
    devOptions: {
        port: 5000
    },
    buildOptions: {
        /* ... */
    },
    routes: [
        { match: 'routes', src: '.*', dest: '/index.html'}
    ],
};
