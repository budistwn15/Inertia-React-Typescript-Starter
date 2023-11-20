import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import ReactDOMServer from 'react-dom/server';
import route from '../../vendor/tightenco/ziggy/dist/index.m';

const appName: string = import.meta.env.VITE_APP_NAME || 'Laravel';
createServer((page: any) =>
    createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
        title: (title: string) => `${title} - ${appName}`,
        resolve: (name: string) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
        setup: ({ App, props }: any) => {
            // @ts-ignore
            global.route = (name, params, absolute) =>
                route(name, params, absolute, {
                    ...page.props.ziggy,
                    location: new URL(page.props.ziggy.location),
                });
            return <App {...props} />;
        },
    }),
);
