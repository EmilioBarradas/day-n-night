<script>
    import { Router } from '@roxi/routify';
    import { routes } from "./.routify/routes";
</script>

<style global>
    /* prgecss start ignore */
    @tailwind base;
    @tailwind components;
    /* purgecss end ignore */

    @tailwind utilities;
</style>

<Router {routes} />
